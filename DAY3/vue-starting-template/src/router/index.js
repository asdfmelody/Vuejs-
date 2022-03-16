import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Board from '../views/Board.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    //path: 경로
    path: '/',
    //name: 이름 정의
    name: 'Home',
    //views에서 가져온 페이지
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    //Board 추가
    path:'/board',
    name: 'Board',
    component: Board
  },
  {
    //Board 추가
    path:'/board/:name',
    name: 'Board',
    component: Board
  },
  {
    //모든 경로
    path:'*',
    component: Error
  }
]

//history 모드
// 기본적으로 vue는 hash모드이다. (주로 어플리케이션에서 사용하는 모드 - URL을 #의 형태로 서비스)
// history 모드 : 일반 웹 브라우저 모드
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
