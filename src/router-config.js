
import {routes as lRouter} from './blog/router'

let subRoutes = []
const registerRoute = (config) => {
  let pre = config.pre
  let path = config.path
  for (let obj of config.list) {
    if (obj.name) {
      obj.name = `${pre}-${obj.name}`
    }
    if (obj.path) {
      obj.path = `${path}/${obj.path}`
    }
    subRoutes.push(obj)
    console.log(subRoutes)
  }
}
registerRoute(lRouter)

let routes = [
  {
    name: 'logon',
    path: '/logon',
    component: (resolve) => require(['./logon/views/logon'], resolve)
  },
  {
    name: 'logon',
    path: '/blog/blog-list',
    component: (resolve) => require(['./blog/views/blog-list'], resolve)
  },
  {
    name: '',
    path: '/',
    component: (resolve) => require(['./blog/views/index'], resolve),
    children: subRoutes
  },
  {
    name: '*',
    path: '/logon'
  }
]
export default routes
