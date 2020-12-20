import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
// admin components
// import Admin from '@/pages/Admin'
import Home from "@/components/Home";
import Cart from "@/views/Cart";
import Index from "@/views/admin/Index";
import Edit from "@/views/admin/Edit";
import New from "@/views/admin/New";
import Details from "@/views/Detail";
import Products from "@/views/admin/Products";
import Manufacturers from "@/views/admin/Manufacturers.vue";
import NewManufacturers from "@/views/admin/NewManufacturers.vue";
import EditManufacturers from "@/views/admin/EditManufacturers";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Details
    },
    {
      path: "/admin",
      name: "Admin",
      component: Index,
      children: [
        {
          path: "new",
          name: "New",
          component: New
        },
        {
          path: "",
          name: "Products",
          component: Products
        },
        {
          path: "edit/:id",
          name: "edit",
          component: Edit
        },
        {
          path: "manufacturers",
          name: "Manufacturers",
          component: Manufacturers
        },
        {
          path: "manufacturers/new",
          name: "NewManufacturers",
          component: NewManufacturers
        },
        {
          path: "manufacturers/edit/:id",
          name: "EditManufacturers",
          component: EditManufacturers
        }
      ]
    }
  ]
});
