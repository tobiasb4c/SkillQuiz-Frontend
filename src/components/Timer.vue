<script>
import { onMounted } from 'vue';


export default {
    data() {
        return {
            minute: this.minute,
            second: this.second,
        }
    },
    props: {
        minute: Number,
        second: Number
    },
    methods: {
        startTimer() {
            console.log("w")
            this.second = 20
            /*setInterval(function(){
                
                this.second--

                if(this.second == 0){
                    this.minute--
                    this.second = 60
                }
                if(this.minute == 0 && this.second == 0){
                    console.log("Beendet")
                }
            }, 1000)
            */
        }
    }
}



</script>

<template>
    <div class="flex flex-col items-center m-10">
        <p class="mt-2">Time until exam closes</p>
        <p class="mb-2"> {{ this.minute }} Minutes {{ this.second }} Seconds</p>
        <button @click="startTimer">Start</button>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');


div {
    background-color: white;
    width: 573px;
    height: 102px;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

p:last-child {
    color: #828282;
}

p {
    width: 550px;
    height: 58px;

    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;

}
</style>
