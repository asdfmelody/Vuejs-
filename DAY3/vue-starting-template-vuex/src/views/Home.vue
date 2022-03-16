<template>
  <div class="home">
    <h1>hello vue.js</h1>
    부모
    {{$store.state.myName}}
    {{$store.state.myAge}}
    <HomeChild></HomeChild>
  </div>
</template>

<script>
import HomeChild from "../components/HomeChild.vue"
export default {
  name: "Home",
  components:{
    HomeChild
  },
  created(){
    console.log(this.$store)
    console.log(this.$store.state)
  }
}
</script>

<style scoped>

</style>