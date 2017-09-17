/**
 * Created by Lisa on 2017/9/17.
 */
export const routes = {
  pre: 'logon',
  path: 'logon',
  list: [
    {
      name: 'logon',
      path: '',
      component: (resolve) => require(['./views/logon'], resolve)
    }
  ]
}
