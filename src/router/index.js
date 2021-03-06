import Vue from "vue";
import VueRouter from "vue-router";
// import Helpers from "../helpers/Helper.js";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    beforeEnter: (to, from, next) => {
      // ...
      console.log("token", Vue.localStorage.get("token"));
      if (Vue.localStorage.get("token")) {
        console.log("get");
        next();
      } else {
        console.log("not");

        next({ name: "LoginPage" });
      }
    },
    component: () => import("../views/Dashboard.vue"),
    meta: { parent: "Dashboard"},
    children: [
      {
        path: "/inviteuser",
        name: "InviteUser",
        component: () =>
          import("../views/InviteUserPage.vue"),
          meta: { parent: "Dashboard"}
      },
      {
        path: "/products",
        name: "Products",
        component: () => import("../views/pages/products/Products.vue"),
        meta: { parent: "Dashboard"}
      }, 
      {
        path: "/venders",
        name: "Vendor",
        component: () => import("../views/pages/venders/Venders.vue"),
        meta: { parent: "Dashboard"}
      }, 
      {
        path: "/customers",
        name: "Customer",
        component: () => import("../views/pages/customers/Customers.vue"),
        children: [],
        meta: { parent: "Dashboard"}
      },
    ],
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/signup/:token?",
    name: "SignUpPage",
    component: () => import("../views/SignUpPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// function isNotLogedin(){
//   if (this.$localStorage.get("token")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log("isNotLogedin", isNotLogedin);

// router.beforeEach((to, from, next) => {
//   if (to.name !== "LoginPage" && isNotLogedin) next({ name: "LoginPage" });
//   else next();
// });

export default router;
