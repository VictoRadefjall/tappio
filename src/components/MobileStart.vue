<template>
    <main id="start">


        <!-- DENNA SEKTION ÄR UTKOMMENTERAD FÖR NYARE VERSION -->


        <input type="search" placeholder="Sök efter billiga öl i staden..">

        <div class="hello">
            <h1>Välkommen till Brewstapp!</h1>
            <p>Vi är hjälper dig att hitta det bästa priset på öl i din stad. Sök i vårat index för att se de billigaste ölen på ditt lokala utbud av pubar & barer.<br>Mycket nöje!</p>
        </div>

        <div class="container11">
            <a @click="$router.push('/beer-index')"><h1 class="title">Öl index</h1></a>
        </div>
        <hr>
        <div class="container22">
            <a @click="$router.push('/City')"><h1 class="title">Välj stad</h1></a>
        </div>
        <hr>
        <div class="container33">
            <a @click="$router.push('/More')"><h1 class="title">Ölrelaterat</h1></a>
        </div>

        <div>
            <TravelMap class="travel-map"/>
        </div>
        


    </main>
</template>

<script>
import TravelMap from "@/components/TravelMap";
export default {
    name: 'mobilestart',
    components: {
        TravelMap
    }

}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Arimo|Lobster&display=swap');


#start {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    height: auto;
    background: linear-gradient(rgb(255, 123, 0), rgb(255, 196, 108));

    input[type="search"] {
      background-color: #eee;
      border: none;
      padding: 1rem 1.75rem;
      width: 90vw;
      border-radius: 3px;
      margin: 1rem 0 2rem 0;
    }
    .hello{
        padding: 1rem;
        width: 350px;
        margin-bottom: 2rem;

        h1{
            font-family: 'Lobster', cursive;
            color:rgb(255, 255, 255);
        }
        p{
            font-size: 1.2rem;
            color:rgb(255, 255, 255);
            font-family: 'Arimo', sans-serif;
        }
    }
    hr{
        width: 90vw;
        margin: 2rem 0 2rem 0;
    }
    .container11, .container22, .container33{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 95%;
        height: 300px;
        border-radius: 6px;
        box-shadow: 7px 5px 5px rgba(231, 146, 35, 0.534);

        .title{
            color: rgb(255, 255, 255);
            font-size: 2rem;
            background: rgba(194, 97, 17, 0.692);
            padding: 1rem;
            font-family: 'Lobster', cursive;
            width: 250px;
            border-radius: 6px; 
            
        }
    }
    .container11{
        background-image: url('../assets/beer-index.jpg');
        background-size: cover;
    }
    .container22{
        background-image: url('../assets/town.jpg');
        background-size: cover;
    }
    .container33{
        background-image: url('../assets/beer-related.jpg');
        background-size: cover;
        margin-bottom: 2rem;
    }
    
}

</style>