<template>
  <div class="about">
    <h1>부모 </h1>
    {{food}}
    <button v-on:click="move">피자로 바꾸기</button>
    <AboutChild v-bind:food="food"></AboutChild>
  </div>
</template>
<script>
import AboutChild from "../components/AboutChlid.vue"

export default {
    name:"About",
    components:{
        AboutChild
    },
    data(){
      return{
        food: "치킨",
      }
    },
    methods:{
      move(){
        this.food = "피자";
      }
    }
}
</script>