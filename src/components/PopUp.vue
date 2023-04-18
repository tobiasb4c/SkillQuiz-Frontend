<template>
    <section>
        <div class="flex flex-row">
            <button class="m-2 py-1 px-10" @click="cancel">
                <label class="text-white">Cancel</label>
            </button>
            <button @click="submitExam" class="m-2 py-1 px-10">
                <label class="text-white">Submit Exam</label>
            </button>
        </div>
    </section>
</template>

<style scoped>
button {
    background-color: #2FB4BC;
    border-radius: 3px;
}

lable {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
}
</style>

<script>

import emitter from 'tiny-emitter/instance'

export default {
    methods: {
        cancel() {
            emitter.emit('close')
        },
        submitExam(){
            console.log("submited")
            emitter.emit('close')
        }
    }
}

</script>