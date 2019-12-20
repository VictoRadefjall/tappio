<template>
    <main id="splash">

        <!-- <h1>Brew<span class="contrast">staq </span></h1> -->
        <div class="logo"></div>
        <h2>-  the Best Beer Prices In Town -</h2>

        <section class="frame">
        <svg version="1.1" id="Lager_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 256 256" style="enable-background:new 0 0 256 256;" xml:space="preserve">
        <rect x="20.98" y="37.71" class="beer" width="156.3" height="197.19"/>
        <path class="mug" d="M227.06,28.94h-31.84c-2.84,0-5.14-2.3-5.14-5.14v-9.36c0-6.52-5.28-11.8-11.8-11.8H16.47
            c-6.52,0-11.8,5.28-11.8,11.8v226.4c0,6.52,5.28,11.8,11.8,11.8h161.81c6.52,0,11.8-5.28,11.8-11.8v-45.98
            c0-1.94,1.02-3.73,2.68-4.71l33.58-19.97c15.85-9.42,24.94-23.76,24.94-39.33V49.42C251.28,37.94,240.64,28.94,227.06,28.94z
            M54.6,185.72c0,6.13-4.98,11.11-11.11,11.11c-6.14,0-11.12-4.98-11.12-11.11v-49.66c0-3.06,1.25-5.84,3.26-7.85
            c2.01-2.01,4.79-3.26,7.86-3.26c6.13,0,11.11,4.98,11.11,11.11V185.72z M90.66,185.72c0,6.13-4.98,11.11-11.11,11.11
            c-6.14,0-11.12-4.98-11.12-11.11v-66.03c0-3.07,1.25-5.85,3.26-7.86c2.01-2.01,4.79-3.26,7.86-3.26c6.13,0,11.11,4.98,11.11,11.12
            V185.72z M126.72,185.72c0,6.13-4.98,11.11-11.11,11.11c-6.14,0-11.12-4.98-11.12-11.11V94.77c0-3.07,1.25-5.85,3.26-7.86
            s4.79-3.25,7.86-3.25c6.13,0,11.11,4.97,11.11,11.11V185.72z M162.78,185.72c0,6.13-4.98,11.11-11.11,11.11
            c-6.14,0-11.11-4.98-11.11-11.11V64.19c0-3.07,1.24-5.85,3.25-7.86c2.01-2.01,4.79-3.25,7.86-3.25c6.13,0,11.11,4.97,11.11,11.11
            V185.72z M229.65,130.85c0,7.75-5.24,15.31-14.36,20.74l-22.32,13.26c-1.27,0.76-2.89-0.16-2.89-1.65V53.85
            c0-1.81,1.46-3.27,3.27-3.27h33.75c1.41,0,2.55,1.15,2.55,2.56V130.85z"/>
        </svg>
        </section>

    </main>
</template>

<script>

export default {

    name: 'loading',
    mounted(){
        setTimeout(() => {
           this.$store.commit("setSplash", false)      
        }, 4700);
    }
}

</script>

<style lang="scss" scoped>


#splash {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    height: 100vh;
    background: linear-gradient(rgb(255, 123, 0), rgb(255, 196, 108)); 

    .logo {
        height: 160px;
        width: 500px;
        background: url('../assets/Brewstaq-v.1.png') no-repeat;
        background-size: cover;
    }

    h1{
        font-size: 5rem;
        text-transform: uppercase;
        color: rgb(255, 255, 255);
        border: solid black 3px;
        border-radius: 6px;
        padding: 2rem;
        letter-spacing: 5px;
        margin: 0;
        text-decoration: underline;

        .contrast{
            font-family: 'Tahoma', sans-serif;
            color: green;
            letter-spacing: 5px;
            text-decoration: underline;
        }
    }
    h2 {
        margin-bottom: 6rem;
        color: rgb(224, 224, 224);
        text-transform: uppercase;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    }
    .frame{
        display: flex;
        align-content: center;
        justify-content: center;
        border: solid rgb(255, 255, 255) 10px;
        border-radius: 99999999px;
        width: 400px;
        height: 400px;
        box-shadow: 12px 12px 2px 1px rgba(85, 85, 85, 0.2);

    svg {
        max-width: 15rem;
        width: 100%;
        transform: translateX(2rem);
        

        .mug {
            fill:rgb(0, 0, 0);
            box-shadow: 12px 12px 2px 1px rgba(85, 85, 85, 0.2);
        }


        .beer {
            fill:rgb(247, 217, 169);
            transform-origin: bottom;
            animation: loading forwards 4s;
        }

        @keyframes loading {
            from { transform: scaleY(0.1); }
            to { transform: scaleY(1); }
        }
    }
    }
}
@media screen and (max-width: 500px){
    #splash {

    .logo {
        height: 100px;
        width: 305px;
        background: url('../assets/Brewstaq-v.1.png') no-repeat;
        background-size: cover;
    }
    h2 {
        font-size: 1rem;
    }
    .frame{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 250px;


    svg {
        max-width: 10rem;
        margin-right: 2rem;

    }
    }
    }
}

</style>