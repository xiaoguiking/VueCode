import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Cart from '@/pages/Cart'
// admin components
// import Admin from '@/pages/Admin'
import Index from '@/pages/admin/Index'
import Edit from '@/pages/admin/Edit'
import New from '@/pages/admin/New'
import Products from '@/pages/admin/Products'

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
