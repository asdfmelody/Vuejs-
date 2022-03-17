<template>
  <div class="movie-detail">
    <div class="movie-background"
    :style="{backgroundImage: `url(${backgroundParse()}`}">

    </div>
    <div class="movie-container">
      <div>
        <img class="movie-poster" :src="imageParse()" alt="영화상세정보">
      </div>

      <div class="movie-content">
        <h1 class="movie-title"> {{movieDetailData.title}}</h1>
        
        <div class="movie-info-wrapper">
          <!-- 개봉일/러닝타임/장르 -->
          <div class="movie-info-wrapper">
            <div class="movie-open">
              개봉일: {{movieDetailData.release_date}}
            </div>
            <div>
              러닝타임 : {{movieDetailData.runtime}}
            </div>
            <div>
              장르 : 
              <a v-for="genre in movieDetailData.genres" :key="genre.id">
              {{genre.name}}
              </a>
            </div>
            <div>
              <a :href=movieDetailData.homepage>홈페이지 바로가기</a>
            </div>
          </div>
        </div>
        
        <div class="movie-story">
        {{movieDetailData.overview}}
        </div>

        <div class="movie-youtube" 
        v-if="movieDetailData && 
        movieDetailData.videos.results && 
        movieDetailData.videos.results.length">
            <iframe :src="youtubeParse()"
              width="560"
              height="315"
              allowfullscreen
             frameborder="0"></iframe>
        </div>



      </div>
    </div>
  </div>
</template>

<script>
import {movieApi} from "../utils/axios"
export default {
    data(){
        return{
            movieDetailData:{}
        }
    },
    async created(){
        this.$store.commit("SET_LOADING",true);
        
        console.log(this.$route);
        //detail은 id값으로 디테일을 가져온다
        const response = await movieApi.movieDetail(this.$route.params.id);
        console.log(response);
        this.movieDetailData=response.data;
        console.log(this.movieDetailData);
        this.$store.commit("SET_LOADING",false);
    },methods:{
      imageParse(){
        if(this.movieDetailData.videos && this.movieDetailData.videos.results.length){
        return `https://image.tmdb.org/t/p/original/${this.movieDetailData.poster_path}`
        
          }
      },
      backgroundParse(){
        return `https://image.tmdb.org/t/p/original/${this.movieDetailData.backdrop_path}`
      },
      //정상 독작하는데 에러나는 경우는 props 시점이 안맞기 때문에 if등으로 에러 핸들링 해줘야함.
      youtubeParse(){
        if(this.movieDetailData.videos && this.movieDetailData.videos.results.length){
             return `https://www.youtube.com/embed/${this.movieDetailData.videos.results[0].key}`
        
          }
        } 
    }
}
</script>

<style scoped>
.movie-detail {
  position: relative;
  margin-top: 50px;
}
.movie-background {
  background-size: cover;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
.movie-background::after {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  background-color: rgb(40, 40, 40);
  opacity: 0.8;
  content: "";
  display: block;
}
.movie-container {
  position: relative;
  z-index: 999;
  display: flex;
}
.movie-content {
  margin-left: 25px;
  color: white;
}
.movie-poster {
  height: 80vh;
  margin-left: 40px;
}
.movie-info-wrapper{
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.movie-info-wrapper>div{

  font-size: 14px;
  color:#eeeeeeee;
}
.movie-info-wrapper>div:not(:first-child){
  margin-left: 15px;
}
.movie-info-wrapper a{
  color:#eeeeee;
  font-size: 15px;
}
.movie-title {
}
.movie-story {
  margin-top: 20px;
  max-width: 33vw;
  color: #bbbbbb;
}
.movie-youtube {
  margin-top: 40px;
}
</style>