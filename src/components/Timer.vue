<script>
import { onMounted } from 'vue';


export default {
    data() {
        return {
            minute: this.$props.minute,
            second: this.$props.second,
            time: parseInt(this.minute * 60) + parseInt(this.second),
            showButton: true
        }
    },
    props: {
        minute: Number,
        second: Number
    },
    methods: {
        startTimer() {
            this.showButton = false
            setInterval(this.countDown, 1000)
        },

        countDown() {
            
            this.minute = Math.floor(this.time / 60)
            this.second = this.time % 60

            this.time = this.time - 1

            
            console.log(this.time)

            if (this.time == 0) {
                console.log("Beendet")
                this.showButton = true
            }
        }
    }
}



</script>

<template>
    <div class="flex flex-col items-center m-10">
        <p class="mt-2">Time until exam closes</p>
        <p class="mb-2"> {{ this.minute }} Minutes {{ this.second }} Seconds</p>
        <button @click="startTimer" v-show="showButton">Start</button>
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
