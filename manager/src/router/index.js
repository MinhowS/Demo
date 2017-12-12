import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login'
import home from '@/components/home'
import notFound from '@/components/notFound'
import menuTab from '@/components/menu1/menuTab'
import menuTable from '@/components/menu2/menuTable'

Vue.use(Router)

export default new Router({
  routes: [
   /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
      {
          path: '/login',
          name: 'login',
          component: login,
          hidden:true
      },
      {
          path: '/notFound',
          name: 'notFound',
          component: notFound,
          hidden:true
      },
      {
          path: '/',
          name: '导航一',
          component: home,
          iconCls:'el-icon-message',//图标样式class
          children:[{
            path:'/menutab',
            component:menuTab,
            name:'Tab'
          }]
      },
      {
          path: '/',
          name: '导航二',
          component: home,
          iconCls:'fa fa-id-card-o',//图标样式class
          children:[{
              path:'/menutable',
              component:menuTable,
              name:'Table'
          }]
      }

  ]
})
