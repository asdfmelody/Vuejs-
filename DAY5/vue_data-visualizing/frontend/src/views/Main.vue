<template>
  <div class="main-container">
      <Form/>
      <ReactiveBarChart
      v-if="$store.state.chartData" :chart-data="$store.state.chartData"/>
  </div>
</template>

<script>
import Form from "../components/Form.vue"
import ReactiveBarChart from "../components/ReactiveBarChart"
export default {
    components:{
        ReactiveBarChart
        ,Form
    },
    data(){
        return {
            chartData:null,
        }
    },
    created(){
        this.generateData();
        setInterval(this.generateData,2000);
        // action 호출방법 두가지
        //1 this.$store.dispatch('액션함수이름')
        this.$store.dispatch('generateChartData')
    },
    methods:{
        generateData(){
            let newArray=[];
            let newArray2=[];
               
            //newarray
            for(let i=0;i<10;i++){
                const randomValue = Math.floor(Math.random()*10);
                newArray.push(randomValue)
            }

            //newArray2
            for(let i=0;i<10;i++){
                const randomValue = Math.floor(Math.random()*10);
                newArray2.push(randomValue)
            }

            this.chartData = {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#f87979",
                        data: newArray,
                        fill: false,
                    },
                    {
                        label: "Data Two",
                        backgroundColor: "#f87979",
                        data: newArray2,
                        fill: false,
                    },
                ],
            };
        }
    }
}
</script>

<style>
.main-container{
    display: flex;
    padding: 20px;
}
.main-container > *{
    flex:1
}
</style>