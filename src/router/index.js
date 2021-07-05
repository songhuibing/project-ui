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
          title: '用户列表'
        }
      },
      {
        path: '/dataRenderTwo',
        name: 'dataRenderTwo',
        component: () => import('../components/dataRenderTwo.vue'),
        meta: {
          title: '数据渲染二'
        }
      },
      {
        path: '/dataRenderOne',
        name: 'dataRenderOne',
        component: () => import('../components/dataRenderOne.vue'),
        meta: {
          title: '数据渲染一'
        }
      },

      {
        path: '/userGroup',
        name: 'userGroup',
        component: () => import('../components/userGroup.vue'),
        meta: {
          title: '用户组'
        }
      },
      {
        path: '/roleGroup',
        name: 'roleGroup',
        component: () => import('../components/roleGroup.vue'),
        meta: {
          title: '角色组'
        }
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import('../components/roles.vue'),
        meta: {
          title: '角色列表'
        }
      },
      {
        path: '/powersetting',
        name: 'powersetting',
        component: () => import('../components/powersetting.vue'),
        meta: {
          title: '权限管理'
        }
      },
      {
        path: '/device-grop',
        name: 'device-grop',
        component: () => import('../components/deviceGrop.vue'),
        meta: {
          title: '权限管理'
        }
      },
      {
        path: '/alarms',
        name: 'alarms',
        component: () => import('../components/alarms.vue'),
        meta: {
          title: '权限管理'
        }
      }

      //powersetting  alarms
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
