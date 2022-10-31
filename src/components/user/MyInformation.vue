<template>
  <el-row :span=24 style="min-width: 1000px">
   <el-row>
     <el-col :offset=1 :span=5>
       <el-card shadow="hover" style="min-width: 280px">
             <img class="userImg" :src="this.userImage"
                  style="width: 30%;height: 90px;;min-width:30%;border-radius: 50%;position: relative;left: -10%;top: 30px;">
             <span style=";position: relative;top: -52px;font-size: 25px;left: 50px" >{{userName}}</span>
             <span style=";position: relative;top: 20px;right: 20px">身份: {{userRole}}</span>
       </el-card>

     </el-col>
     <el-col :offset=1 :span=5 v-if="isAdd" >
       <el-card shadow="hover" style="min-width: 280px">
         <div class="userMsg" style="width: 90%;height: auto;">
           <span style=";position: relative;top: -52px;font-size: 25px;left: 81px">
             {{UserAmount}}
           </span>
           <span style="position: relative;left: 1%;top: 20px">
            我的账号
           </span>
         </div>
       </el-card>
     </el-col>
     <el-col :offset=1 :span=5 v-if="isAdd==false">
       <el-card shadow="hover" style="min-width: 280px">
         <div class="userMsg" style="width: 90%;height: auto;">
           <span style=";position: relative;top: -52px;font-size: 25px;left: 81px">
             {{UserAmount}}
           </span>
           <span style="position: relative;left: 1%;top: 20px">
              已融资金额
           </span>
         </div>
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
             title="项目提交表"
             :visible.sync="submitProject"
             width="50%"
             :before-close="handleClose">
           <el-form style="margin-top: -40px" :model="projectData"  label-width="130px" class="demo-ruleForm">
             <el-form-item label="项目名称" prop="name">
               <el-input v-model="projectData.projectName"></el-input>
             </el-form-item>
               <el-form-item label="创始人" prop="name">
                 <el-input v-model="projectData.userName"></el-input>
               </el-form-item>
                 <el-form-item label="项目所在地" prop="name">
                   <el-input v-model="projectData.address"></el-input>
                 </el-form-item>
                   <el-form-item label="资金用途" prop="name">
                     <el-input v-model="projectData.useOffunds"></el-input>
                   </el-form-item>
                     <el-form-item label="主营业务" prop="name">
                       <el-input v-model="projectData.mainBusiness"></el-input>
                     </el-form-item>
                       <el-form-item label="所在行业" prop="name">
                         <el-input v-model="projectData.Industry"></el-input>
                       </el-form-item>
                         <el-form-item label="项目周期" prop="name">
                           <el-input type="textarea" v-model="projectData.month"></el-input>
                         </el-form-item>
                           <el-form-item label="项目亮点" prop="name">
                             <el-input type="textarea"  v-model="projectData.light"></el-input>
                           </el-form-item>
                             <el-form-item label="经营模式" prop="name">
                               <el-input type="textarea" v-model="projectData.model"></el-input>
                             </el-form-item>
                               <el-form-item label="技术和版权保护" prop="name">
                                 <el-input type="textarea" v-model="projectData.technology"></el-input>
                               </el-form-item>
                                 <el-form-item label="发展计划" prop="name">
                                   <el-input type="textarea" v-model="projectData.developmentPlan"></el-input>
                                 </el-form-item>
                                   <el-form-item label="组织架构" prop="name">
                                     <el-input type="textarea" v-model="projectData.organizationalStructure"></el-input>
                                   </el-form-item>
           </el-form>
           <el-upload
               style="margin-top: -40px;"
               class="upload-demo"
               action="/xqts/image/upload"
               :on-change="handleChange"
               :on-success=handProject
               :file-list="fileList">
             <el-button size="small" type="primary" style="">点击上传附件</el-button>
           </el-upload>
           <span slot="footer" class="dialog-footer">
    <el-button @click="submitProject = false">取 消</el-button>
    <el-button type="primary" @click="putProject">确 定</el-button>
  </span>
         </el-dialog>
       </el-card>
     </el-col>
     <el-col :offset=1 :span=5>
       <el-card shadow="hover" style="min-width: 280px">
         <el-button type="text" @click="accountSettings = true">账号设置</el-button>
         <el-dialog
             title="账号设置"
             :visible.sync="accountSettings"
             width="30%"
             :before-close="handleClose">
  <el-form label-position="left" label-width="110px" :model="userMSG" style="margin-top: -60px;margin-left: 20px">
  <el-form-item label="用户名">
    <el-input v-model="userMSG.username" :disabled=true ></el-input>
  </el-form-item>
    <el-form-item label="昵称">
      <el-input v-model="userMSG.name"></el-input>
    </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="userMSG.password"></el-input>
  </el-form-item>
  <el-form-item label="确认密码">
    <el-input v-model="userMSG.restpassword"></el-input>
  </el-form-item>
    <el-form-item label="上传头像">
      <el-upload
          class="avatar-uploader"
          action="/xqts/image/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
        <img v-if="userMSG.image" :src="userMSG.image" class="avatar" >
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
</el-form>
    <el-button @click="accountSettings = false">取 消</el-button>
    <el-button type="primary" @click="updataUserMSG">确 定</el-button>
