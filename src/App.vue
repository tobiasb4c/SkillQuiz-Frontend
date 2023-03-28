<script>
import AntwortMoeglichkeiten from "./components/AntwortMoeglichkeiten.vue";
import Titel from "./components/Titel.vue";
import Timer from "./components/Timer.vue";
import Beenden from "./components/Beenden.vue";
import Frage from "./components/Frage.vue";
import Fragennummer from "./components/Fragennummer.vue";

export default {
    components: {
        Beenden,
        Frage,
        Fragennummer,
        Timer,
        Titel,
        AntwortMoeglichkeiten,
    },
    data() {
        return {
            testAntworten: [
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
            ],
        };
    },
};
</script>

<template>
    <Titel titel="Titel" />
    <Frage text="Fragentext"/>
    <Fragennummer :propMax="10" />
    <AntwortMoeglichkeiten :antworten="testAntworten" />
    <Timer :propMinute="1" :propSecond="5" />
</template>

<style scoped>

</style>
