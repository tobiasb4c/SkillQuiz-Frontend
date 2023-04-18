<script>
import AntwortMoeglichkeiten from "./components/AntwortMoeglichkeiten.vue";
import Titel from "./components/Titel.vue";
import Timer from "./components/Timer.vue";
import Beenden from "./components/Beenden.vue";
import Frage from "./components/Frage.vue";
import Fragennummer from "./components/Fragennummer.vue";
import ExamTitle from "./components/ExamTitle.vue";
import Skip from "./components/Skip.vue";

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
      testAntworten: [
        [
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        ],
        ["b", "b", "b", "b"],
        ["c", "c", "c", "c"],
        ["d", "d", "d", "d"],
      ],
      fragen: [
        "Ah Wer bist du?",
        "Woher Kommst du?",
        "Was machst denn du?",
        "WEr melkt die KUh?",
      ],
    };
  },
};
</script>

<template>
  <main class="w-full">
    <div class="flex flex-col items-center gap-4 px-4 py-4 mx-auto w-full sm:w-2/3">
      <ExamTitle prop-titel-addon="Exam" />

      <section class="white-background w-full flex flex-col items-center pb-4">
        <img src="./assets/typo3_logo.svg" class="logo" alt="Logo" />
        <Titel titel="PHP Debugging" />
        <Frage :fragen="this.fragen" />
      </section>

      <section class="white-background w-full py-2 flex flex-col gap-2">
        <Fragennummer :propMax="12" />
        <AntwortMoeglichkeiten :antwortenpool="testAntworten" />
      </section>

      <section class="flex flex-row gap-1 my-3 w-full">
        <Skip />
      </section>

      <section class="white-background w-full">
        <Timer :propMinute="12" :propSecond="0" />
      </section>
    </div>
  </main>
</template>

<style scoped>
.logo {
  width: 229.81px;
  height: 96.52px;
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
