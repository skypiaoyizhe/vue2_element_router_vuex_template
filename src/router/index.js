import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/admin/index',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/layout/AdminTpl.vue'),
    redirect:'/admin/index',
    children:[
      {
        path: 'index',
        name: 'admin-index',
        component: () => import('@/views/admin/HomeView.vue')
      },
      {
        path: 'about',
        name: 'admin-about',
        component: () => import('../views/admin/AboutView.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,form,next) => {
  const isLogin = store.getters.isLogin
  const hasUserinfo = store.getters.hasUserinfo
  console.log('是否登录：',isLogin)
  console.log('是否已加载用户信息：',hasUserinfo)
  if(isLogin && !hasUserinfo){
    // 这儿添加token获取用户信息的接口
    console.warn("获取用户信息")
  }
  if(to.path.includes('/admin')){
    if(isLogin){
      next()
    }else{
      next('/login')
    }
  }else if(to.path === '/login'){
    if(isLogin){
      next('/')
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router
