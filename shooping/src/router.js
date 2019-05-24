import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import login from './views/login.vue'
import sign_in from './views/sign_in.vue'
import detials from './views/detials'
import shopcart from './views/shopcart'
import search from './views/search'
import buy from './views/buy'
import notfound from './components/notfound'


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/index",component:index},
    {path:"/login",component:login},
    {path:"/sign_in",component:sign_in},
    {path:"/detials",component:detials},
    {path:"/shopcart",component:shopcart},
    {path:"/buy",component:buy},
    {path:"/search",component:search},
    {path:"*",component:notfound},
  ]
})
