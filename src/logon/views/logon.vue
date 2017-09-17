<template>
  <div>
    <el-row type="flex" class="row-bg">
      <el-col :span="6" :offset="14" class="logon-box">
        <label>  登录 </label>
        <el-form :model="formUser" :rules="rules" ref="formUser">
          <el-form-item prop="username">
            <el-input v-model="formUser.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="formUser.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="logon('form')">登录</el-button>
          </el-form-item>
        </el-form> 
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
            this.$router.push({path: '/blog/write-blog'})
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style>
  .logon-box{
    border: 1px solid #efefef;
    padding: 30px;
    min-width: 350px;
    border-radius: 4px;
  }
</style>