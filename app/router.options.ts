import type {RouterConfig} from '@nuxt/schema'
import type {RouteRecordRaw} from "vue-router";
import {ROUTES} from "~/types";

export default <RouterConfig>{
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact',
  routes: (_routes) => {
    // console.log("RouterConfig", _routes);
    let customRoutes: RouteRecordRaw[] =  [
      {
        name: ROUTES.LOGIN,
        path: '/login',
        component: () => import('~/pages/auth/register.vue'),
      },
      {
        name: ROUTES.HOME,
        path: '/',
        component: () => import('~/pages/home.vue'),
      },
      {
        name: ROUTES.MATERIALS,
        path: '/',
        component: () => import('~/pages/materials/presentations.vue'),
      },
      {
        name: ROUTES.NEWS,
        path: '/news',
        component: () => import('~/pages/news/index.vue'),
      },
    ];
    return customRoutes;
  },
}
