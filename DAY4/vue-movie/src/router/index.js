import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from "../views/Search.vue"
import Detail from "../views/Detail.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    // node /:id params와 같다.
    // 변화 가능
    // 백엔드파트와 프론트 파트의 Router 설계를 유사하게 해주면
    // 협업시에 편하다.
    // /detail/영화제목
    // /detail/35
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
