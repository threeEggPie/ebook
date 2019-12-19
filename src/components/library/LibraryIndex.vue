<template>
  <el-container>
    <el-aside width="200px" >
      <Aside @selectKind="handleKind" ref="Aside"></Aside>
    </el-aside>
    <el-main >
      <Main ref="Books"></Main>
    </el-main>
  </el-container>
</template>

<script>
  import Aside from './Aside'
  import Main from './Main'
  import {listByKind ,getAllKinds} from "../../api/index";

  export default {
    name: 'App',
    components:{
      Aside,
      Main,
    },
    methods:{
      handleKind(){
        var _this=this;
        listByKind(_this.$refs.Aside.cid).then(res=>{
          if (res.code===200){
            _this.$refs.Books.books=res.data;
          }

        }).catch(error=>{
          console.log(error)
          console.log("分类查询失败");
        })
      }
    },
    mounted(){
      var _this=this;
      getAllKinds().then(res=>{
        if (res.code===200){
          _this.$refs.Aside.kindList=res.data;
        }
      })
    }


  }
</script>

<style scoped>

  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
    margin-left: 50px;
    height: 100%;
  }

  .el-main {
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
    margin-top: 20px;
    /*height: 100%;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-container{
    height: 700px;
  }
</style>
