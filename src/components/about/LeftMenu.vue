<template>
  <el-col>
    <h2 @click="controlMenuDevelopment" class="i_logo">展开</h2>
    <el-menu :router=true :default-active="this.$router.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-claim"></i>
          <span slot="title">首页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/xqt/homePage">主页</el-menu-item>
          <el-menu-item index="/xqt/activity">简介</el-menu-item>
          <el-menu-item index="/xqt/briefIntroduction">活跃度</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span slot="title">拟投</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/xqt/FinancingProgressRanking">融资进度排行</el-menu-item>
          <el-menu-item index="/xqt/RankingFinancingPopularity">融资热度排行</el-menu-item>
          <el-menu-item index="/xqt/ProjectPool">项目池</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span slot="title">我的</span>
        </template>
          <el-menu-item index="/xqt/MyInformation">我的信息</el-menu-item>
<!--          <el-menu-item index="/xqt/InvestmentMatching">我的持仓</el-menu-item>-->
<!--          <el-menu-item index="/xqt/MyPosition">投资匹配</el-menu-item>-->
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-chat-dot-square"></i>
          <span slot="title">我的</span>
        </template>
          <el-menu-item index="/xqt/aboutUs">关于我们</el-menu-item>
      </el-submenu>
      <el-menu-item-group>
      </el-menu-item-group>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    controlMenuDevelopment(){
      this.isCollapse=this.isCollapse==true?false:true;
    }
  },
  computed:{
    routes(){
      return this.$store.state.routes;
    }
  },
  created() {

  }
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.i_logo{
  font-size: 24px;
  margin-left: 10px;
  color: white;
  position: fixed;
  top: 13px;
}

</style>
