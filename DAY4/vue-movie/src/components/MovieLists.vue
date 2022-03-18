<template>
  <div>
    <div class="movielists-container">

        <div
        class="movie-container"
        v-for="movie in movies"
        :key="movie.id"
        @click="goDetail(movie.id)"
        >
          <div>
            <img :src="imageParse(movie.poster_path)" width="125" height="180" alt="영화이미지">
          </div>
          <div class="movie-title">
            {{movie.title }}
          </div>
          <div class="movie-date">
            {{movie.release_date}}
          </div>
        </div>
    </div>
    
  </div>
</template>

<script>
import {movieApi} from "../utils/axios"
// axios 호출
export default {
  props:['askData', 'searchData'],
  data(){
    return {
      movies: []
    }
  },

  async created(){
    // 공통으로 사용할 컴포넌트 
    // nowPlaying,Upcomming, 데이터를 보여준다.
    // 로딩을 하고
    this.$store.commit("SET_LOADING", true);
    if(this.askData === "nowPlaying"){
      // 데이터를 불러오기 전
      const response = await movieApi.nowPlaying();
      // 데이터를 불러온 후
      console.log(response); 
      this.movies = response.data.results;
    }
    if(this.askData === "popular"){
      const response = await movieApi.popular();
      this.movies = response.data.results;
    }
    if(this.askData === "upComing"){
      const response = await movieApi.upComing();
      this.movies = response.data.results;
    }
    // undefined인조건에서 undefined의 length는 존재하기 않기 떄문에 이런에러가 나온다
    // this.searchData가 존재하면서 해당 배열의 길이또한 조재해야 해당 movie를 덧씌워준다
    if(this.searchData && this.searchData.length){
      this.movies = this.searchData;
    }

    // 로딩을 종료 
    this.$store.commit("SET_LOADING", false);
  },

  methods:{
    imageParse(path){
      //  
      return `https://image.tmdb.org/t/p/w300${path}`
    },
    goDetail(id){
      this.$router.push(`detail/${id}`)
    }
  }
}
</script>

<style scoped>
.movielists-container{
  display: flex;
  flex-wrap: wrap;
}
.movie-container{
  width: 125px;
  margin:20px;
}
.movie-title{
  margin-top: 7px;
  font-size: 14px;
  color:#cccccc;
}
.movie-date{
  font-size: 12px;
  color:#bbbbbb;
}
.movie-container:hover{
  opacity: 0.5  ;
  cursor: pointer;
}
</style>
