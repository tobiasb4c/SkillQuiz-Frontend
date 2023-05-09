<script>
import emitter from "tiny-emitter/instance";


export default {
    data() {
        return {

        }
    },
    props: {
        fragneanzahl: Number,
        richtig: Number
    },

    methods: {

    },
    mounted() {

    },
}

</script>

<template>
    <h1>{{ this.richtig }} von {{ this.fragneanzahl }} richtig</h1>
</template>

<style scoped>
h {

    font-size: 24px;

 
    border-style: solid;
    border-width: 2px;

    border-color: #2FB4BC;


    padding: 10px;



    display: flex;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}
</style>