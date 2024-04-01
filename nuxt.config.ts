// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    appManifest: false,
  },
  runtimeConfig: {
    public: {
      DEFAULT_LANGUAGE: 'uz',
      LANGUAGES: [
        {code: 'uz', title: 'O`zbek', default: true},
        {code: 'en', title: 'English', default: false},
      ],
    }
  },
  components: [
    {
      path: '~/components/',
      pathPrefix: false,
    },
  ],
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt',
    // ['@nuxtjs/i18n', {
    //   locales: [
    //     { code: 'uz', file: 'uz.json'},
    //     { code: 'en', file: 'en.json'},
    //   ],
    //   lazy: true,
    //   // legacy: false,
    //   detectBrowserLanguage: false,
    //   langDir: 'locales',
    //   strategy: 'prefix_except_default',
    //   defaultLocale: 'uz',
    // }],
  ],
  css: [
    'primevue/resources/themes/aura-light-purple/theme.css',
    "@flaticon/flaticon-uicons/css/regular/rounded.css",
    "@flaticon/flaticon-uicons/css/solid/rounded.css",
    '~/assets/stylus/app.styl'
  ],
  app: {
    pageTransition: {
      name: 'page',
      type: 'transition',
      mode: 'out-in'
    },
    head: {
      link: [
        // { rel: 'stylesheet', href: '/css/bootstrap-grid.min.css' }
      ],
    },
  },
  primevue: {
    options: {
      ripple: false,
      inputStyle: 'filled',
    },
    components: {
      include: []
    }
    /*directives: {
      prefix: 'p',
      include: ['Ripple', 'Tooltip']    /!* Used as v-pripple and v-ptooltip *!/
    }*/
  },
})
