import Vue from 'vue'
import Vuex from 'vuex'
import {dataLap} from "../utils/axios"

Vue.use(Vuex)

function makeColor(){
  return "#" + Math.round(Math.random() * 0xffffff).toString(16);
}

export default new Vuex.Store({
  state: {
    chartData:""
  },
  mutations: {
    CHANGE_CHART_DATA(state,data){
      state.chartData = data;
    }
  },
  //비동기 부분을 사용할 때 action
  //action 호출 (비동기 작업) -> 작업 후에 mutations으로 state변경
  actions: {
    async generateChartData({commit}){
      try{
        const result= await dataLap.get();
        console.log(result);

        const chartData={
          labels: result.data[0].data.map(li=>li.period),
          datasets: result.data.reduce(( acc,cur)=>{
            let label = cur.title;
            let data = cur.data.map(li => li.ratio);
            acc.push({
              label,
              data,
              backgroundColor:makeColor(),
              borderColor: makeColor(),
              fill:false
            });

            return acc;
          },[])
        }
        
        //mutation commit
        commit("CHANGE_CHART_DATA",chartData);
      }catch(error){
        console.log(error);
      }
    }
  },
  modules: {
  }
})
