import type {RouterConfig} from "@nuxt/schema";
import type {RouteRecordRaw} from "vue-router";
import {ROUTES} from "~/types";

export default <RouterConfig>{
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact',
  routes: (_routes) => {
    // console.log("RouterConfig", _routes);
    let customRoutes: RouteRecordRaw[] = [
      {
        name: ROUTES.HOME,
        path: '/',
        component: () => import('~/pages/home.vue'),
      },
      {
        name: ROUTES.REGISTER,
        path: '/register',
        component: () => import('~/pages/auth/register.vue'),
      }
    ]
    // const newRoutes: RouteRecordRaw[] = [];
    // customRoutes.forEach(x => generateLangRoute(x).forEach(r => newRoutes.push(r)));
    return customRoutes;
  }
}