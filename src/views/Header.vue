<template>
  <div class="header">
    <div class="leftInfo">
      <i class="el-icon-menu Collapse" @click="Collapse"></i>
      <span class="title">盒子管理系统</span>
    </div>
    <div class="rightInfo">
      <i
        :class="screenShow? 'el-icon-rank':'el-icon-full-screen'"
        style="fontSize:18px;margin-right:10px;cursor: pointer;"
        :title="screenShow?'全屏':'退出全屏'"
        @click="FullClick"
      ></i>
      <el-tooltip content="Bottom center" placement="bottom">
        <div slot="content">有{{unReadInfo}}条未读信息</div>
        <el-badge is-dot class="item infoTips">
          <i class="el-icon-bell"></i>
        </el-badge>
      </el-tooltip>
      <span class="userImg">
        <img src="../assets/infoImg.jpg" alt />
      </span>
      <el-dropdown @command="Loginclick" size="medium">
        <span class="el-dropdown-link">
          {{userName}}
          <i class="el-icon-arrow-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item divided command="goHome">返回首页</el-dropdown-item>
          <el-dropdown-item divided command="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import screenfull from 'screenfull'
export default {
  data() {
    return {
      screenShow: true,
      userName: 'admin',
      unReadInfo: 3,
    }
  },

  computed: {
    ...mapState(['isCollapse']),
  },
  methods: {
    Loginclick(command) {
      if (command === 'loginOut') {
        this.$router.push('/login')
      } else {
        if (this.$route.path === '/TreeDataType') return
        this.$router.push('/TreeDataType')
      }
    },
    FullClick() {
      console.log(screenfull)
      // 如果不允许进入全屏，发出不允许提示
      if (!screenfull.isEnabled) {
        this.$message('您的浏览器不能全屏')
        return false
      }
      this.screenShow = !this.screenShow
      screenfull.toggle()
    },
    Collapse() {
      console.log(this.isCollapse)
      this.$store.commit('SetisCollapse', !this.isCollapse)
    },
  },
}
</script>
<style lang="less" scope>
.header {
  background: #242f42;
  color: #fff;
  display: flex;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  justify-content: space-between;
  .leftInfo {
    font-size: 22px;
    font-weight: bold;
    .Collapse {
      cursor: pointer;
    }
    .title {
      padding-left: 10px;
    }
  }
  .rightInfo {
    display: flex;
    align-items: center;
    .infoTips {
      cursor: pointer;
      height: 30px;
      line-height: 30px;
      font-size: 20px;
    }
    /deep/.el-dropdown {
      height: 20px;
      line-height: 20px;
    }
  }
}
.userImg {
  height: 30px;
  line-height: 30px;
  img {
    width: 30px;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
    display: inline-block;
    border-radius: 50%;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
