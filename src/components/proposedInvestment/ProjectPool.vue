<template>
  <el-row :span=22>
    <el-col v-for="(pageDatas,index) in pageData" :key="index" :span=10 :offset=1>
      <el-card class="box-card"  shadow="hover" style="margin-top: 10px;height: 200px">
        <div style="width: 100%;height:30%;min-width:500px">
          <div class="box">
            <img :src=pageDatas.imgsrc class="image">
            <div class="box_top">
              <p>猿辅导1</p>
              <p>猿辅导2</p>
            </div>
            <div class="box_But">
              <p>猿辅导3</p>
              <p>猿辅导4</p>
            </div>
          </div>
          <div class="loding">
            <span style="position: relative;left: -50%;top: 33%;font-size: 17px">融资进度条</span>
            <el-progress style="width: 67%;float: right;margin-top: -30px;margin-right: 9%" :percentage="percentage" :color="customColor" :stroke-width=10 :width=200></el-progress>
          </div>
          <!--        <p>{{pageDatas.title}}</p>-->
        </div>
      </el-card>

    </el-col>
    <el-row :span=6 style="margin-top: 100px;float: right;margin-right: 12%">
      <el-col>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="6"
            :pager-count="11"
            layout="prev, pager, next"
            :total=pageTotal>
        </el-pagination>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
import axios from "axios";

export default {
  name: "ProjectPool",
  data() {
    return {
      //进度条
      percentage: 20,
      customColor: '#409eff',
      customColors: [
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#1989fa', percentage: 80},
        {color: '#6f7ad3', percentage: 100}
      ],
      //数据模板
      newData:[],
      pageData:[

      ],
      //分页
      pageTotal:0,
    };
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return '#909399';
      } else if (percentage < 70) {
        return '#e6a23c';
      } else {
        return '#67c23a';
      }
    },
    pagehelper() {
      console.log(this.pageTotal)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.pageData = []
      let a = 0;
      for (let i = (val - 1) * 6; i < (val - 1) * 6 + 6; i++) {
        this.pageData[a] = this.newData[i];
        a++;
      }
      console.log(this.pageData);
    },
    stop() {
      var mo = function (e) {
        e.preventDefault
      }
      document.body.style.overflow = "hidden"
      document.addEventListener("touchmove", mo, false)
    }
  },
  beforeUpdate() {

    if (this.pageData.length == 0) {
      let a = 0;
      for (let i = 0; i < 6; i++) {
        this.pageData[a] = this.newData[i];
        a++;
      }
    }
  },
  created() {
    axios.get("/api/nc/article/headline/T1348647853363/0-40.html").then(res => {
      if (res.data) {
        this.newData = res.data.T1348647853363
        this.pageTotal = this.newData.length
      }
      console.log(this.newData)
    })
    location.reload();
  },
  updated() {
    stop()
  }
}
</script>

<style scoped>
.loding{
  /*float: left;*/
  height:180px;
}
.loding p{
  /*float: left;*/
  /*line-height: 330%;*/
  /*margin-right: 30px;*/
}

 .col{
float: left;
 }
 .image {
   width: 130px;
   height: 90px;
   display: block;
   float: left;
   margin: 9px 9px 9px 9px;
   border-radius: 6px;
 }
 .box_top{
   float: left;
 }
 .box_But{
   float: right;
 }
.box_top p{
  line-height: 330%;
  margin-left: 30px;
}
 .box_But p{
   line-height: 330%;
   margin-right: 30px;
 }
</style>
