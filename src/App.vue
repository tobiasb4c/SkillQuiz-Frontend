<script>
import AntwortMoeglichkeiten from "./components/AntwortMoeglichkeiten.vue";
import Titel from "./components/Titel.vue";
import Timer from "./components/Timer.vue";
import Beenden from "./components/Beenden.vue";
import Frage from "./components/Frage.vue";
import Fragennummer from "./components/Fragennummer.vue";
import ExamTitle from "./components/ExamTitle.vue";

export default {
    components: {
    Beenden,
    Frage,
    Fragennummer,
    Timer,
    Titel,
    AntwortMoeglichkeiten,
    ExamTitle
},
    data() {
        return {
            testAntworten: [
                "Mine Turtle! Everybody do the flop! Mine Turtle! Mine Turtle! Everybody do the flop! Mine Turtle! ",
                "Mine Turtle! Everybody do the flop! Mine Turtle! Mine Turtle! Everybody do the flop! Mine Turtle! ",
                "Mine Turtle! Everybody do the flop! Mine Turtle! Mine Turtle! Everybody do the flop! Mine Turtle! ",
                "Mine Turtle! Everybody do the flop! Mine Turtle! Mine Turtle! Everybody do the flop! Mine Turtle! ",
            ],
        };
    },
};
</script>

<template>
    <main class="flex flex-col items-center gap-3 w-full h-screen">
        <ExamTitle prop-titel-addon="Exam"/>

        <section class="white-background">
            <img src="./assets/typo3_logo.svg" class="logo" alt="Logo">
            <Titel titel="PHP Debugging" />
            <Frage text="What is the meaning of life? The one anwer youpick will be important for your score - choose wisely."/>
        </section>
        
        <section class="white-background">
            <Fragennummer :propMax="12" />
            <AntwortMoeglichkeiten :antworten="testAntworten" />
        </section>

        <section class="flex flex-row gap-1 flex-grow-1 my-3">
            <Beenden />
            <Beenden />
        </section>

        <section class="white-background mb-4">
            <Timer :propMinute="12" :propSecond="0" />
        </section>
    </main>

</template>

<style scoped>
.logo   {
    width: 229.81px;
    height: 96.52px;
}

main    {
    box-sizing: border-box;
    background: #F2F2F2;
}

section {
    width: 91.666667%; /* 11/12 */
    margin-left: 1rem;
}

.white-background {

    background: #FFFFFF;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
