<script>
export default {
    props: {
        antworten: Array
    }
}
</script>

<template>
    <div id="ans" v-for="antwort in antworten">
        <label :for="antwort">{{ antwort }}</label>
        <input type="checkbox" :value="antwort">
    </div>
</template>

<style scoped>
label{
display: inline-block;
width: 341px;
margin-left: 10px;

right: 0px;

font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

align-items: center;

color: #232323;

}
input {
    box-sizing: border-box;
    margin-left: 149px;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 20px;
    height: 20px;
    
    

    /* Neutral Turquoise */

    background: #2FB4BC;
    /* Neutral Turquoise */

    border: 1px solid #2FB4BC;
    border-radius: 5px;
}
#ans{
    box-sizing: border-box;
    height: 50px;
    width: 537px;

margin-top: 0px;
margin-bottom: 10px;

background: #FFFFFF;
/* Gray 5 */

border: 1px solid #E0E0E0;
border-radius: 5px;
}
</style>
