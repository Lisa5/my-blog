
import {routers as lRouter} from './blog/router'

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
  }
  console.log(subRoutes)
}
registerRoute(lRouter)

let routers = [
  {
    name: '',
    path: '/',
    component: (resolve) => require(['./logon/views/logon'], resolve),
    children: subRoutes
  }
]
export default routers
