<template>
  <el-row :span=24 style="min-width: 1000px">
   <el-row>
     <el-col :offset=1 :span=5>
       <el-card shadow="hover" style="min-width: 280px">
             <img class="userImg" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  style="width: 30%;height: auto;min-width:50px;border-radius: 50%;position: relative;left: -10%;top: 30px;">
             <span style=";position: relative;top: -52px;font-size: 25px;left: 50px" >{{userName}}</span>
             <!--           <el-divider content-position="left" style="float: right"> 少年包青天</el-divider>-->
             <span style=";position: relative;top: 20px;right: 20px">身份: {{userRole}}</span>
       </el-card>

     </el-col>
     <el-col :offset=1 :span=5 v-if="isAdd" >
       <el-card shadow="hover" style="min-width: 280px">
         <div class="userMsg" style="width: 90%;height: auto;">
<!--           <img class="userImg" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"-->
<!--                style="width: 30%;height: auto;min-width:50px;border-radius: 50%;position: relative;left: -10%;top: 10px;">-->
           <span style=";position: relative;top: -52px;font-size: 25px;left: 27px">
             {{UserAmount}}
           </span>
           <span style="position: relative;left: -18.5%;top: 20px">
            我的账号
           </span>
         </div>
       </el-card>
     </el-col>
     <el-col :offset=1 :span=5 v-if="isAdd==false">
       <el-card shadow="hover" style="min-width: 280px">
         已融资金额
       </el-card>
     </el-col>
     <el-col :offset=1 :span=5 v-if="isAdd">
       <el-card shadow="hover" style="min-width: 280px">
         咨询项目
       </el-card>
     </el-col>
     <el-col :offset=1 :span=5 v-if="isAdd==false">
       <el-card shadow="hover" style="min-width: 280px">
         <el-button type="text" @click="submitProject = true">提交项目</el-button>
         <el-dialog
             title="提示"
             :visible.sync="submitProject"
             width="30%"
             :before-close="handleClose">
           <span>这是一段信息</span>
           <span slot="footer" class="dialog-footer">
    <el-button @click="submitProject = false">取 消</el-button>
    <el-button type="primary" @click="submitProject = false">确 定</el-button>
  </span>
         </el-dialog>
       </el-card>
     </el-col>
     <el-col :offset=1 :span=5>
       <el-card shadow="hover" style="min-width: 280px">
         <el-button type="text" @click="accountSettings = true">账号设置</el-button>
         <el-dialog
             title="提示"
             :visible.sync="accountSettings"
             width="30%"
             :before-close="handleClose">
           <span slot="footer" class="dialog-footer">
    <el-button @click="accountSettings = false">取 消</el-button>
    <el-button type="primary" @click="accountSettings = false">确 定</el-button>
  </span>
         </el-dialog>
       </el-card>
     </el-col>
   </el-row>
    <el-row style="margin-top: 20px">
      <el-col :offset=1  :span=11 v-if="isAdd">
        <el-card shadow="hover" style="min-width: 280px">
          <el-table
              :data="tableData"
              style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
          </el-table>
        </el-card>

      </el-col>
      <el-col :offset=1 :span=11 v-if="isAdd==false">
        <el-card shadow="hover" style="min-width: 280px">
          <el-table
              :data="tableData1"
              style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :offset=1 :span=11 v-if="isAdd">
        <el-card shadow="hover" style="min-width: 280px">
          鼠标悬浮时显示 input
        </el-card>
        <el-card shadow="hover" style="margin-top: 20px;min-width: 280px">
          鼠标悬浮时显示 input
        </el-card>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: "MyInformation",
  data() {
    return {
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
      //账号提交内容
      isAdd:true,//true是投资人
      userName:'acfun',
      userRole:'投资人',
      UserAmount:0,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      //投资的table
      tableData1: [{
        date: '2016-05-02',
        name: 'ac',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: 'ac',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: 'ac',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: 'ac',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      submitProject: false,
      accountSettings:false
      //投资的table
    };
  },
  methods:{
    onSubmit() {
      console.log('submit!');
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          // eslint-disable-next-line no-unused-vars
          .then(_ => {
            done();
          })
          // eslint-disable-next-line no-unused-vars
          .catch(_ => {});
    }
  },
  created() {
    let name = window.sessionStorage.getItem("name");
    // let userName = window.sessionStorage.getItem("userName");
    let role = window.sessionStorage.getItem("role");
    let tmoney = window.sessionStorage.getItem("tmoney");
    this.userName=name;
    this.isAdd=role==1?true:false;
    this.UserAmount=tmoney
    this.userRole=role==1?'融资人':'投资人'
  }
}
</script>

<style scoped>
/*el-col{*/
/*  background-color: wheat;*/
/*}*/
</style>
