<script>
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
    },
    data() {
    return {
    }
  }
}
</script>

<template>

    <Timer :propMinute="1" :propSecond="5"/>
  <Fragennummer :propMax="10"/>
</template>

<style scoped>

</style>
