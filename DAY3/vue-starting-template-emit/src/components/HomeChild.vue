<template>
  <div>
      자식
      <button @click="moveFromSchool">나 전학갈래</button>
      <HomeGrandChild :food="food" @changeFood="changeFood"></HomeGrandChild>

  </div>
</template>

<script>
import HomeGrandChild from "./HomeGrandChild.vue"

export default {
    components:{
        HomeGrandChild,
    },
    props:['mySchool','myAge','food'],
    methods:{
        moveFromSchool(){
            // 첫번째 파라미터 : 부모에서 자식에게 함수 보내줄때 사용했던 key
            // 두번째 파라미터 : 적용할 값
            this.$emit("move","명문초등학교","고오오급 초등학교","집앞 초등학교" )
        },
        changeFood(food){
            this.$emit("changeFood",food)
        }
    }
}
</script>

<style>

</style>