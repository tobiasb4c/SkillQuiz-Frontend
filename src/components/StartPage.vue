<script>
import emitter from "tiny-emitter/instance";
import ExamTitle from "./ExamTitle.vue";
import Titel from "./Titel.vue";


export default {
    data() {
        return {
            skills:['PHP', 'TYPO', 'MYSQL'],
            eingabe: [],
            time: 0,
        }
    },
    props: {
        fragneanzahl: Number,
        richtig: Number
    },

    methods: {
        submit(){
            let obj = {

            } // Wird dann emited
            //Bei Quiz Start muss Zeit + Skills + geschickt
            
            // Der Name des Qiúiz wird aus allen Skill namen geschriebens
            let quizName = this.skills[0]
            
            console.log(JSON.stringify(this.eingabe))
            emitter.emit('start', obj, this.time, quizName) 
        },
    },
    updated() {
        
            let counter = 0
            for (let index = 0; index < this.eingabe.length; index++) {
                if(this.eingabe[index]){
                    counter++
                }
            }
            this.time = counter * 3 //3 Fragen pro SKill
    },
    components: {
        ExamTitle,
        Titel,
    }
}

</script>

<template>
    <main class="w-full min-h-screen">
        <div class="flex flex-col items-center gap-4 px-4 py-4 mx-auto w-full sm:w-2/3">
            <ExamTitle :propTitelAddon="'Micro-Certification Exam Overview'" />

            <section class="white-background w-full flex flex-col items-center pb-4 pt-4">
                <img src="../assets/profile.png" class="pic object-contain rounded-full" alt="Logo">
                <ExamTitle :propTitelAddon="'Max Mustermann'" />
                <Titel :titel="'max.mustermann@htl.rennweg.at'" />
            </section>

            <section class="white-background w-full py-2 flex flex-col gap-2">
                <h2 class="flex flex-row justify-between items-center p-2 ml-10 sub">Skills</h2>

                <div class="flex flex-col items-center">
                    <label v-for="(skill, index) in this.skills"
                        class="answer flex flex-row justify-between items-center p-2">
                        <p class="w-11/12">{{ skill }}</p>
                        <input type="checkbox" :value="skill" v-model="eingabe[index]">
                        <span class="checkmark"></span>
                    </label>
                </div>
            </section>

            <section class="white-background w-full py-2 flex flex-col gap-2">
                <h2 class="flex flex-row justify-between items-center pt-2 ml-10 sub">Exam Time: {{ this.time }} Minutes</h2>
                <p class="flex flex-row justify-between items-center ml-10 des">Cut Score: 2 of 3 correct answers per skill</p>
            </section>


            <button class="py-2 text-white w-full" :class="[this.time <= 0  ? 'bad' : 'good']" @click="this.submit" :disabled="this.time <= 0" >Start Micro-Certification</button>
        </div>

    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
.des{
    color: #828282;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28.8px;
}
.bad{
    background-color:#828282;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 21.6px;
}
.good{
    background-color:#E04C5D;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 21.6px;
}
.pic {
    width: auto;
    height: 12.5rem;
}

.white-background {
    background: #ffffff;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

.sub{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28.8px;
    color: #232323;
}



/*Checkboxes*/
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