<template>
  <div >
    <meta name="referrer" content="no-referrer">
      <el-container>
        <el-header><Header></Header></el-header>
        <el-container style="height: 800px">
          <el-aside width="200px" ><LeftMenu @click="isLOGO"></LeftMenu></el-aside>
          <el-main><router-view></router-view></el-main>
        </el-container>
      </el-container>
  </div>
<!--      <el-header height="60px" class="header"><Header></Header></el-header>-->
<!--      <el-container>-->
<!--        <el-aside width="249px" class="header" style="margin-top: 60px"><LeftMenu></LeftMenu></el-aside>-->
<!--&lt;!&ndash;        <div style="margin:70px 0 0 280px" class="pan" v-show="this.$router.currentRoute.path!='/main'">&ndash;&gt;-->
<!--&lt;!&ndash;          <el-breadcrumb separator-class="el-icon-arrow-right">&ndash;&gt;-->
<!--&lt;!&ndash;            <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-breadcrumb-item>{{this.$router.currentRoute.name}}</el-breadcrumb-item>&ndash;&gt;-->
<!--&lt;!&ndash;          </el-breadcrumb>&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;          <br>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;          <router-view></router-view>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->

<!--&lt;!&ndash;        <div class="title" v-show="this.$router.currentRoute.path=='/main'">&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--      </el-container>-->
<!--    </el-container>-->
</template>
<script>
import Header from "@/components/about/header";
import LeftMenu from "@/components/about/LeftMenu";
export default {
  name: 'mains',
  components: {
    Header,
    LeftMenu
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    isLOGO(){
      console.log(1)
    }
  },
created() {
}
}
</script>

<style scoped>
*{
  overflow :hidden;
}
.header{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  opacity: 0.9;
}
.el-header, .el-footer {
  color: #333;
  text-align: right;
  line-height: 60px;
  padding-left: 110px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  background-color: #397fc6;
}

.el-aside {
  text-align: center;
  //line-height: 200px;
  height: 100%;
  min-height: 900px;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 900px;
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
.pan {
  margin-top: 15px;
  margin-left: 15px;
}
.title h2{
  text-align: center;
  margin-left: 500px;
  margin-top: 30px;
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
</style>
