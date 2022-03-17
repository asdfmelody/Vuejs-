<template>
  <div class="home">
    <div>
      <h1 class="list-title">Now Playing</h1>
      <!--MovieLists -->
      <!-- v-bind:askData  -->
      <!-- 일반 문자열의경우는 v-bind를 사용 하지 않아도 된다  -->
      <MovieLists askData="nowPlaying"/>

      <h1 class="list-title">Popular</h1>
      <MovieLists askData="popular"/>

      <h1 class="list-title">Comming Soon</h1>
      <MovieLists askData="upComing"/>
      
    </div>
  </div>  
</template>

<script>
import MovieLists from "../components/MovieLists.vue"
export default {
  name: "Home",
  components:{
    MovieLists
  }
}
</script>

<style scoped>
.list-title {
  margin-top: 20px;
  margin-left: 20px;
  font-size: 30px;
}

</style>
