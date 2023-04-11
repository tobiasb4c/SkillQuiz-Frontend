<script>
import AntwortMoeglichkeiten from './components/AntwortMoeglichkeiten.vue'
export default{
    components:{
        AntwortMoeglichkeiten
    },
    data(){
        return{
            testFrage[
            [
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
            ]
            [
                'b',
                'b',
                'b',
                'b'
            ]
            [
                'c',
                'c',
                'c',
                'c'
            ]
            [
                'd',
                'd',
                'd',
                'd'
            ]
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
