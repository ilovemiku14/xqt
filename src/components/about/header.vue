<template>
<el-row class="header">
  <h2 class="logo">校轻投</h2>
  <div>
  <el-avatar class="imga" shape="square" :size="50" :src="url" :title="title"></el-avatar><!--  <h2>acfun</h2>-->
  </div>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      title:"acfun",
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  /*background-color: #333333;*/

}
.header-logins {
}
div {
  margin-top: 2px;
}
.logo{
  color: white;
  position: fixed;
  width: 45%;
}
</style>
