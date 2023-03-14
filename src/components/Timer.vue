<script>

export default {    
    props:{
        minute: Number,
        second: Number
    },
    methods: {
        restTime(){
            return this.minute + " Minutes " + this.second + " Seconds"
        }
    }
}



</script>

<template>
    <div class="">
        <p>Time until exam closes</p>
        <p> {{ restTime() }}</p>
    </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');


div {
    background-color: white;
    position: absolute;
    width: 573px;
    height: 102px;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

p {
    width: 550px;
    height: 58px;

    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
}
</style>
