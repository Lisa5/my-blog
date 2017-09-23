<template>
  <div class="logon-container">
    <el-row type="flex" class="row-bg">
      <el-col :span="6" :offset="14" class="logon-box">
        <div class="logon-title">
          <label>登录</label>
          <div class="triangle"></div>
        </div>
        <div>A day is a miniature of eternity.</div>
        <el-form :model="formUser" :rules="rules" ref="formUser" class="logon-form">
          <el-form-item prop="username">
            <el-input v-model="formUser.username" placeholder="用户名">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="formUser.password" placeholder="密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="logon()" class="logon-btn" >登录</el-button>
          </el-form-item>
        </el-form> 
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {httpPost} from '../../common/util/http-utils'
  // import Utils from '../../common/util/utils'
  export default {
    data () {
      return {
        formUser: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      logon () {
        this.$refs.formUser.validate((valid) => {
          if (valid) {
            let user = {
              username: this.formUser.username
            }
            this.$store.commit('logon', user)
            this.doLogon()
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      doLogon () {
        let params = {
          'username': this.formUser.username,
          'password': this.formUser.password
        }
        httpPost('', '/user/login', params).then((data) => {
          console.log(data)
          this.$router.push({path: '/blog/write-blog'})
        }, (error) => {
          this.$message.error(error)
        })
      }
    }
  }
</script>

<style>
  .logon-container {
    background-image: url('../../assets/images/blog-bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width:100%;
    height: 100%;
    min-height: 700px;
    /* display: flex; */
  }
  .logon-box{
    border: 1px solid #efefef;
    padding: 30px;
    width: 350px;
    border-radius: 4px;
    margin-top: 30px;
    background: #ffffff;
  }
  .logon-title {
    position: absolute;
    background-color: #324157;
    padding:10px;
    padding-left: 60px;
    text-align: left;
    color: #ffffff;
    margin-right: 30px;
    margin-left: -30px;
    margin:40px 30px 30px -60px;
    width: 270px;

  }
  .logon-title .triangle{
    position: absolute;
    width: 30px;
    height: 75px;
    background-color: #324157;
    shape-outside: polygon(100px 0px,100px 100px,0px 0px);
    -webkit-clip-path: polygon(100px 0px,100px 100px,0px 0px);
    top: 42px;
    left: 0px;

  }
  .logon-form {
    margin-top:100px;
  }
  .logon-btn{
    background-color: #324157 !important;
    border: 1px solid #324157 !important;
  }
  .logon-btn:hover{
    background-color: #ffffff !important;
    border: 1px solid #324157 !important;
    color:#324157;
  }
  .logon-btn::after{
    background-color: #ffffff !important;
    border: 1px solid #324157 !important;
    color:#324157;
  }
  .logon-btn:active{
    background-color: #ffffff !important;
    border: 1px solid #324157 !important;
    color:#324157;
  }
</style>