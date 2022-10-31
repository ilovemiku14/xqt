<template>
<div class="login">
  <div class="logins">
    <el-form  :model="ruleForm" status-icon :rules="rules" :ref="ruleForm" label-width="100px" class="demo-ruleForm" v-if="islogin==false">
      <el-form-item label="用户名" prop="userName">
        <el-input type="password" v-model="ruleForm.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="restPassword" autocomplete="off">
        <el-input v-model="ruleForm.restPassword"></el-input>
      </el-form-item>
      <el-form-item label="融资/投资者" prop="role">
        <el-radio-group v-model="ruleForm.role">
          <el-radio label="1"></el-radio>
          <el-radio label="2"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置信息</el-button>
      </el-form-item>
    </el-form>
  </div>
  <el-form :rules="rules" class="logins" v-if="islogin">
    <h2>系统登录</h2>
    <el-input style="margin-top: 20px;max-width: 400px" minlength="3" maxlength="8" v-model="userInput" placeholder="请输入用户名.字数超过2但不大于4    *2"></el-input>
    <br>
    <el-input style="margin-top: 15px;max-width: 400px" maxlength="20" placeholder="请输入密码" v-model="passwordInput" show-password></el-input>
    <br>
<!--    <el-input style="margin-top: 20px;max-width: 280px" v-model="VerificationCode" placeholder="请输入验证码"></el-input>-->
<!--    <div class="img">-->
<!--      <img :src="CaptchaUrl" @click="Captcha()" title="你他喵不会点击刷新哦！">-->
<!--    </div>-->
    <br> <br>
    <el-checkbox v-model="checked" label="ture">记住我</el-checkbox>
    <br>
    <el-button style="margin-top: 15px;width: 400px" @click="addUser" type="success" round>登录</el-button>
    <br>
    <el-button style="margin-top: 15px;width: 400px" type="success" @click="islogin=false" round >注册</el-button>
  </el-form>
</div>
</template>

<script>
//import axios from "axios";

import axios from "axios";

export default {
  data(){
    var checkAge = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else if (value.length == 0){
        callback(new Error('不能为空!'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      setTimeout(() => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm.password !== '') {
            // this.$refs.ruleForm.validateField('password');
          }
          callback();
        }
      }, 1000);
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }
    };
    return {
      islogin:true,
      CaptchaUrl:'http://localhost:8090/Captcha?time='+new Date(),
      userInput: '',
      passwordInput: '',
      VerificationCode:'',
      checked:true,
      ruleForm: {
        userName: '',
        password: '',
        restPassword: '',
        resource:1,
        role:0
      },
      rules: {
        userName: [
          { validator: validatePass, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        restPassword: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    submitForm(formName) {
      console.log(formName)
      if (this.ruleForm.password=='' || this.ruleForm.restPassword=='' || this.ruleForm.userName==''){
        this.$message.error('请按要求填写哦');
        return
      }
      if (this.ruleForm.role=='2'){
        this.ruleForm.role='0'
      }
      // let userMSG={
      //     "userName": this.ruleForm.userName,
      //     "password": this.ruleForm.password,
      //     "name": this.ruleForm.userName,
      //     "role":this.ruleForm.role
      //     // "role":parseInt(this.ruleForm.role)
      // }
      const data = new FormData();
      data.append("userName", this.ruleForm.userName);
      data.append("password", this.ruleForm.password);
      data.append("name", this.ruleForm.userName);
      data.append("role", this.ruleForm.role);

      // console.log(userMSG.role)
      axios.post("/xqts/register",data).then(res=>{
        if (res.data.code==200){
          this.$message({
            message: '注册成功！跳转登录',
            type: 'success'
          });
          this.islogin=true
        }else {
          this.$message.error('注册失败!   '+res.data.message);
        }
      })
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert('submit!');
      //   } else {
      //     console.log('error submit!!');
      //     return false;
      //   }
      // });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    Captcha(){
      this.CaptchaUrl='http://localhost:8090/Captcha?time='+new Date()
    },

    addUser(){
      // this.$router.push({
      //   path: '/main'
      // })
      this.$router
      // if (this.userInput.length<3){
      //   this.$message.error('你他喵的不看提示🐎');
      // }else {
        axios.post("/xqts/login",{
          userName:this.userInput,
          password:this.passwordInput,
        }).then(res=>{
          if (res.data.code==200){
            this.$message({
              message: '登录成功！跳转中~',
              type: 'success'
            });
            window.sessionStorage.setItem("name",res.data.data.name)
            window.sessionStorage.setItem("userName",res.data.data.userName)
            window.sessionStorage.setItem("role",res.data.data.role)
            window.sessionStorage.setItem("tmoney",res.data.data.tmoney)
            window.sessionStorage.setItem("imageUrl",res.data.data.image)
              this.$router.push({
              path: '/main'
            })
            // location.reload()
          }else {
            this.$message.error('登录失败!   '+res.data.message);
          }
        })
      // }
    }
  }
};
</script>

<style scoped>

.logins {
  margin-top: 100px;
  min-width: 400px;
  float: left;
  margin-left: 37%;
}
.logins h2 {
  text-align: center;
}
.img{
  margin-left: 20px;
  float: right;
  margin-top: 20px;
}
</style>
