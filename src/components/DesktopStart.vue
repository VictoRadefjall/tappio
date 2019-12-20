<template>
    <main id="start2">
            <div class="control">
                <input class="input is-primary is-medium" type="text" placeholder="Hitta närmsta vattenhål ..">
            </div>


        <!-- <div class="hello">
            <h1>Välkommen till Brewstaq!</h1>
            <p>Vi är hjälper dig att hitta det bästa priset på öl i din stad. Sök i vårat index för att se de billigaste ölen på ditt lokala utbud av pubar & barer.<br>Mycket nöje!</p>
        </div> -->
        <section class="selection">
        <div class="container11">
            <a @click="$router.push('/beer-index')"><h1 class="title">Öl index</h1></a>
        </div>
        
        <div class="container22">
            <a @click="$router.push('/City')"><h1 class="title">Välj stad</h1></a>
        </div>
        
        <div class="container33">
            <a @click="$router.push('/More')"><h1 class="title">Ölrelaterat</h1></a>
        </div>

        <Maps class="container33"/>
        </section>

    </main>
</template>

<script>
import Maps from '@/components/map.vue'
export default {
    name: 'desktopstart',
    components: {
        Maps
    }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Arimo|Lobster&display=swap');


#start2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    height: 100vh;
    background: linear-gradient(rgb(255, 123, 0), rgb(255, 196, 108));

    input[type="search"] {
      background-color: #eee;
      border: none;
      padding: 1rem 1.75rem;
      width: 30vw;
      border-radius: 3px;
      margin: 1rem 0 2rem 0;
    }
    $size: 32;

@mixin track($color: red, $radius: 0) {
    &::-webkit-slider-runnable-track {
        @content;
        border-radius: $radius;
        background-color: $color;
    }
    &::-moz-range-track {
        @content;
        border-radius: $radius;
        background-color: $color;
    }
    &::-moz-focus-outer {
        border: 0;
    }
    &::-ms-track {
        border: 0;
        @content;
        border-radius: $radius;
        background-color: $color;
        color: transparent;
    }
    &::-ms-fill-lower, &::-ms-fill-upper {
        background-color: transparent;
    }
    &::-ms-tooltip {
        display: none;
    }
}

@mixin thumb() {
    &::-webkit-slider-thumb {
        appearance: none;
        @content;
    }
    &::-moz-range-thumb {
        border: 0;
        @content;
    }
    &::-ms-thumb {
        @content;
    }
}

.pullee {
    width: 10rem;
    appearance: none;
    
    // handle active states
    &:active {
        @include thumb() {
            transform: scale(1.1);
            cursor: -webkit-grabbing;
            cursor: -moz-grabbing;
        }
    }
    
    // accessibility
    &:focus {
        outline: none;
    }

    // thumb styles
    @include thumb() {
        display: block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: #5990DD;
        transform-origin: 50% 50%;
        transform: scale(1);
        transition: transform ease-out 100ms;
        cursor: -webkit-grab;
        cursor: -moz-grab;
    }
    
    // track styles
    @include track(#DDE0E3, 1rem) {
        height: 1rem;
        padding: .25rem;
        box-sizing: content-box;
    }
}

html {
    font-size: $size + px;
    text-align: center;
}

h1 {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1.25px;
}

.center-xy {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
    .hello{
        padding: 1rem;
        width: 70vw;
        margin-bottom: 2rem;

        h1{
            font-family: 'Lobster', cursive;
            color:rgb(255, 255, 255);
            font-size: 3rem;
        }
        p{
            font-size: 2rem;
            color:rgb(255, 255, 255);
            font-family: 'Arimo', sans-serif;
        }
    }
    hr{
        width: 90vw;
        margin: 2rem 0 2rem 0;
    }
    .selection{
        display: flex;
        flex-direction: row;
        
    .container11, .container22, .container33{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 380px;
        height: 300px;
        border-radius: 6px;
        margin: 1rem;
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
}

</style>