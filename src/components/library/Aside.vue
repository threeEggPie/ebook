<template>
  <el-row class="side">
  <el-col :span="24">
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-openeds="['1']"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>分类</span>
        </template>
        <el-menu-item v-for="(item , i) in kindList" :key="i" :index="item.path.toString()">
          <i class="el-icon-menu"></i>
          {{item.kind}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'Aside',
    data(){
      return{
        kindList:[
          {kind:'全部',path:'0'},
          {kind:'科技',path:'1'},
          {kind:'文化',path:'2'}
        ],
        cid:"1"
      }
    },
    methods: {
      handleSelect(key){
        this.cid=key;
        this.$emit("selectKind")
      }
    },
    mounted(){
      console.log("获取种类");
    }
  }
</script>

<style scoped>
 .side{
   margin-top: 50px;
 }
</style>
