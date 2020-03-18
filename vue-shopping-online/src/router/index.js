// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Cart from '@/views/Cart'
// admin components
// import Admin from '@/pages/Admin'
import Index from '@/views/admin/Index'
import Edit from '@/views/admin/Edit'
import New from '@/views/admin/New'
import Products from '@/views/admin/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [{
        path: 'new',
        name: 'New',
        component: New
      },
      {
        path: '',
        name: 'Products',
        component: Products
      },
      {
        path: 'edit/:id',
        name: 'edit',
        component: Edit
      }
      ]
    }
  ]
})
