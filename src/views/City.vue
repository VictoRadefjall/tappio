<template>
    <main id="start">
        <input type="search" placeholder="Sök efter stad..">

        <h1>Sök efter billigast öl i din stad!</h1>

        <section class="desktop">
        <div class="container1">
            <h1 class="title">Göteborg</h1>
            <h3>-Hamnstaden på Västkusten-</h3>
        </div>
        
        <div class="container2">
            <h1 class="title">Uppsala</h1>
            <h3>-Billigare öl än på nationerna-</h3>
        </div>
        <div class="container3">
            <h1 class="title">Malmö</h1>
            <h3>-Nästan som i Danmark-</h3>
        </div>
        </section>


    </main>
</template>

// Bygg 2 olika componenter för hur det ska visas på Desktop respektive Mobil.
// @Importera och i huvud-viewn använd tex <mobile-view></mobile-view>

<script>
export default {
    name: 'city',
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
    h1{
    font-family: 'Lobster', cursive;
    color:rgb(255, 255, 255);
    font-size: 1.6rem;
    }
    .container1, .container2, .container3{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 380px;
        height: 300px;
        margin-bottom: 2rem;
        border-radius: 6px;
        box-shadow: 7px 5px 5px rgba(231, 146, 35, 0.534);

        .title{
            color: rgb(255, 255, 255);
            font-size: 2rem;
            background: rgba(194, 97, 17, 0.692);
            padding: 1rem;
            font-family: 'Lobster', cursive;          
        }
        h3{
            color: white;
            background: rgba(194, 97, 17, 0.692);
            padding: .5rem;
            font-family: 'Arimo', sans-serif;
            letter-spacing: 2px;
            border-radius: 3px;
        }
    }
    .container1{
        background-image: url('../assets/gbg.jpg');
        background-size: cover;
    }
    .container2{
        background-image: url('../assets/uppsala.jpg');
        background-size: cover;
    }
    .container3{
        background-image: url('../assets/malmo.jpg');
        background-size: cover;
    }
    
}
@media screen and (min-width: 500px){
    #start {
        height: 100vh;
        justify-content: flex-start;

    input[type="search"] {
      width: 30vw;
    }

    h1{
    font-family: 'Lobster', cursive;
    color:rgb(255, 255, 255);
    font-size: 3rem;
    }
    
    .desktop{
        display:flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;

        .container1,
        .container2,
        .container3{
            margin: 1rem;
        }
        }
    }
}

</style>