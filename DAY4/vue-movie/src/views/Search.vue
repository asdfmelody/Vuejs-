<template>
  <div v-if="!$store.state.loading">
    <input
      v-model="inputText"
      @keyup.enter="searchMovie"
     class="movie-search" placeholder="영화 제목을 입력하세요.">
    
     <!-- Seach페이지에서 데이터를 검색한후-> 해당 데이터를 props로 넘겨준다. -->
    <MovieLists v-if="searchData.length" :searchData="searchData"/>
  </div>
</template>

<script>
import MovieLists from "../components/MovieLists.vue"
import { movieApi } from '../utils/axios';

export default {
  components:{
    MovieLists
  },
  data(){
    return {
      inputText: "",
      searchData: []
    }
  },
  created(){
    this.$store.commit("SET_LOADING", false);
  },
  methods:{
    async searchMovie(){
      // v-model의 데이터를 받아서 검색을하고 그결과를 props로 넘겨준다.
      this.$store.commit("SET_LOADING", true);
      const response = await movieApi.search(this.inputText);
      console.log(response);
      this.searchData = response.data.results;
      this.$store.commit("SET_LOADING", false);
    }
  }
  
}
</script>

<style>
.movie-search{
  display: block;
  width:100%;
  padding:12px;
}
</style>
