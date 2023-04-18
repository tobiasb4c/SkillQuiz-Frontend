<script>
import emitter from "tiny-emitter/instance";
export default {
    methods: {
        submitExam() {
            
            console.log(this.eingabeJson)
            /*
            Quiz wird beendet
            */
           this.submitted = true
        },
        EmitGetEingabe(json){
            this.eingabeJson = json;
        }
    },
    data()  {
        return  {
            submitted: false,
            eingabeJson: {}
        }
    },
    mounted(){
        emitter.on('Eingabe', this.EmitGetEingabe)
    }
}

</script>

<template>
        <button class="py-2 text-white w-full" @click="submitExam">
            Submit Exam
        </button>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

button {
    background-color: #2FB4BC;
    border-radius: 3px;

    font-family: Lato;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
}
</style>
