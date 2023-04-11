<script>

export default {
    methods: {
        submitExam() {
            /*
            Quiz wird beendet
            */
           this.submitted = true
        }
    },
    data()  {
        return  {
            submitted: false
        }
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
