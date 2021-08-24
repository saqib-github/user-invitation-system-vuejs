import Vue from "vue";
import VueRouter from "vue-router";
// import Helpers from "../helpers/Helper.js";
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'App',
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
    component: () => import ("../views/InviteUserPage.vue"),
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
  {
    path: "/inviteuser",

    name: "InviteUser",
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InviteUserPage.vue"),
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
