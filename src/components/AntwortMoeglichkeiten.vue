<script>
import emitter from 'tiny-emitter/instance';
import { pushScopeId } from 'vue';
export default {

    data() {
        return {
            currentFragenummer: 1,
            maximal: 1,
            eingabe: [],
            eingabeArr: [],
            eingabeJson: {},
            randomAntworten: [],
        }
    },
    props: {
        antwortenpool: Array,

    },
    methods: {
        EmitGetCurrentFragenummer(current, max) {
            this.currentFragenummer = current
            this.maximal = max

        },
        randomizeAntwort() {
            let ans = [[]]
            for (let index = 0; index < this.antwortenpool.length; index++) {
                for (let index2 = 0; index2 < this.antwortenpool[index].length; index2++) {
                    const element = this.antwortenpool[index][index2].text;
                    
                    ans[index][index2] = element
                }
                if((index + 1 ) < this.antwortenpool.length){
                    ans.push([]);
                }
            }
            for (let index = 0; index < ans.length; index++) {
                const element = ans[index];
                ans[index] = ans[index].sort((a, b) => Math.random() - 0.5)
            }
            
            
            this.randomAntworten = ans
        },
        getCurrentAntworten() {
            return this.randomAntworten[this.currentFragenummer - 1]
        }
    },
    computed: {

    },
    mounted() {
        emitter.on("FragenummerCurrent", this.EmitGetCurrentFragenummer)
        this.randomizeAntwort()
    },
    updated() {
        if (this.eingabeArr[this.currentFragenummer - 1]) { //Wiederaufrufen der Beantworteteten Antworten
            this.eingabe = this.eingabeArr[this.currentFragenummer - 1]
        } else {
            this.eingabe = []
        }
        this.eingabeArr[this.currentFragenummer - 1] = this.eingabe // Eingabe speichern


        //this.eingabeJson = JSON.stringify(Object.assign({}, this.eingabeArr))
        emitter.emit("Eingabe", this.eingabeArr, this.randomAntworten)
    },
}
</script>

<template>
    <div class="flex flex-col items-center">
        <label v-for="antwort, index in getCurrentAntworten()" v-bind:key="index"
            class="answer flex flex-row justify-between items-center p-2 ">
            <p class="w-11/12">{{ index + 1 + ". " + antwort }}</p>
            <input type="checkbox" :value="antwort" v-model="eingabe[index]">
            <span class="checkmark"></span>
        </label>

        <!--div class="answer flex flex-row align-baseline" v-for="antwort in antworten">
            
                            </div-->
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');



.answer {
    cursor: pointer;
    box-sizing: border-box;
    margin-bottom: 10px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    width: 90%;
}

.answer input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    height: 20px;
    width: 20px;
    background-color: #FFFFFF;
    border: 1px solid;
    border-radius: 5px;
}

.answer:hover {
    background-color: #f3f3f3;
}

.answer input:checked~.checkmark {
    background-color: #2FB4BC;
    border-color: #2FB4BC;
}

.checkmark:after {
    content: "";
    display: none;
}

.answer input:checked~.checkmark:after {
    display: block;
}

.answer .checkmark:after {
    width: 6.5px;
    height: 14px;
    margin-left: 6px;
    margin-top: 1px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
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
