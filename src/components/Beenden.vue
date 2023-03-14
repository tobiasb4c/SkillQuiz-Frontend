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
    <div>
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

lable{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
}
</style>
