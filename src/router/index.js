
import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/TreeDataType'
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      // {
      //   path:'',
      //   redirect:'/users'
      // },  
      {
        path: '/TreeDataType',
        name: 'TreeDataType',
        component: () => import('../components/TreeDataType.vue'),
        meta: {
          title: '用户列表',
          keepAlive: true
        }
      },
      {
        path: '/dataRenderTwo',
        name: 'dataRenderTwo',
        component: () => import('../components/dataRenderTwo.vue'),
        meta: {
          title: '数据渲染二',
          keepAlive: true
        }
      },
      {
        path: '/dataRenderOne',
        name: 'dataRenderOne',
        component: () => import('../components/dataRenderOne.vue'),
        meta: {
          title: '数据渲染一',
          keepAlive: true
        }
      },

      {
        path: '/userGroup',
        name: 'userGroup',
        component: () => import('../components/userGroup.vue'),
        meta: {
          title: '用户组',
          keepAlive: true
        }
      },
      {
        path: '/roleGroup',
        name: 'roleGroup',
        component: () => import('../components/roleGroup.vue'),
        meta: {
          title: '角色组',
          keepAlive: true
        }
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import('../components/roles.vue'),
        meta: {
          title: '角色列表',
          keepAlive: true
        }
      },
      {
        path: '/powersetting',
        name: 'powersetting',
        component: () => import('../components/powersetting.vue'),
        meta: {
          title: '权限管理',
          keepAlive: false
        }
      },
      {
        path: '/device-grop',
        name: 'device-grop',
        component: () => import('../components/deviceGrop.vue'),
        meta: {
          title: '权限管理',
          keepAlive: false
        }
      },
      {
        path: '/login-log',
        name: 'login-log',
        component: () => import('../components/loginLog.vue'),
        meta: {
          title: '权限管理',
          keepAlive: false
        }
      },

      //
      {
        path: '/opts-log',
        name: 'opts-log',
        component: () => import('../components/optsLog.vue'),
        meta: {
          title: '权限管理',
          keepAlive: false
        }
      },
      {
        path: '/alarms',
        name: 'alarms',
        component: () => import('../components/alarms.vue'),
        meta: {
          title: '权限管理',
          keepAlive: false
        }
      },

      //device-list  
      {
        path: '/device-list',
        name: 'device-list',
        component: () => import('../components/deviceList.vue'),
        meta: {
          title: '权限管理',
          keepAlive: false
        }
      },
      //
      {
        path: '/device-app',
        name: 'device-list',
        component: () => import('../components/deviceApp.vue'),
        meta: {
          title: '权限管理',
          keepAlive: false
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/Header',
    name: 'Header',
    component: () => import(/* webpackChunkName: "about" */ '../views/Header.vue')
  }
]

const router = new VueRouter({
  routes
})


// router.beforeEach((to, from, next) => {
//   /* 来做点事情 */
//   /* 根据用户的token是否存在做判断 */
//   if(store.state.name) {
//       /* 如果token存在的话,也就是用户保持登陆状态的话,那跳登陆页面的都给我跳主页 */
//       if(to.path === 'login') {
//           next({path: '/'})
//       } else {
//           /* 如果不是的话，那就做你需要做的事情啦，例如 获取每一个页面的权限城市 */
//           next()
//       }
//   }else{
//     next()
//   }
// })

export default router
