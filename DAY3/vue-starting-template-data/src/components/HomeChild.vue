<template>
  <div>
      <h1>자식</h1>
      {{mySchoolProps}}
      <HomeGrandChild v-bind:mySchoolProps="mySchoolProps"></HomeGrandChild>
  </div>
</template>

<script>
import HomeGrandChild from "./HomeGrandChild.vue"

export default {
    components:{
        HomeGrandChild
    },

    //부모에서 준 데이터 받아오기
    props:['mySchoolProps','MyAge'], //부모에서 key로 정의한 변수명으로 데이터를 받아온다.

    created(){
        console.log("----- 자식 ---------");
        console.log(this.mySchool); // 안나옴
        console.log(this.mySchoolProps); //나옴

        //props로 받아온것은 변경이 불가. 
        //데이터는 단방향
        // 부모 > 자식 방향으로 밖에 줄 수 없고
        // 이 데이터를 변경하기 위해서는 또 다른 emit을 활용
        //this.mySchoolProps="안녕하세요"; //에러 발생

        console.log(this.myAge);
        console.log("----- 자식 ---------");
    }
}
</script>

<style>

</style>