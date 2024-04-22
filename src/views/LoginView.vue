<template>
  <div class="form">
    <div class="title">
      <h1>超级后台登录</h1>
    </div>
    <div>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px" @submit="onSubmit">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>

        <div class="submit-btn">
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from "@/util/request";

export default {
  data(){
    return {
      form:{
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods:{
    onSubmit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          console.log("提交",this.form)
          // 这儿请求登录接口
          this.$store.dispatch('login',this.form).then(() => {
            console.log('登录成功')
          }).catch(err=>{
            console.log("登录失败",err)
          })
        } else {
          console.log('验证有误');
          return false;
        }
      });
    }
  }
}
</script>
<style>
.form{
  width: 400px;
  margin:0 auto;
  padding-top: 100px;
}
.title{
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.submit-btn{
  text-align: center;
}
</style>
