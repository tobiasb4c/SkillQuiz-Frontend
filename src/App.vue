<script>
import AntwortMoeglichkeiten from './components/AntwortMoeglichkeiten.vue'
export default{
    components:{
        AntwortMoeglichkeiten
    },
    data(){
        return{
            testAntworten: [
                '1.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
                '2.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
                '3.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
                '4.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
            ]
        }
    }
}
</script>

<template>
    <AntwortMoeglichkeiten :antworten="testAntworten" />
</template>

<style scoped>

</style>
