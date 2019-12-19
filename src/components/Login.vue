<template>
<!--  <el-card>-->
<!--    用户名:<input type="text" v-model="loginForm.username"><br>-->
<!--    密码:<input type="password" v-model="loginForm.password"><br>-->
<!--    <button @click="login">提交</button>-->
<!--  </el-card>-->

<!--    <el-form class="login-container" label-position="left"-->
<!--             label-width="0px">-->
<!--      <h3 class="login_title">系统登录</h3>-->
<!--      <el-form-item>-->
<!--        <el-input type="text" v-model="loginForm.username"-->
<!--                  auto-complete="off" placeholder="账号"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-input type="password" v-model="loginForm.password"-->
<!--                  auto-complete="off" placeholder="密码"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item style="width: 100%">-->
<!--        <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
  <div id="box">
    <div style="margin: 20px;"></div>
    <el-form  label-width="0px" class="login-container">
      <h2 class="login_title">系统登录</h2>
      <el-form-item >
        <el-input v-model="loginForm.username" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item >
        <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="text-align: center; margin: 50px">
        <el-button type="primary" round style="width: 200px; " @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  export default {
    name: 'Login',
    methods:{
      login(){
        this.$axios.post('/login',this.loginForm).then(res=>{
          if (res.code===200){
            this.$store.commit("login",res.data)
            console.log("------")
            var path = this.$route.query.redirect;
            console.log(path);
            this.$router.replace({path: path==='/'|| path===undefined ? '/index':path})
            // this.$router.replace({path:'/index'})
          }
        }).catch(error=>{
          console.log(error);
        })
      },
    },
    data(){
      return {
        loginForm:{
          username:'',
          password:'',
        },
        responseResult:[]
      }
    }
  }
</script>

<style scoped>
  .login-container {
    border: 1px solid white;
    border-radius: 25px;
    width: 400px;
    height: 300px;
    padding: 45px 35px 15px 35px;
    margin: 150px auto 90px;
    box-shadow:0 0 25px #cac6c6;
    /*background: white;*/
    /*background-clip: padding-box;*/
    /*border-radius: 15px;*/
    /*background-clip: padding-box;*/
    /*margin: 90px auto;*/
    /*width: 350px;*/
    /*padding: 35px 35px 15px 35px;*/
    /*background: #fff;*/
    /*border: 1px solid #eaeaea;*/
    /*box-shadow: 0 0 25px #cac6c6;*/
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  #box{
    position: absolute;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    /*overflow-y: auto;*/
    background: url("../assets/beijing.jpg") no-repeat;
    background-size:cover;
  }
</style>
