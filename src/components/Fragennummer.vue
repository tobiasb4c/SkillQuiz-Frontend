<script>

export default {
    methods: {
        increment() {
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
        }
    },
    data()  {
        return  {
            current: null,
            max: null
        }
    },
    props: {
        max: Number,
    },
    created() {
        this.max = this.$props.max;
        this.current = 1;
    }
}

</script>

<template>
    <div>
        <p>Question {{ current }} of {{ max }}</p>
    </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

p   {
    color: #828282;
    text-align: center;
}
</style>
