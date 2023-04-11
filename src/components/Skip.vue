<script>
import emitter from "tiny-emitter/instance";
import Beenden from "./Beenden.vue";

export default {
    data()  {
        return  {
            currentFragenummer: 0,
            showBeenden: false,
        }
    },
    components: {
        Beenden,
    },
    methods: {
        EmitIncrease()  {
            emitter.emit("FragennummerIncrease")
        },
        EmitDecrease()  {
            emitter.emit("FragennummerDecrease")
        },
        EmitGetCurrentFragenummer(current, max) {
            this.currentFragenummer = current;
            this.showBeenden = (current == max);
        },
    },
    mounted()   {
        emitter.on("FragenummerCurrent", this.EmitGetCurrentFragenummer)
    },
}

</script>

<template>
    <!--div class="grid grid-cols-2 grid-rows-1 gap-1">
        </div-->
        <button v-if="currentFragenummer != 1" class="py-2 text-white w-full" @click="EmitDecrease()">Previous</button>

        <button v-if="!showBeenden" class="py-2 text-white w-full" @click="EmitIncrease()">Next</button>
        <Beenden v-if="showBeenden"/>
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