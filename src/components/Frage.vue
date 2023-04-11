<script>
export default  {
    props: {
        fragen: Array,
    },
    data(){
        return{
            currentFragenummer: 1,
            maximal: 1
        }
    },
    props: {
        antwortenpool: Array,
        
    },
    methods:{
    EmitGetCurrentFragenummer(current, max) {
            this.currentFragenummer = current;
            this.maximal = max;
        },
    },

    mounted()   {
        emitter.on("FragenummerCurrent", this.EmitGetCurrentFragenummer)
    },
    computed: {
        currentFragen()  {
            return this.antwortenpool[this.currentFragenummer - 1];
        }
    }
}
</script>

<template>
    <div class="flex justify-center">
        <h2>{{ this.currentFragen }}</h2>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

h2  {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #232323;
}
</style>