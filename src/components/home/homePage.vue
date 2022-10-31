<template>
<el-row>
  <el-row  style="height: 200px">
    <el-carousel class="carousels" >
      <el-carousel-item v-for="(item, index) in item" :key="index">
        <img v-bind:src='item' width="100%">
      </el-carousel-item>
    </el-carousel>
  </el-row>
  <el-row :span=24>
    <el-col :offset="1" :span=6  v-for="(pageDatas, index) in pageData" :key="index" style="height: 50px;margin-top: 120px" shadow="hover">
      <el-card :body-style="{ padding: '0px'}">
        <img ref="aa" :src='pageDatas.imgsrc' class="image">
        <p style="float: left;line-height:120%;margin-left: 10px;font-size: 16px;width: 140px;padding-bottom: 10px">{{ pageDatas.title }}</p>
        <p style="float: left;line-height:1150%;margin-left: -200px;margin-top: 40px;width: 200px;font-size: 10px">{{ pageDatas.source }}</p>
        <p style="float: right;line-height:1150%;margin-right: 10px;margin-top: 40px;font-size: 10px">{{ pageDatas.ptime }}</p>
      </el-card>
    </el-col>
  </el-row>
  <el-row :span=6 style="margin-top: 100px;float: right;margin-right: 12%">
    <el-col>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="2"
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
  name: "homePage",
  data() {
    return {
      isdd:true,
      newData:[],
      pageData:[

      ],
      pageDataimg:[

      ],
      pageTotal:0,
      currentDate: new Date(),
      item:[
          "https://s1.ax1x.com/2022/10/28/x46oz8.jpg",
          "https://s1.ax1x.com/2022/10/28/x46oz8.jpg",
          "https://s1.ax1x.com/2022/10/28/x46oz8.jpg"
      ]
    };
  },
  // mounted: function() {
  //   if (location.href.indexOf("#reloaded") == -1) {
  //     location.href = location.href + "#reloaded";
  //     location.reload();
  //   }
  // },
  methods:{
    pagehelper(){
      console.log(this.pageTotal)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.pageData=[]
      let a=0;
      for (let i=(val-1)*6;i<(val-1)*6+6;i++){
        this.pageData[a]=this.newData[i];
        a++;
      }
      console.log(this.pageData);
    },
    stop(){
      var mo = function(e){
        e.preventDefault
      }
      document.body.style.overflow = "hidden"
      document.addEventListener("touchmove",mo,false)
    }
  },
  beforeUpdate(){
    if (this.pageData.length==0){
      let a=0;
      for (let i=0;i<6;i++){
        this.pageData[a]=this.newData[i];
        this.pageDataimg[a]=this.newData[i].imgsrc;
        a++;
      }
    }
  },
  created() {
    axios.get("/api/nc/article/headline/T1348647853363/0-40.html").then(res=>{
      if (res.data){
        this.newData=res.data.T1348647853363
        this.pageTotal=this.newData.length
        console.log( this.newData)
      }
    })
  },
  mounted(){
    console.log(11)
  },
  updated() {
    stop()
    if (this.pageData.length==0){
      let a=0;
      for (let i=0;i<6;i++){
        this.pageData[a]=this.newData[i];
        this.pageDataimg[a]=this.newData[i].imgsrc;
        a++;
      }
    }
 }
}
</script>

<style scoped>
/deep/ .el-main[data-v-5c886d6e]{
  line-height: 2px;
}
.carousels{
  width: 50%;
  position: fixed;
  right: 20%;
}
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: right;
}
.image {
  width: 25%;
  display: block;
  float: right;
  margin: 9px 9px 9px 0;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
/deep/.el-card{
  height: 240%;
  min-width: 450px;
}
</style>
