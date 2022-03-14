<template>
  <div class="home">
    <h1>hello vue.js</h1>
    <HomeHeader/>
  </div>
</template>

<script>
import HomeHeader from "../components/Home/header/HomeHeader.vue"
export default {
  name: "Home",
  components:{
    HomeHeader
  }
}

</script>

<style scoped>

</style>