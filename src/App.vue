<script>
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
    },
    data() {
    return {
    }
  }
}
</script>

<template>
    <Titel titel="Hallo Welt" />
    <Timer :propMinute="1" :propSecond="5"/>
  <Fragennummer :propMax="10"/>
</template>

<style scoped>

</style>
