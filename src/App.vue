<script>

import Beenden from './components/Beenden.vue'
import Frage from './components/Frage.vue';


export default  {
    components: {
        Beenden,
        Frage
    },
    data() {
    return {
    }
  }
}
</script>

<template>
<Frage text="Hallo Test Frage" class="w-full"/>
<Beenden/>


</template>

<style scoped>

</style>
