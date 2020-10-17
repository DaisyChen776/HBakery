import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/layout/Layout.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/front/Home.vue'),
      },
      {
        path: '/about',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: '/products',
        component: () => import('../views/front/Products.vue'),
      },
      { // 動態路由
        path: '/product/:id',
        component: () => import('../views/front/Product.vue'),
      },
      {
        path: '/favorite',
        component: () => import('../views/front/Favorite.vue'),
      },
      {
        path: '/cart',
        component: () => import('../views/front/Cart.vue'),
      },
      { // 動態路由
        path: '/order/:id',
        component: () => import('../views/front/Order.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/backend/Dashboard.vue'),
    children: [
      {
        path: '/admin/products',
        component: () => import('../views/backend/Products.vue'),
      },
      {
        path: '/admin/orders',
        component: () => import('../views/backend/Orders.vue'),
      },
      { // 動態路由
        path: '/admin/order/:id',
        component: () => import('../views/backend/Order.vue'),
      },
      {
        path: '/admin/coupons',
        component: () => import('../views/backend/Coupons.vue'),
      },
      {
        path: '/admin/images',
        component: () => import('../views/backend/Images.vue'),
      },
    ],
  },
  // 當使用者輸入不存在的路徑時，會自動導向至指定路徑
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active',
});

export default router;
