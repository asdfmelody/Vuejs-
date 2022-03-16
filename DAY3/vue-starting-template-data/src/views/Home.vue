<template>
  <div class="home">
    <h1>부모</h1>
    {{mySchool}}
    <!-- props = 부모 -> 자식으로 데이터를 넘겨줄때 사용 -->
    <!-- v-bind : 임의의변수명(key) = data에 정의된 변수(value) -->
    <HomeChild v-bind:mySchoolProps="mySchool" v-bind:myAge="myAge"></HomeChild>
    <button v-on:click="move"> 이동 버튼 </button>
  </div>
</template>

<script>
import HomeChild from "../components/HomeChild.vue"

export default {
  name: "Home",
  components:{
    HomeChild
  },
  data(){
    return{
      myAge:40,
      mySchool:"싸피"
    }
  },
  created(){
    console.log(this.myAge);
    console.log(this.mySchool);
  },
  methods:{
    move(){
      this.mySchool="집";
    }
  }
}
</script>

<style scoped>

</style>