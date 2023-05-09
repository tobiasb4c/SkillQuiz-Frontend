<script>

import emitter from "tiny-emitter/instance"

export default {
    methods: {
        cancel() {
            emitter.emit("close")
        },
        submitExam(){
            this.cancel()
            emitter.emit("submit")
        }
    },
    beforeCreate(){
        emitter.on("EmitSubmitExam", this.submitExam)
    }
}

</script>

<template>
    <div class="background fixed z-10 top-0 left-0">
        <div class="popup w-full sm:w-[605px] h-[290px] z-20 p-4 text-center flex flex-col justify-between">
            <p>You will be awarded with a Micro-Certification for all skills for which you answered at least 2 of 3
                    questions correctly.
            </p>
            <p class="">Are you sure that you want to submit your exam answers now?</p>
            <div class="flex flex-row gap-2">
                <button class="text-white w-1/2 py-1" @click="cancel">No</button>
                <button @click="submitExam" class="text-white w-1/2">Yes</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
button {
    background-color: #2FB4BC;
    border-radius: 3px;
}

p, button {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
}

.popup  {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    background: #FFFFFF;

    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

.background {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
}
</style>
