<script>
export default {
    props: {
        antworten: Array
    }
}
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="answer" v-for="antwort in antworten">
            <label :for="antwort">{{ antwort }}</label>
            <input type="checkbox" class="accent-[#2FB4BC]" :value="antwort">
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

label {
    width: 341px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: inline-block;
    margin-left: 10px;
    margin-top: 6px;
    margin-bottom: 5px;
    align-items: center;
    color: #232323;
}

input {
    position: absolute;
    box-sizing: border-box;
    margin-left: 149px;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 20px;
    height: 20px;
    border: 1px solid #2FB4BC;
    border-radius: 5px;
}

.answer {
    box-sizing: border-box;
    height: 50px;
    width: 537px;
    margin-top: 0px;
    margin-bottom: 10px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
}
</style>
