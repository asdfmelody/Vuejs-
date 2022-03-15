<template>
  <div class="about">
    <h1>UP & DOWN</h1>
    <div>시도횟수 : {{cnt}}</div>

    <div>
      <input type="text" v-model="userInput"> 
      <button v-on:click="submitAnswer">버튼</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "about",
  data(){
    return{
      cnt:0,
      userInput:0,
      answer: 0
    }
  },
  methods:{
    submitAnswer(){
    // console.log(this.userInput);
    // console.log("-------------");
    // console.log(this.answer);
    // console.log("-------------");
    const userInput = Number(this.userInput);
    this.cnt++;
      if(this.answer === userInput) {
      alert("정답입니다.");
       //초기화
       this.cnt=0;
       this.userInput=0;
       this.makeRandomNum1to50();
      }
      else if(this.answer > this.userInput)
      alert("더 큰 값을 입력하세요");
      else if(this.answer < this.userInput)
       alert("더 작은 값을 입력하세요.")
       else alert("error");

    },
    makeRandomNum1to50(){
      this.answer=Math.floor(Math.random()*50)+1;
    }
  },
  created(){ //시작하자마자 실행되는 함수
    this.makeRandomNum1to50(); 
  }
}
</script>