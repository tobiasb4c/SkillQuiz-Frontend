<script>
import Timer from './components/Timer.vue'

export default{
    components:{
        Timer
    }
}
</script>

<template>

    <Timer :propMinute="1" :propSecond="5"/>

</template>

<style scoped>

</style>
