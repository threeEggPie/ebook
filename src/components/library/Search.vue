<template>
  <div>
    <el-button type="primary" icon="el-icon-search" @click="searchClick">搜索</el-button>
    <el-input v-model="keywords" placeholder="请输入标题或作者名" ></el-input>

  </div>

</template>

<script>

  export default {
    name: 'App',
    data(){
      return {
        keywords:''
      }
    },
    methods:{
      searchClick(){
        this.$emit('OnSearch',this.keywords);
      },
    }
  }
</script>

<style scoped>
.el-input{
  width: 200px;
  float: right;
  /*text-align: left;*/
  margin-right: 10px;
}
  .el-button{
    float: right;
    /*text-align: left;*/
    margin-right: 100px;
  }
</style>
