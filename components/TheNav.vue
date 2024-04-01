<template>
    <nav class="app-navbar">
      <app-container>
      <p-menu-bar :model="menuItems">
        <template #start>
          <nuxt-link :to="{name: ROUTES.HOME}">
            <!--            <img class="logo" src="/favicon.ico" alt="PFL.UZ">-->
            EuroHI.UZ
          </nuxt-link>
        </template>
        <template #item="{ item, props, hasSubmenu }">
          <nuxt-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon"/>
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </nuxt-link>
          <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon"/>
            <span class="ml-2">{{ item.label }}</span>
            <i v-if="hasSubmenu" class="fi fi-sr-caret-down"></i>
          </a>
        </template>
      </p-menu-bar>
      </app-container>
    </nav>
</template>
<script setup lang="ts">
import PMenuBar from 'primevue/menubar';
import {ROUTES} from "~/types";
import {useMenuStore} from "~/stores";

const {menuItems} = useMenuStore();

</script>
<style src="~/assets/stylus/navbar.styl"></style>