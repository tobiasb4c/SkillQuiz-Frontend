<script>
import emitter from "tiny-emitter/instance";
export default {

    data(){
        return{
            currentFragenummer: 1,
            maximal: 1,
            eingabe: [],
            eingabeArr: [],
            
        }
    },
    props: {
        antwortenpool: Array,
        
    },
    methods:{
    EmitGetCurrentFragenummer(current, max) {
            this.eingabeArr[this.currentFragenummer - 1] = this.eingabe; // Eingabe speichern
            
            this.currentFragenummer = current;
            this.maximal = max;
            
            if(this.eingabeArr[this.currentFragenummer - 1]){ //Wiederaufrufen der Beantworteteten Antworten
                this.eingabe = this.eingabeArr[this.currentFragenummer -1];
            } else{
                this.eingabe = [];
            }
            
        },
    },

    mounted()   {
        emitter.on("FragenummerCurrent", this.EmitGetCurrentFragenummer)
    },
    computed: {
        currentAntworten()  {
            return this.antwortenpool[this.currentFragenummer - 1];
        }
    }
}
</script>

<template>
    <div class="flex flex-col items-center">
        <label v-for="antwort, key in currentAntworten" class="answer flex flex-row justify-between items-center p-2">
            <p class="w-11/12">{{ antwort }}</p>
            <input type="checkbox" class="accent-[#2FB4BC]" :value="antwort" v-model="eingabe[key]">
        </label>

        <!--div class="answer flex flex-row align-baseline" v-for="antwort in antworten">
            
        </div-->
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.answer {
    box-sizing: border-box;
    margin-bottom: 10px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    width: 90%;
}

label {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #232323;
}

input {
    box-sizing: border-box;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 20px;
    height: 20px;
    border: 1px solid #2FB4BC;
    border-radius: 5px;
}
</style>
