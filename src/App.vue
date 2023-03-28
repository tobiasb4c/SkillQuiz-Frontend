<script>

import Beenden from './components/Beenden.vue'
import Frage from './components/Frage.vue';
import Fragennummer from './components/Fragennummer.vue';

export default  {
    components: {
        Beenden,
        Frage,
        Fragennummer,
    },
    data() {
    return {
    }
  }
}
</script>

<template>
<Fragennummer max="10"/>
<Frage text="Hallo Test Frage" class="w-full"/>
<Beenden/>


</template>

<style scoped>

</style>
