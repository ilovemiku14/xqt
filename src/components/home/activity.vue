<template>
<!--  <video width="320" height="240" controls>-->
<!--    <source src="movie.mp4" type="video/mp4">-->
<!--  </video>-->
  <el-row>
    <el-row :span=24 style="height: 500px">
      <el-col :span=6><p style="color: white">.</p></el-col>

      <el-col  :span=10 style="width: 40%;">
        <el-card shadow="hover" >
          <iframe src="//player.bilibili.com/player.html?aid=716031167&bvid=BV1nQ4y197PG&cid=352542972&page=1" allowfullscreen="allowfullscreen" width="600px"
                  height="350" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>
        </el-card>
      </el-col>
    </el-row>
        <p style="line-height: 200%">现如今，互联网发展迅速，涉足人们生活的方方面面。在日常娱乐中，
          人们也习惯于在网络上了解最新新闻。所以各类新闻app相应出现。伴着app的产生，每日新闻api横空出世。有了每日新闻api的帮助，人
          们获取新闻变得更加便利。那究竟什么是每日新闻api呢?别着急，小编带你看一看!
          其实每日新闻api就是一个接口，将程序与这个接口链接上，就可以让运行商通过这个接口向你发送数据。这个接口能实现获取分类新闻列表和新闻详情。
          像热搜、头条、推荐新闻这些都可以做到;同时还分各种板块，国内，娱乐，体育，军事，科技，财经，时尚等新闻信息，分门别类，清晰明了，点开就可以查看详情。
          这对于新闻的分类筛选非常有帮助。
          那具体还给予哪些功能呢?我们一起来看一看。
          首先是实时新闻。api给予每时每刻的新闻事件、快速提供新闻资讯;这对需要掌握实时热点的人非常重要，越新越快拿到新闻，就能越快发表
          其次是新闻精选。捕捉新闻要点，预判新闻价值，提供重要及突发事件信息;这对新闻工作者总结归纳很有帮助。
          接着是热门新闻。分析海量新闻的阅读及传播数据，实时捕捉网民最关注话题;可以及时掌握网络流行爆点的新</p>
  </el-row>
</template>

<script>
export default {
  name: "activity"
}
</script>

<style scoped>
p{
  font-family: "Helvetica Neue",
  Helvetica,"PingFang SC",
  "Hiragino Sans GB",
  "Microsoft YaHei",
  "微软雅黑",
  Arial,sans-serif;
}
</style>
