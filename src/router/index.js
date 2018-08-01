import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Homeone1 from '@/components/Homeone1.vue'
import Homeone2 from '@/components/Homeone2.vue'
import Homeone3 from '@/components/Homeone3.vue'
import Homeone4 from '@/components/Homeone4.vue'
import Hometwo1 from '@/components/Hometwo1.vue'  
import Homethree1 from '@/components/Homethree1.vue'
import Homefour1 from '@/components/Homefour1.vue'
Vue.use(Router)

const vueRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {path: '/home',redirect:'/homeone1'},
        {path: '/homeone1',name: 'homeone1',component: Homeone1},
        {path: '/homeone2',name: 'homeone2',component: Homeone2},
        {path: '/homeone3',name: 'homeone3',component: Homeone3},
        {path: '/homeone4',name: 'homeone4',component: Homeone4},
        {path: '/hometwo1',name: 'hometwo1',component: Hometwo1},
        {path: '/homethree1',name: 'homethree1',component: Homethree1},
        {path: '/homefour1',name: 'homefour1',component: Homefour1},
      ]
    }
  ]
})
vueRouter.beforeEach((to, from, next) => {
  const nextRoute = [ 'home', 'homeone1', 'homeone2','homeone3','homeone4','hometwo1','homethree1','homefour1'];
  if (nextRoute.indexOf(to.name) >= 0) { 
    //接收状态值
    var sLogin=sessionStorage.getItem("isLogin")
    if (sLogin==null) {
      setTimeout(()=>{
        vueRouter.push({ name: 'login' })
      },1)
    }else if(sLogin==1){
      setTimeout(()=>{
        if(this.a.options.routes[1].path=='/home'){
          next()
        }else{
          vueRouter.push({ name: 'home' })
        }
      },1)
    }
    
  }

  next();
});
export default vueRouter
