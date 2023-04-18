<script>

export default {
    data() {
        return {
            time: null,
            counter: null,
        }
    },
    props: {
        propTitelAddon: String,
    },
}

</script>

<template>
    <h1>Micro-Certification {{ propTitelAddon }}</h1>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

h1  {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 43px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #232323;
}

</style>
