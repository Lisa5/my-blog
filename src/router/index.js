import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: resolve => require(['logon/views/logon.vue'], resolve)
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})

export default router
