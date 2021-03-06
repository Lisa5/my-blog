// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'element-ui/lib/theme-default/index.css'
import 'assets/styles/style-common.css'
import 'assets/styles/markdown.css'

import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './router-config'
import store from './store'

import ElementUI from 'element-ui'
Vue.use(ElementUI)

Vue.use(VueResource)
Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'hash',
  routes: routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // if (!auth.loggedIn()) {
    //   next({
    //     path: '/login',
    //     query: { redirect: to.fullPath }
    //   })
    // } else {
    //   next()
    // }
    /**
     * store.state.isLogon 与 store.getters.isLogon 的等价
     */
    // let isLogon = store.state.isLogon
    let isLogon = store.getters.isLogon
    if (isLogon) {
      next()
    } else {
      next('/logon')
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// 使用 router.beforeEach 注册一个全局的 before 钩子

