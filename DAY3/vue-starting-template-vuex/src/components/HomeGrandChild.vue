<template>
  <div>
      손자
    {{$store.state.myName}}
    {{$store.state.myAge}}
    <hr>
    {{myName}}
    {{myAge}}
    <hr>
    <button @click="changeAge">늙어지는 버튼</button>
    <br>
    <input type="text" v-model="name"/>
    <button @click="changeMyName">이름 바꾸기</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex" //-> 헬퍼함수
export default {
    data(){
        return{
            name:"",
        }
    },
    computed:{
        // mapState(['state의 변수이름']) -> 헬퍼함수
        // 헬퍼함수를 활용한 데이터 가져오기
        ...mapState(['myName','myAge'])
    },
    created(){
        console.log(this.myName);
        console.log(this.myAge);
    },
    methods:{
        //mapMutations 는 methods에 정의
        ...mapMutations(['SET_MY_AGE','SET_MY_NAME']),
        changeAge(){
            //mutation 호출
            // this.$store.commit('함수의 이름','바꿀값')
            this.$store.commit('SET_MY_AGE',100)
        },
        changeMyName(){
            this.SET_MY_NAME(this.name);
        }
    }

}
</script>

<style>

</style>