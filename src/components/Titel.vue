<script>
export default{
    props:{
        titel: String
    },
}
</script>

<template>
    <div>
    <h1 class="absolute flex items-center text-center text-gray-600">{{ titel }}</h1>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
    h1{
        width: 165px;
        height: 22px;

        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }
</style>