<!--           accountSettings = false-->
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
import axios from "axios";

export default {
  name: "MyInformation",
  data() {
    return {
      fileList:[
        // {
        //   name: '',
        //   url: ''
        // },
      ],
      //提交用户更改个人信息的对象
      userMSG:{
        username:'',
        password:'',
        restpassword:'',
        image: '',
        name:''
      },
      //提交项目的内容
      projectData:{
        projectName: "", //项目名称
        userName: "", //创始人
        address: "", //项目所在地
        useOffunds: "", //资金用途
        mainBusiness: "", //主营业务
        Industry: "", //所在行业
        month: "", //项目周期
        light: "", //项目亮点
        model: "", //经营模式
        technology: "", //技术和版权保护
        developmentPlan: "", //发展计划
        organizationalStructure: "",//组织架构
        URL:"",//附件链接
        // urlName:""//附件名称
      },
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',


      //账号提交内容
      isAdd:true,//true是投资人的页面
      userName:'acfun',//用户名唯一
      userRole:'投资人',//用户鉴权
      UserAmount:0,//金钱
      userImage:'',//头像链接
      name: '',//昵称

      //投资表
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
    handProject(res, file) {
      this.projectData.URL=file.response.URL
    },
    //上传钩子（项目附件相关）
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
      // this.projectData.URL=file.response.URL
    },
    //上传项目
    putProject(){
      console.log(this.projectData.URL)
      axios.post("/xqts/registerProject",this.projectData).then(res=>{
        if (res.data.code==200){
          this.$message('提交成功！等待审批');
          this.submitProject=false,
          console.log(res.data)
        }else {
          this.$message({
            message: '提交失败！检测提交数据',
            type: 'warning'
          });
        }
      })
    },
    updataUserMSG(){
      // console.log(this.userMSG)
      let userMSGS={
        "userName": this.userMSG.username, //用户名【必填】
        "newPassword": this.userMSG.password, //新密码
        "newName": this.userMSG.name, //新名称
        "image": this.userMSG.image, //图片地址
      }
      axios.post("/xqts/updateUser",userMSGS).then(res=>{
        if (res){
          console.log(res.data)
          this.submitProject=false
        }
      })
      this.accountSettings = false
    },
    //上传头像
    handleAvatarSuccess(res, file) {
      this.userMSG.image =file.response.URL;
    },
    //上传头像
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
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
    let userName = window.sessionStorage.getItem("userName");
    let role = window.sessionStorage.getItem("role");
    let tmoney = window.sessionStorage.getItem("tmoney");
    this.userName=userName;
    this.name=name;
    this.isAdd=role==1?true:false;
    this.userName=userName
    this.userMSG.username=userName
    this.UserAmount=tmoney
    this.userRole=role==1?'投资人':'融资人'
    this.userImage=window.sessionStorage.getItem("imageUrl");
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
