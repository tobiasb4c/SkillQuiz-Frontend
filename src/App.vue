<script>
import AntwortMoeglichkeiten from './components/AntwortMoeglichkeiten.vue'
import Titel from './components/Titel.vue'
import Timer from './components/Timer.vue';
import Beenden from './components/Beenden.vue';
import Frage from './components/Frage.vue';
import Fragennummer from './components/Fragennummer.vue';

export default  {
    components: {
        Beenden,
        Frage,
        Fragennummer,
        Timer,
        Titel,
        AntwortMoeglichkeiten,
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
    <Titel titel="Hallo Welt" />
    <Timer :propMinute="1" :propSecond="5"/>
  <Fragennummer :propMax="10"/>    <AntwortMoeglichkeiten :antworten="testAntworten" />
</template>

<style scoped>

</style>
