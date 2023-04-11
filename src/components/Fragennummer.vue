<script>
import emitter from "tiny-emitter/instance";

export default {
    methods: {
        
        increase() {
            if (this.current == this.max) {
                return;
            }

            this.current += 1;
        },
        decrease()  {
            if (this.current == 1) {
                return;
            }

            this.current -= 1;
        },
        //TEST
        /*
        simulateEmitIncrease()  {
            emitter.emit("FragennummerIncrease")
        },
        simulateEmitDecrease()  {
            emitter.emit("FragennummerDecrease")
        },*/
    },
    data()  {
        return  {
            current: null,
            max: null
        }
    },
    props: {
        propMax: Number,
    },
    created() {
        this.max = this.$props.propMax;
        this.current = 1;

        emitter.on("FragennummerIncrease", this.increase);
        emitter.on("FragennummerDecrease", this.decrease);
    }
}

</script>

<template>
    <div>
        <p>Question {{ current }} of {{ max }}</p>

        <!--TEST
        <p>TEST BUTTONS</p>
        <button @click="simulateEmitIncrease">Increase Emit</button>
        <button @click="simulateEmitDecrease">Decrease Emit</button>
        -->
    </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

p   {
    color: #828282;
    text-align: center;
    font-family: 'Lato', sans-serif;
}
</style>
