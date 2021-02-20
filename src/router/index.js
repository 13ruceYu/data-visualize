/*
 * @Author: bruce yu
 * @Date: 2021-01-03 19:37:33
 * @LastEditTime: 2021-02-19 16:07:32
 * @LastEditors: Please set LastEditors
 * @Description: router config
 * @FilePath: /data-visualize/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/sellerpage",
    name: "SellerPage",
    component: () => import('../views/SellerPage')
  },
  {
    path: "/trendpage",
    name: "TrendPage",
    component: () => import('../views/TrendPage')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
