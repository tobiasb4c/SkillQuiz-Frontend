<script>
export default  {
    props: {
        fragen: String,
    },
}
</script>

<template>
    <div class="flex justify-center">
        <h2>{{ this.fragen[0] }}</h2>
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