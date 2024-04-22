<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <div class="nav">
          <div class="nav-title">
            超级后台
          </div>
          <div class="nav-btn">
            <span>{{username}}</span>
            <el-button size="mini" @click="handleLogout">
              退出登录
            </el-button>
          </div>
        </div>
      </el-header>
      <el-container class="content">
        <el-aside width="200px">
          <el-menu
              default-active="2"
              router
              class="menu">
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/admin/about">
              <i class="el-icon-menu"></i>
              <span slot="title">关于</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.header{
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
}
.nav{
  display: flex;
}
.nav-title{
  line-height: 60px;
  font-size: 24px;
  font-weight: bold;
}
.nav-btn{
  margin-left: auto;
  display: flex;
  align-items: center;
}
.nav-btn span{
  margin-right: 10px;
}
.content{
  height: calc(100vh - 60px);
}
.menu{
  height: 100%;
  overflow-x: hidden;
}
</style>
<script >
import {mapState} from "vuex";

export default {
  computed:{
    ...mapState(['username'])
  },
  methods:{
    handleLogout(){
      this.$store.dispatch('logout')
    },
  }
}
</script>
