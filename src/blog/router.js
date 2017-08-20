/**
 * Created by Lisa on 2017/8/6.
 */
export const routers = {
  pre: 'blog',
  path: 'blog',
  list: [
    {
      name: 'blog-list',
      path: 'blog-list',
      component: (resolve) => require(['./views/blog-list'], resolve)
    }
  ]
}
