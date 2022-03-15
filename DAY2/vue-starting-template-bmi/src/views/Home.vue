<template>
  <div class="home">
    <h1>BMI 계산기</h1>
    <div>
      키: <input type="text" v-model="height">
    </div>
    <div>
      몸무게: <input type="text" v-model="weight">
    </div>
    <div>
      <button v-on:click="checkBMI">버튼</button>
    </div>
    <div>
      결과: {{result}}
    </div>

    
    
    
    
  </div>
</template>

<script>

export default {
  name: "Home",
  data(){
    return{
      height:0,
      weight:0,
      result: ""
    }
  },
  methods:{
    checkBMI(){
      //키 / 몸무게

      //자신의 몸무게를 키의 제곱으로 나눈 값
      const weight = Number(this.weight);
      const height = Number(this.height)/100;
      if(isNaN(weight) || isNaN(height)){
        alert("숫자를 입력해주세요");
        return;
      }
      const BMI = weight/(height* height);
      if(BMI <18.5) this.result="저체중";
      else if(BMI >=18.5 && BMI < 23.5) this.result="정상";
      else if(BMI > 23 && BMI <=25) this.result="과체중";
      else this.result="비만";
    }
  }
}
</script>

<style scoped>

</style>