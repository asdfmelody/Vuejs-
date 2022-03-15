<template>
  <div class="home">
    <h1>220315 과제</h1>
    <div>
      <table border=1>
        <th>ID</th>
        <th>title</th>
        <th>completed</th>
        <th>createdAt</th>
        <th>updatedAt</th>
        <th>UserId</th>
        <tr v-for = "todo in todos" v-bind:key="todo.id">
          <td>{{todo.id}}</td>
          <td>{{todo.title}}</td>
          <td>{{todo.completed}}</td>
          <td>{{todo.createdAt}}</td>
          <td>{{todo.updatedAt}}</td>
          <td>{{todo.UserId}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Home",
  data(){
    return{
      todos:[],
    }
  },
  async created(){
    try{
      const response= await axios.get("https://koreanjson.com/todos");
      this.todos = response.data;
      console.log(this.todos); 

    }catch(error){
      console.log(error);

    }
  }
}
</script>

<style scoped>

</style>