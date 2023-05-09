<script>
export default {
    name: "Title-vue",
    props: {
        titel: String
    },
}
</script>

<template>
    <div class="flex flex-row justify-center">
        <h1>{{ titel }}</h1>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

h1 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #828282;
}
</style>
