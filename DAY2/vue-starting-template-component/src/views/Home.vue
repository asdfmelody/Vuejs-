<template>
  <div class="home">
    <HomeHeader/>
    <HomeStory/>
    <HomeFeed/>
    <HomeAside/>
  </div>
</template>

<script>
import HomeHeader from "../components/home/HomeHeader.vue"
import HomeFeed from "../components/home/HomeFeed.vue"
import HomeStory from "../components/home/HomeStory.vue"
import HomeAside from "../components/home/HomeAside.vue"

export default {
  name: "Home",
  //컴포넌트를 사용하기 위해서는 컴포넌트 등록을 해주어야한다.
  components:{
    HomeHeader,
    HomeFeed,
    HomeStory,
    HomeAside
  }
}
</script>

<style scoped>

</style>