<template>
  <div class="home">
    <h1>hello vue.js</h1>
    부모
    <button @click="gettingOld">늙어지는 버튼</button>
    <HomeChild :mySchool="mySchool" :myAge="myAge"
               @move="moveSchool"
               :food="food" @changeFood="changeFood"></HomeChild>
  </div>
</template>

<script>
import HomeChild from "../components/HomeChild.vue"
export default {
  name: "Home",
  components:{
    HomeChild,
  },
  data(){
    return{
      mySchool:"싸피",
      myAge: 40,
      food: "초코"
    }
  },
  created(){
    console.log(`부모 mySchool: ${this.mySchool}`);
    console.log(`부모 myAge: ${this.myAge}`);
  },
  methods:{
    //나이들게 하는 함수
    gettingOld(){
      this.myAge = 80;
    },
    //전학가는 함수
    moveSchool(name,name2,name3){
      console.log(name);
      console.log(name2);
      console.log(name3);
      this.mySchool=name;
    },
    //
    changeFood(food){
      console.log(food);
      this.food = food;
    }
  }
}
</script>

<style scoped>

</style>