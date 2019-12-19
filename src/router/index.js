import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/home/Appindex'
import Test from '@/components/home/test'
import home from '@/components/Home'
import library from '@/components/library/LibraryIndex'
import node from '@/components/NodeIndex'
import my from '@/components/MyIndex'
import Content from '@/components/content/ContentIndex'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/index'
      // component: Test
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
      // component: Test
    },
    {
      path:'/home',
      name:'Home',
      redirect:'index',
      component:home,
      children:[{
        path:'/index',
        name: 'Index',
        component: Index,
        meta:{
          requireAuth:true
        }
      },
        {
          path: '/lib',
          name: 'Library',
          component: library,
        },
        {
          path:'/node',
          name:'node',
          component:node
        },
        {
          path:'/my',
          name:'my',
          component:my

        },
        {
          path:'/content/:conId',
          name:'Content',
          component:Content,
        }
      ]
    },
  ]
})
