<template>
<div>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>
      <h2 v-html="contents.content"></h2>
    </el-main>
  </el-container>
</div>
</template>

<script>
  import {getContent} from '@/api/index'
  export default {
    name: 'App',
    data(){
      return {contents:{
        id:"",
          content:''
        }}
    },
    mounted() {
      const id=this.$route.params.conId;
      getContent(id).then(res=>{
        if (res.code===200){
          this.contents=res.data;
        }
      })

    }
  }
</script>

<style scoped>

</style>
