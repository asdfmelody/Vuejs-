<template>
  <div class="home">
    <h1>hello vuejs</h1>

    <div v-if="loading">로딩중.....</div>
    <div v-else> <!-- Dom에 접근할 일이 생길때 사용하는 ref -->
      <div v-for = "todo in todos" v-bind:key="todo.id">
        {{todo}}
      </div>
    </div>

    <input ref="input-ref">
    <div ref="div-ref">div-ref</div>

  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Home",
  data(){
    return {
      todos:[],
      loading:true
    }
  },

  //데이터를 가져온다
  //axios 호출등을 해당 부분에서 진행
  async created(){
    console.log("created : 데이터가 생성되었으나 화면에 부탁되지는 않는다.")
    console.log(this.todos);

    //ref 접근 -> created에선 undefined
    //this.$refs 로 선언한 변수 이름
    console.log("---created----");
    console.log(this.$refs['input-ref']);
    console.log(this.$refs['div-ref']);
    console.log("---========----");

    //https://jsonplaceholder.typicode.com/todos/
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
      console.log(response);
      this.todos = response.data;
      this.loading = false;

    }catch(error){
      console.log(error);

    }

  },
  mounted(){
    console.log("화면에 부착한 후");
    //vue에서 화면에 접근을 해야할 상황이 오기도 한다.
    //특정 이벤트를 활용할때는 DOM에 직접 접근해야한다.
    //document.queryselect 사용 X
    //ref라는 것을 활용

    //ref 접근
    console.log("---mounted----");
    console.log(this.$refs['input-ref']);
    console.log(this.$refs['div-ref']);
    console.log("---========----");

    const div=this.$refs['div-ref'];
    div.style.color = "Blue";
    this.$refs['input-ref'].focus();
  }
}
</script>

<style scoped>

</style>