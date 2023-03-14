<script>
import AntwortMoeglichkeiten from './components/AntwortMoeglichkeiten.vue'
export default{
    components:{
        AntwortMoeglichkeiten
    },
    data(){
        return{
            testAntworten: [
                'Antwort 1',
                'Antwort 2',
                'Antwort 3',
                'Antwort 4'
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
