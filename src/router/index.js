/*
 * @Author: bruce yu
 * @Date: 2021-01-03 19:37:33
 * @LastEditTime: 2021-02-21 21:25:27
 * @LastEditors: Please set LastEditors
 * @Description: router config
 * @FilePath: /data-visualize/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/screenpage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ScreenPage.vue")
  },
  {
    path: '/electronicpage',
    component: () =>
      import('../views/ElectronicPage.vue')
  },
  {
    path: '/constructionpage',
    component: () =>
      import('../views/ConstructionPage.vue')
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
  },
  {
    path: "/mappage",
    name: "MapPage",
    component: () => import('../views/MapPage')
  },
  {
    path: "/rankpage",
    name: "RankPage",
    component: () => import('../views/RankPage')
  },
  {
    path: "/hotpage",
    name: "HotPage",
    component: () => import('../views/HotPage')
  },
  {
    path: "/stockpage",
    name: "StockPage",
    component: () => import('../views/StockPage')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
