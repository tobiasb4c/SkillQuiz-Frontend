<script>
import AntwortMoeglichkeiten from "./components/AntwortMoeglichkeiten.vue";
import Titel from "./components/Titel.vue";
import Timer from "./components/Timer.vue";
import Beenden from "./components/Beenden.vue";
import Frage from "./components/Frage.vue";
import Fragennummer from "./components/Fragennummer.vue";
import ExamTitle from "./components/ExamTitle.vue";
import Skip from "./components/Skip.vue";
import { TinyEmitter } from "tiny-emitter";
import emitter from 'tiny-emitter/instance'

export default {
  components: {
    Beenden,
    Frage,
    Fragennummer,
    Timer,
    Titel,
    AntwortMoeglichkeiten,
    ExamTitle,
    Skip,
  },
  data() {
    return {
      eingabeJson: {},

      quizData: {},
      antworten: [],
      fragen: [],
      quizName: '',
      quizGroesse: 0,
      timeMin: 0,
      timeSec: 0,

      fetched: false,
      catched: false
    };
  },
  methods: {
    async getQuizData() {
      try {
        const response = await fetch("./dummyQuiz.json");
        const jsonData = await response.json();
        this.antworten = jsonData.antwortenpool
        this.fragen = jsonData.fragen
        this.quizName = jsonData.name
        this.quizGroesse = this.antworten.length
        this.timeMin = jsonData.time.minute
        this.timeSec = jsonData.time.second
        this.fetched = true
      } catch (error) {
        console.warn('Daten konnten nicht gefetched werden')
        this.quizName = 'Daten konnten nicht gelesen werden'
        this.fetched = true
        this.catched = true
        this.quizGroesse = 0
      }
    },
    EmitGetEingabe(json) {
            this.eingabeJson = json;
        },

    finalSubmitExam() {
      console.log('Final Submit')
      console.log(this.eingabeJson)
    }
  },
  async created() {
    await this.getQuizData()
    emitter.on('submit', this.finalSubmitExam)
    emitter.on('Eingabe', this.EmitGetEingabe)
  },

};
</script>

<template>
  <main class="w-full min-h-screen" v-if="this.fetched">
    <div class="flex flex-col items-center gap-4 px-4 py-4 mx-auto w-full sm:w-2/3">
      <ExamTitle prop-titel-addon="Exam" />

      <section class="white-background w-full flex flex-col items-center pb-4">
        <img src="./assets/typo3_logo.svg" class="logo object-contain" alt="Logo">
        <Titel :titel="this.quizName" />
        <Frage :fragen="this.fragen" />
      </section>

      <section class="white-background w-full py-2 flex flex-col gap-2">
        <Fragennummer :propMax="this.quizGroesse" />
        <AntwortMoeglichkeiten :antwortenpool="this.antworten" />
      </section>

      <section class="flex flex-row gap-1 my-3 w-full">
        <Skip />
      </section>

      <section class="white-background w-full">
        <Timer :propMinute="this.timeMin" :propSecond="this.timeSec" />
      </section>
    </div>
  </main>
</template>

<style scoped>
.logo {
  width: auto;
  height: 100px;
}

main {
  box-sizing: border-box;
  background: #f2f2f2;
}

.white-background {
  background: #ffffff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
</style>
