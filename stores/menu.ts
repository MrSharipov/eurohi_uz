import { acceptHMRUpdate, defineStore } from 'pinia'
import {ref} from "#imports";
import {ROUTES} from "~/types";

export const useMenuStore = defineStore('menu', () => {
  const menuItems = ref([
    {
      label: 'Materials',
      items: [
        {
          label: 'Presentations',
          route: {name: ROUTES.MATERIALS}
        },
        {
          label: 'Presentations',
          route: {name: ROUTES.MATERIALS}
        },
      ]
    },
    {
      label: 'News',
      route: {name: ROUTES.NEWS},
    },
    {
      label: 'About',
      route: {name: ROUTES.HOME},
    },
    {
      label: 'Login',
      route: {name: ROUTES.LOGIN},
    },
  ]);

  return {
    menuItems,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMenuStore, import.meta.hot))
}