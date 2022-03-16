import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// vuex 상태관리 라이브러리
export default new Vuex.Store({
  // 공통으로 관리할 데이터
  state: {
    myName:"싸피",
    myAge:40,
  },
  //state를 변경할 대 사용하는 함수의 모음
  // 비동기에 대한 처리를 담당하지 않는다.
  mutations: {
    SET_MY_NAME(state,data){
      state.myName = data;
    },
    SET_MY_AGE(state,data){
      state.myAge = data;
    }
  },
  //함수들의 모음 0 비동기 처리를 하는 함수들의 모음
  actions: {
  },
  //추가 라이브러리를 적용할 때 사용
  //해당 내용이 방대해졌을때 분리하는 용도
  modules: {
  }
})
