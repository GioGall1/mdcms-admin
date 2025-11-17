import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import Dashboard from '@/views/Dashboard.vue';

import OrdersNew from '@/views/OrdersNew.vue';
import OrdersInProgress from '@/views/OrdersInProgress.vue';
import OrdersCompleted from '@/views/OrdersCompleted.vue';
import OrdersCanceled from '@/views/OrdersCanceled.vue';
import OrdersAll from '@/views/OrdersAll.vue';
import OrdersDelete from '@/views/OrdersDelete.vue';

import ListProducts from '@/views/ListProducts.vue';
import ListProductProperties from '@/views/ListProductProperties.vue';
import ListMarketingSubscriptions from '@/views/ListMarketingSubscriptions.vue';
import ListDiscountCoupons from '@/views/ListDiscountCoupons.vue';
import ListGiftOrdering from '@/views/ListGiftOrdering.vue';
import ListUsersBuyers from '@/views/ListUsersBuyers.vue';
import ListBrends from '@/views/ListBrends.vue';
import ListCategory from '@/views/ListCategory.vue';
import ListPost from '@/views/ListPost.vue';
import ListTags from '@/views/ListTags.vue';
import ListTicker from '@/views/ListTicker.vue';
import ListSlider from '@/views/ListSlider.vue';

import AddCategory from '@/views/AddCategory.vue';
import AddPost from '@/views/AddPost.vue';
import AddBrend from '@/views/AddBrend.vue';
import AddProduct from '@/views/AddProduct.vue';
import AddTag from '@/views/AddTag.vue';

import Profile from '@/views/Profile.vue';
import Security from '@/views/Security.vue';
import Reports from '@/views/Reports.vue';
import FileManager from '@/views/FileManager.vue';
import CustomOptions from '@/views/CustomOptions.vue';

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'orders-management/new-orders',
        component: OrdersNew,
      },
      {
        path: 'orders-management/in-progress-orders',
        component: OrdersInProgress,
      },
      {
        path: 'orders-management/completed-orders',
        component: OrdersCompleted,
      },
      {
        path: 'orders-management/canceled-orders',
        component: OrdersCanceled,
      },
      {
        path: 'orders-management/delete-orders',
        component: OrdersDelete,
      },
      {
        path: 'orders-management/all-orders',
        component: OrdersAll,
      },
      {
        path: 'products/products-list',
        component: ListProducts,
      },
      {
        path: 'products/product-properties',
        component: ListProductProperties,
      },
      {
        path: 'buers',
        component: ListUsersBuyers,
      },
      {
        path: 'marketing/marketing-subscriptions',
        component: ListMarketingSubscriptions,
      },
      {
        path: 'marketing/discount-coupons',
        component: ListDiscountCoupons,
      },
      {
        path: 'marketing/gift-ordering',
        component: ListGiftOrdering,
      },
      {
        path: 'brends/list-brends',
        component: ListBrends,
      },
      {
        path: 'categories/list-categories',
        component: ListCategory,
      },
      {
        path: 'blog/post-list',
        component: ListPost,
      },
      {
        path: '/ticker',
        component: ListTicker,
      },
      {
        path: '/slider',
        component: ListSlider,
      },
      {
        path: 'tags/tags-list',
        component: ListTags,
      },
      {
        path: 'products/add-product',
        component: AddProduct,
      },
      {
        path: 'brends/add-brend',
        component: AddBrend,
      },
      {
        path: 'categories/add-category',
        component: AddCategory,
      },
 
      {
        path: 'blog/add-post',
        component: AddPost,
      },
      {
        path: 'tags/add-tag',
        component: AddTag,
      },
      {
        path: '/file-manager',
        name: 'FileManager',
        component: FileManager,
      },
      {
        path: '/settings',
        component: CustomOptions,
      },
      {
        path: 'settings/profile',
        component: Profile,
      },
      {
        path: 'settings/security',
        component: Security,
      },
      {
        path: 'reports',
        component: Reports,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
