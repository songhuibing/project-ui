<template>
  <div class="header">
    <div class="leftInfo">
        <i class="el-icon-menu"></i>
        <span class="title">盒子管理系统</span>
    </div>
    <div class="rightInfo">
        <el-tooltip content="Bottom center" placement="bottom">
            <div slot="content">有{{unReadInfo}}条未读信息</div>
        <el-badge is-dot class="item infoTips"><i class="el-icon-bell"></i></el-badge>
        </el-tooltip>
         <span class="userImg"><img src="../assets/infoImg.jpg" alt=""></span>
         <el-dropdown trigger='click' size="medium">
            <span class="el-dropdown-link">
                {{userName}}<i class="el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item divided>返回首页</el-dropdown-item>
                <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            userName:'admin',
            unReadInfo:3
        }
    },
}
</script>
<style lang="less" scope>
.header{
    background: #242f42;
    color: #fff;
    display: flex;
    height: 70px;
    line-height: 70px;
    padding: 0 20px;
    justify-content: space-between;
    .leftInfo{
        font-size: 22px;
        font-weight: bold;
        .title{
             padding-left: 10px;
        }
    }
    .rightInfo{
        display: flex;
        align-items: center;
        .infoTips{
            cursor: pointer;
            height: 30px;
            line-height: 30px;
            font-size: 20px;
        }
        /deep/.el-dropdown{
            height: 20px;
            line-height: 20px;
        }
    }
}
.userImg{
    height: 30px;
   line-height: 30px;
    img{
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
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
