
<template>
    <div>
        <div v-show="submitted" class="center absolute w-full h-full">
            <div class="bg-white">
                <p>You will be awarded with a Micro-Certification for all skills for which you answered at least 2 of 3
                    questions correctly.
                </p>
                <p class="mt-4">Are you sure that you want to submit your exam answers now?
                </p>
                <PopUp />
            </div>
        </div>

        <button class="m-2 py-1 px-10" @click="submitExam">
            <label class="text-white">Submit Exam</label>
        </button>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

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

.center {
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    position: absolute;
}
</style>

<script>

import emitter from 'tiny-emitter/instance'
import PopUp from './PopUp.vue'

export default {
    components: {
        PopUp,
    },
    methods: {
        submitExam() {
            this.submitted = true
        },
        closeExam() {
            this.submitted = false
        }
    },
    data() {
        return {
            submitted: false
        }
    },
    mounted() {
        emitter.on('close', this.closeExam)

    }
}

</script>
