<template>
  <div class="login">
    <div class="bgImg">
      <div class="loginInfo">
        <div class="infoTitle">后台管理系统</div>
        <div class="infoDetail">
          <el-form :model="formLabelAlign">
            <el-form-item>
              <el-input placeholder="请输入账号"
                        clearable
                        v-model="formLabelAlign.account">
                <template slot="prepend"><i class="el-icon-user"></i></template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请输入账号"
                        show-password
                        v-model="formLabelAlign.passWard">
                <template slot="prepend"><i class="el-icon-lock"></i></template>
              </el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary"
                     style="width:100%"
                     @click="loginBtn">登录</el-button>
          <div class="tips">
            Tips:用户名密码随便填。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formLabelAlign: {
        account: '',
        passWard: '',
      },
    }
  },
  methods: {
    loginBtn() {},
  },
}
</script>
<style lang="less" scope>
.login {
  height: 100%;
  .bgImg {
    height: 100%;
    background: url('../assets/bj.png') no-repeat;
    background-size: 100% 100%;
    .loginInfo {
      position: relative;
      display: inline-block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 300px;
      background: #ccc;
      opacity: 0.6;
      border-radius: 4px;
      .infoTitle {
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        border-bottom: 1px solid black;
        text-align: center;
        margin-bottom: 20px;
      }
      .infoDetail {
        padding: 0 20px;
      }
      .tips {
        color: #fff;
        padding-top: 15px;
      }
    }
  }
}
</style>