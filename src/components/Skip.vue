<script>
import emitter from "tiny-emitter/instance";
export default {
    
    methods: {
        EmitIncrease()  {
            emitter.emit("FragennummerIncrease")
        },
        EmitDecrease()  {
            emitter.emit("FragennummerDecrease")
        },
    }
}

</script>

<template>
    <div class="grid grid-cols-2 grid-rows-1 gap-1">
        <button class="my-1 py-1 px-10 text-white" @click="EmitDecrease()">Previous</button>
        <button class="my-1 py-1 px-10 text-white" @click="EmitIncrease()">Next</button>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

button {
    background-color: #2FB4BC;
    border-radius: 3px;

    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
}
</style>