/**
 * Created by Lisa on 2017/8/6.
 */
export const routes = {
  pre: 'blog',
  path: 'blog',
  list: [
    {
      name: 'blog-list',
      path: 'blog-list',
      component: (resolve) => require(['./views/blog-list'], resolve)
    },
    {
      name: 'about-me',
      path: 'about-me',
      component: (resolve) => require(['./views/about-me'], resolve)
    }
  ]
}
