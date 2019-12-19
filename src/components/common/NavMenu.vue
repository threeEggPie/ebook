<template>
  <div>
    <el-menu
      router
      :default-active="active"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.path">{{item.name}}</el-menu-item>
      <el-menu-item index="my" style="float: right;margin: auto 20px">个人中心</el-menu-item>
      <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold; color: white">ebook - Your Mind Palace</span>
    </el-menu>

    <div class="line"></div>


  </div>

</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        navList:[
          {path:'/index',name:'首页'},
          {path:'/lib',name:'图书馆'},
          {path:'/node',name:'笔记'}
        ],
        active:'',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.active=key;
      }
    }
  }
</script>

<style scoped>
  span {
    pointer-events: none;
  }
</style>
