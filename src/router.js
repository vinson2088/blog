import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerList =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['./views/Home.vue'], resolve)
    },
    {
      path: '/blog',
      name: 'blog',
      component: resolve => require(['./views/blog.vue'], resolve)
    },
    {
      path: '/blogDetail',
      name: 'detail',
      component: resolve => require(['./views/detail.vue'], resolve)
    },
    {
      path: '/edit',
      name: 'edit',
      component: resolve => require(['./views/edit.vue'], resolve)
    }
  ]
})

routerList.beforeEach((to, from, next) => {
  document.querySelector('#app').scrollTop = 0
  next()
})

export default routerList