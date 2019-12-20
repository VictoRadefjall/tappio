<template>
    
    <article id="map-view">
        <button class="" @click='initMap' >Klicka</button>
        <div id="map"></div>
        <div id="panel"></div>  

    </article>
</template>

<script>
import axios from "axios" 
export default {
    name: 'map-view',
    data(){
        return{
        pos: '',
        map: '',
        bounds: '',
        infoWindow: '',
        currentInfoWindow: '',
        service: '',
        infoPane: '',
        google: ''
        }
    },
    methods: {
        async initMap() {
            axios.defaults.headers.common['Access-Control-Allow-Origin']  = await '*';
            this.google = await axios.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyDUH2iDTgDV1MJC_vdTxFY-tRUTlXxPmuA&libraries=places&callback=initMap")
            console.log('lololo')
        this.bounds = await new this.google.maps.LatLngBounds();
        this.infoWindow = await new this.google.maps.InfoWindow;
        this.currentInfoWindow = this.infoWindow;
        this.infoPane = document.getElementById('panel');

        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            this.pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
            };
            this.map = new this.google.maps.Map(document.getElementById('map'), {
            center: this.pos,
            zoom: 15
            });
            this.bounds.extend(this.pos);

            this.infoWindow.setPosition(this.pos);
            this.infoWindow.setContent('Location found.');
            this.infoWindow.open(map);
            this.map.setCenter(this.pos);

            this.getNearbyPlaces(this.pos);
            }, () => {
            // Browser supports geolocation, but user has denied permission
            this.handleLocationError(true, this.infoWindow);
        });
        } else {
        // Browser doesn't support geolocation
        handleLocationError(false, this.infoWindow);
        }
    },

    // Handle a geolocation error
    handleLocationError(browserHasGeolocation, infoWindow) {
        // Set default location to Sydney, Australia
        this.pos = {lat: -33.856, lng: 151.215};
        this.map = new this.google.maps.Map(document.getElementById('map'), {
        center: this.pos,
        zoom: 15
        });

        // Display an InfoWindow at the map center
        infoWindow.setPosition(this.pos);
        infoWindow.setContent(browserHasGeolocation ?
        'Geolocation permissions denied. Using default location.' :
        'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(this.map);
        this.currentInfoWindow = infoWindow;

        /* TODO: Step 3B3, Call the Places Nearby Search */
        // Call Places Nearby Search on the default location
        getNearbyPlaces(this.pos);
        },
    /* END TODO: Step 2, Geolocate your user */
    /* TODO: Step 3B1, Call the Places Nearby Search */
    // Perform a Places Nearby Search Request
    getNearbyPlaces(position) {
        let request = {
        location: position,
        rankBy: this.google.maps.places.RankBy.DISTANCE,
        keyword: 'frisör'
        };

        this.service = new this.google.maps.places.PlacesService(this.map);
        this.service.nearbySearch(request, nearbyCallback);
    },

        // Handle the results (up to 20) of the Nearby Search
    nearbyCallback(results, status) {
        if (status == this.google.maps.places.PlacesServiceStatus.OK) {
        this.createMarkers(results);
        }
    },

    /* TODO: Step 3C, Generate markers for search results */
    // Set markers at the location of each place result
    createMarkers(places) {
        places.forEach(place => {
        let marker = new this.google.maps.Marker({
            position: place.geometry.location,
            map: this.map,
            title: place.name
        });

        /* TODO: Step 4B: Add click listeners to the markers */
        // Add click listener to each marker
        this.google.maps.event.addListener(marker, 'click', () => {
            let request = {
            placeId: place.place_id,
            fields: ['name', 'formatted_address', 'geometry', 'rating',
                'website', 'photos']
            };

    /* Only fetch the details of a place when the user clicks on a marker.
    * If we fetch the details for all place results as soon as we get
    * the search response, we will hit API rate limits. */
    this.service.getDetails(request, (placeResult, status) => {
    showDetails(placeResult, marker, status)
    });
});

        // Adjust the map bounds to include the location of this marker
        this.bounds.extend(place.geometry.location);
        });
        /* Once all the markers have been placed, adjust the bounds of the map to
        * show all the markers within the visible area. */
        this.map.fitBounds(this.bounds);
    },

    /* TODO: Step 4C: Show place details in an info window */
    // Builds an InfoWindow to display details above the marker
    showDetails(placeResult, marker, status) {
        if (status == this.google.maps.places.PlacesServiceStatus.OK) {
        let placeInfowindow = new this.google.maps.InfoWindow();
        placeInfowindow.setContent('<div><strong>' + placeResult.name +
            '</strong><br>' + 'Rating: ' + placeResult.rating + '</div>');
        placeInfowindow.open(marker.map, marker);
        this.currentInfoWindow.close();
        this.currentInfoWindow = placeInfowindow;
        this.showPanel(placeResult);
        } else {
        console.log('showDetails failed: ' + status);
        }
    },

    /* TODO: Step 4D: Load place details in a sidebar */
    // Displays place details in a sidebar
    showPanel(placeResult) {
    // If infoPane is already open, close it
    if (this.infoPane.classList.contains("open")) {
    this.infoPane.classList.remove("open");
    }

    // Clear the previous details
    while (this.infoPane.lastChild) {
    this.infoPane.removeChild(this.infoPane.lastChild);
    }

    /* TODO: Step 4E: Display a Place Photo with the Place Details */
    // Add the primary photo, if there is one
    if (placeResult.photos != null) {
        let firstPhoto = placeResult.photos[0];
        let photo = document.createElement('img');
        photo.classList.add('hero');
        photo.src = firstPhoto.getUrl();
        this.infoPane.appendChild(photo);
    }

    // Add place details with text formatting
    let name = document.createElement('h1');
    name.classList.add('place');
    name.textContent = placeResult.name;
    this.infoPane.appendChild(name);
    if (placeResult.rating != null) {
    let rating = document.createElement('p');
    rating.classList.add('details');
    rating.textContent = `Rating: ${placeResult.rating} \u272e`;
    this.infoPane.appendChild(rating);
    }
    let address = document.createElement('p');
    address.classList.add('details');
    address.textContent = placeResult.formatted_address;
    this.infoPane.appendChild(address);
    if (placeResult.website) {
    let websitePara = document.createElement('p');
    let websiteLink = document.createElement('a');
    let websiteUrl = document.createTextNode(placeResult.website);
    websiteLink.appendChild(websiteUrl);
    websiteLink.title = placeResult.website;
    websiteLink.href = placeResult.website;
    websitePara.appendChild(websiteLink);
    this.infoPane.appendChild(websitePara);
    }

    // Open the infoPane
    this.infoPane.classList.add("open");
}
    },
    mounted(){
        this.initMap;
    }


}
</script>


  <style>
    /* Always set the map height explicitly to define the size of the div
     * element that contains the map. */
    #map {
      height: 100%;
      background-color: grey;
    }

    /* Optional: Makes the sample page fill the window. */
    html,
    body {
      height: 100%;
      margin: 0;
      padding: 0;
    }

    /* TODO: Step 4A1: Make a generic sidebar */
/* Styling for an info pane that slides out from the left. 
    * Hidden by default. */
#panel {
    height: 100%;
    width: null;
    background-color: white;
    position: fixed;
    z-index: 1;
    overflow-x: hidden;
    transition: all .2s ease-out;
}

.open {
    width: 250px;
}

/* Styling for place details */
.hero {
    width: 100%;
    height: auto;
    max-height: 166px;
    display: block;
}

.place,
p {
    font-family: 'open sans', arial, sans-serif;
    padding-left: 18px;
    padding-right: 18px;
}

.details {
    color: darkslategrey;
}

a {
    text-decoration: none;
    color: cadetblue;
}
  </style>