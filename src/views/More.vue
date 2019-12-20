<template>
    <main id="start">
        
        <input type="search" placeholder="Sök efter stad..">
        <h1>Hitta fler öl-relaterade aktiviteter!</h1>
        <div class="desktop">
        <div class="container1">
            <h1 class="title">Besök ett bryggeri</h1>
        </div>
        <div class="container2">
            <h1 class="title">Ölprovning</h1>
        </div>
        <div class="container3">
            <h1 class="title">Pubrunda</h1>
        </div>
        </div>


    </main>
</template>

<script>
export default {
    name: 'city',
}

</script>

<style lang="scss">


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
    font-size: 2rem;
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

        .title{
            color: rgb(255, 255, 255);
            font-size: 2rem;
            background: rgba(194, 97, 17, 0.692);
            padding: 1rem;
            width: 250px;
            border-radius: 6px;      
        }
        h3{
            color: white;
            background: rgba(194, 97, 17, 0.692);
            padding: .5rem;
        }
    }
    .container1{
        background-image: url('../assets/brewery.jpg');
        background-size: cover;
    }
    .container2{
        background-image: url('../assets/beers.jpg');
        background-size: cover;
    }
    .container3{
        background-image: url('../assets/pubrunda.jpg');
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