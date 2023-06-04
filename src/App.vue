<script>
import AntwortMoeglichkeiten from "./components/AntwortMoeglichkeiten.vue";
import Titel from "./components/Titel.vue";
import Timer from "./components/Timer.vue";
import Frage from "./components/Frage.vue";
import Fragennummer from "./components/Fragennummer.vue";
import ExamTitle from "./components/ExamTitle.vue";
import Skip from "./components/Skip.vue";
import emitter from "tiny-emitter/instance";
import ResultPage from "./components/ResultPage.vue";
import StartPage from "./components/StartPage.vue";

export default {
  components: {
    Frage,
    Fragennummer,
    Timer,
    Titel,
    AntwortMoeglichkeiten,
    ExamTitle,
    Skip,
    ResultPage,
    StartPage,
  },
  data() {
    return {
      eingabeJson: {},
      quizData: {},
      resAns: [],
      antworten: [[]],
      fragen: [],
      quizName: "",
      quizGroesse: 0,
      timeMin: 0,
      timeSec: 0,

      starting: true,
      fetched: false,
      catched: false,
      closed: false,
    };
  },
  methods: {
    start(obj, time, quizName) {
      if (this.timeMin == undefined && this.timeSec == undefined) {
        this.timeMin = time;
        this.timeSec = 0;
      }
      //console.log(quizName)
      this.quizName = quizName;

      this.starting = false;
    },
    async getQuizData() {
      try {
        const response = 
          await fetch("https://typo3.ddev.site/quiz/?type=1452982642", {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Origin': 'http://localhost:5173/'
            }
          });

          console.log(response);
    // Hier fetchen
        const jsonData = await response.json();
        //console.log(jsonData)
        this.quizData = jsonData;

        for (let index = 0; index < jsonData.length; index++) {
          const element = jsonData[index];
          this.fragen.push(element.text);

          this.antworten[index] = element.fragenAntworten;
        }

        this.quizName = "Quizname";
        this.quizGroesse = this.antworten.length;

        //TIME FETCH From JSON
        try {
          this.timeMin = jsonData.time.minute;
          this.timeSec = jsonData.time.second;
        } catch (error) {
          this.timeMin = null;
          this.timeSec = null;
        }

        this.fetched = true;
      } catch (error) {
        console.log(error);
        console.warn("Daten konnten nicht gefetched werden");
        this.quizName = "Daten konnten nicht gelesen werden";
        this.fetched = true;
        this.catched = true;
        this.quizGroesse = 0;
      }
    },
    EmitGetEingabe(json, ans) {
      this.eingabeJson = json;
      this.resAns = ans;
    },

    finalSubmitExam() {
      console.log("Final Submit");
      console.log(this.eingabeJson);

      let bol;
      for (let index = 0; index < this.resAns.length; index++) {
        for (let index2 = 0; index2 < this.resAns[index].length; index2++) {
          if (this.eingabeJson[index][index2]) {
            this.quizData[index].fragenAntworten[index2].ticked = true;
          } else {
            this.quizData[index].fragenAntworten[index2].ticked = false;
          }
        }
      }
      console.log(this.quizData);

      fetch("https://typo3.ddev.site/quiz/?type=1452982642", {
        method: "POST",
        body: this.quizData,
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          console.log(JSON.stringify(data));
        });
      
      this.closed = true;
    },
  },
  async created() {
    await this.getQuizData();
    emitter.on("submit", this.finalSubmitExam);
    emitter.on("Eingabe", this.EmitGetEingabe);
    emitter.on("start", this.start);
  },
};
</script>

<template>
  <StartPage v-if="this.starting" />
  <main class="w-full min-h-screen" v-if="this.fetched && !this.starting">
    <div
      class="flex flex-col items-center gap-4 px-4 py-4 mx-auto w-full sm:w-2/3"
      v-if="!this.closed"
    >
      <!--Quiz-->
      <ExamTitle prop-titel-addon="Micro-Certification Exam" />

      <section class="white-background w-full flex flex-col items-center pb-4">
        <img
          src="./assets/typo3_logo.svg"
          class="logo object-contain"
          alt="Logo"
        />
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
        <Timer
          :propMinute="this.timeMin"
          :propSecond="this.timeSec"
          :propAnzahlFragen="this.quizGroesse"
        />
      </section>
    </div>
    <ResultPage
      :richtig="5"
      :fragneanzahl="this.quizGroesse"
      v-if="this.closed"
    />
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
