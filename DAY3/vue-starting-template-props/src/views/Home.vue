<template>
  <div class="home">
    <h1>hello vue.js</h1>
    <FriedChicken :title="title" :salt="salt"></FriedChicken>
  </div>
</template>

<script>
import FriedChicken from "../components/FriedChicken.vue"
export default {
  name: "Home",
  components:{
    FriedChicken
  },data(){
    return{
      title: "치킨은 맛있다.",
      salt:30,
    }
  }
}
</script>

<style scoped>

</style>