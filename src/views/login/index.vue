<template>
  <div class="container">
    <!-- 卡片 ElementUI的组件 -->
    <el-card class="my-card">
      <img src="../../assets/images/logo_index.png" alt />
      <el-form :model="loginForm" :rules="loginRules">
        <el-form-item prop='mobile'>
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:236px;margin-right:10px">
          </el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
            <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-button type="primary" style="width:100%">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表单数据对象
      loginForm: {
        mobile: '',
        code: ''
      },
      // 表单校验规则对象
      loginRules: {
        // 给字段加校验规则(多个)
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码长度是6位', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .my-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  img {
    width: 200px;
    display: block;
    margin: 0 auto 20px;
  }
}
</style>
