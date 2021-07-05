<template>
  <div class="sideBar">
    <el-menu
      @select="selectMenu"
      :default-active="currentIndexLight"
      class="el-menu-vertical-demo menustyle"
      @open="handleOpen"
      :collapse="isCollapse"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      :router="startRouter"
      active-text-color="#ffd04b"
    >
      <sidebar-item
        v-for="menu in menuList"
        :key="menu.path"
        :isCollapse="isCollapse"
        :item="menu"
      />
    </el-menu>
  </div>
</template>
<script>
import sidebarItem from './sideBarItem'
import { mapState } from 'vuex'
export default {
  components: {
    sidebarItem,
  },
  computed: {
    ...mapState(['isCollapse']),
  },
  data() {
    return {
      startRouter: true,
      currentIndexLight: this.$route.path,
      menuList: [
        {
          path: '/awaitdoing', //菜单项所对应的路由路径
          title: '用户信息', //菜单项名称
          children: [
            {
              path: '/awaitdo',
              title: '用户管理',
              children: [
                {
                  path: '/TreeDataType',
                  title: 'Tree数据转换',
                  children: [],
                },
                {
                  path: '/userGroup',
                  title: 'DataV应用',
                  children: [],
                },
                {
                  path: '/dataRenderTwo',
                  title: '十万数据一',
                  children: [],
                },
                {
                  path: '/dataRenderOne',
                  title: '十万数据二',
                  children: [],
                },
              ],
            },
            {
              path: '/roles-wrap',
              title: '角色管理',
              children: [
                {
                  path: '/roles',
                  title: 'Tableau应用',
                  children: [],
                },
                {
                  path: '/roleGroup',
                  title: '表格合并',
                  children: [],
                },
              ],
            },
            {
              path: '/powersetting',
              title: 'JSmind应用',
              children: [],
            },
          ],
        },
        {
          path: '/quickset',
          title: '系统管理',
          children: [
            {
              path: '/alarms',
              title: '可视化仪表盘',
              children: [],
            },
            {
              path: '/log',
              title: '日志管理',
              children: [
                {
                  path: '/login-log',
                  title: '登录日志',
                  children: [],
                },
                {
                  path: '/opts-log',
                  title: '操作日志',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          path: '/device-grop',
          title: '前端数据导出',
          children: [],
        },
        {
          path: '/device-set',
          title: '设备管理',
          children: [
            {
              path: '/device-list',
              title: '设备列表',
              children: [],
            },
            {
              path: '/device-app',
              title: '设备应用',
              children: [],
            },
          ],
        },
        {
          path: '/appmanagewrap',
          title: '应用管理',
          children: [],
        },
        {
          path: '/appmanage',
          title: '盒子管理',
          children: [
            {
              path: '/boxmanage',
              title: '盒子管理',
              children: [],
            },
            {
              path: '/boxmonitoring',
              title: '盒子监控',
              children: [],
            },
          ],
        },
        {
          path: '/data-analysis',
          title: '数据分析',
          children: [
            {
              path: '/distribution',
              title: '设备分布',
              children: [],
            },
            {
              path: '/event-statis',
              title: '事件统计',
              children: [],
            },
          ],
        },
      ],
    }
  },
  watch: {
    $route(val) {
      this.currentIndexLight = val.fullPath //监听路由  当前选中菜单跟着路由变动
    },
  },
  methods: {
    selectMenu(key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>
<style lang="less" scoped>
.sideBar {
  position: absolute;
  left: 0;
  top: 50px;
  background: #545c64;
  height: calc(100% - 50px);
  .menustyle {
    overflow-y: auto;
    overflow-x: hidden;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
  width: 200px; /**没有宽度折叠时文字隐藏慢 卡顿**/
  height: 100%;
}
/deep/               /**less的深度选择器/deep/  vue普通用>>>**/
  .el-menu--collapse
  div
  .el-submenu
  .el-submenu__title
  .el-submenu__icon-arrow {
  display: none;
}
</style>