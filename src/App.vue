<script>
import Frage from './components/Frage.vue';

export default  {
  components: {
    Frage
  },
  data() {
    return {
        fragen:[
            'Ah Wer bist du?',
            'Woher Kommst du?',
            'Was machst denn du?',
            'WEr melkt die KUh?',
        ]
    }
  },
}
</script>

<template>
<Frage :fragen="this.fragen" class="w-full"/>
</template>

<style scoped>

</style>
