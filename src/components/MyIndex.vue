<template>
  <el-container>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>个人中心</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                  <i class="el-icon-s-custom"></i> 基本信息
                </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'My'
  }
</script>

<style scoped>
.delete{
  pointer-events: none;
}
</style>
