<template>
    <div class="log-box">
      <el-card style="width:400px;">
        <div slot="header" class="clearfix">
          <span>系统登录</span>
        </div>
        <el-form :model="user">
          <el-form-item label="账号">
              <el-input v-model="user.username" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码">
              <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="isLoding" @click="doLogin" style="width:100%;">登 录</el-button>
            <router-link to="/index">首页</router-link>
        </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>
<script>
    export default {
    data() {
      return{
        user:{
          username:'',
          password:'',
        },
        isLoding:false,
      }
    },
    methods:{
        doLogin:function(){

            //this.isLoding=true;
            console.log(JSON.stringify(this.user));
        }
    }
  }
</script>
<style scoped>
    .log-box{display: flex;justify-content: center;margin-top: 150px}
</style>>