import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

const store=new vuex.Store({
  state:{
    user:{
      username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
    }
  },
  mutations:{
    login(state,user){
      state.user=user;
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }
})
Vue.prototype.$store=store
export default store
