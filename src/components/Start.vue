<template>
    <main id="landingpage">
        <splash v-show=" getSplash==true"/>
        <mobile v-if="w<500" v-show="getSplash==false" />
        <desktop v-else v-show="getSplash==false"/>
    </main>
</template>

<script>
import desktop from "@/components/DesktopStart.vue"
import mobile from "@/components/MobileStart.vue"
import splash from "@/components/Loading.vue"

export default {
    name: 'loading',
    components: {
        desktop,
        mobile,
        splash
    },
    data(){
        return{
            w: window.innerWidth
        }
    },
    computed: {
        getSplash(){
            return this.$store.getters.getSplash
        }
    }

}

</script>