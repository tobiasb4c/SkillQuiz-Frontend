<template>
    <PopUp v-if="submitted" />

    <button class="py-2 text-white w-full" @click="this.submitted = true">
        Submit Exam
    </button>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

button {
    background-color: #2FB4BC;
    border-radius: 3px;

    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
}
</style>

<script>

import emitter from "tiny-emitter/instance"
import PopUp from "./PopUp.vue"
export default {
    name: "Beenden-vue",
    components: {
        PopUp,
    },
    methods: {
        closeExam() {
            this.submitted = false
        },
        EmitGetEingabe(json) {
            this.eingabeJson = json
        }
    },
    data() {
        return {
            submitted: false,
            eingabeJson: {}
        }
    },
    mounted() {
        emitter.on("close", this.closeExam)
        emitter.on("Eingabe", this.EmitGetEingabe)
    },

}

</script>
