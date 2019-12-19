import Vue from 'vue'
import App from './App'
import router from './router/index'
import store  from "./store/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "./api/index";

Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI);

router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){
    if (store.state.user.username){
      next();
    }else{
      next({
        path:'login',
        query:{redirect: to.fullPath}  //参数，拼接在url之后
      })
    }
  }else{
    next()
  }
})









/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


