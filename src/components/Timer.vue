<script>
import emitter from "tiny-emitter/instance"

export default {
    name: "Timer-vue",
    data() {
        return {
            time: null,
            counter: null,
        }
    },
    computed: {
        countdownText() {
            return (Math.floor(this.time / 60)) + " Minutes " + (this.time % 60) + " Seconds"
        }
    },
    props: {
        propMinute: Number,
        propSecond: Number,
        propAnzahlFragen: Number
    },
    created() {
        if (this.propMinute != null && this.propSecond != null) {
            this.time = this.$props.propMinute * 60 + this.$props.propSecond;
        } else {
            this.time = this.propAnzahlFragen * 60;
        }
        this.counter = setInterval(this.countDown, 1000)

    },
    methods: {
        countDown() {
            if (this.time <= 0) {
                this.time = 0
                console.log("Zeit abgelaufen")
                emitter.emit("submit")
                clearInterval(this.counter)
                return
            }
            this.time -= 1
        },
    }
}



</script>

<template>
    <div class="flex flex-col items-center mt-3 mx-4">
        <p class="mt-2">Time until exam closes</p>
        <p class="mb-4"> {{ this.countdownText }} </p>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap"); 

div {
    background-color: white;
}

p:last-child {
    color: #828282
}

p {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
}
</style>
