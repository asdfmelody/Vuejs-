import axios from "axios";

//공통으로 들어가는 URL
const DOMAIN = "https://api.themoviedb.org/3";

// axios 기본 셋팅
const request = axios.create({
  // request로 요청하는 모든 요청이 기본적으로 앞에 baseURL이 탑재가 된다.
  // baseUrl -> baseURL
  baseURL: DOMAIN,
  params: {
    api_key: "1b7b29cbb625ff880e873d99956ce0ce",
    language: "ko-KR"
  }
});

// nowPlaying
// popular
// upComing
// movieDetail
// search
// 검증 -> 적용 
// postman 검증 -> 실적용 
// 언제나 AXIOS를 만들어서 호출하는 환경을 생성 -> 시간 오래걸린다
// 변경시에 또 코드를 수정해야하는 불편함

export const movieApi = {
  nowPlaying: () => {return request.get("/movie/now_playing")},
  popular: () => {return request.get("/movie/popular")},
  upComing: () => {return request.get("/movie/upcoming")},
  movieDetail: (movie_id) => {
    // /movie/{movie_id}
    // /movie/{movie_id}/videos 두개를 요청해야 video 정보를 가져오지만 
    // append_to_response를 활용
    return request.get(`/movie/${movie_id}`, {
      params: {
        append_to_response:"videos"
      }
    })
  },
  search: (keyword) => {return request.get("/search/movie", {
    params:{
      query:keyword
    }
  })}
}
