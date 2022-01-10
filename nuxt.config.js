const config = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'es',
    },
    title: 'Azael Project',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Lets go dude',
      },
    ],
    // Chatbot Antonia, loading from current source by now
  },

  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          math: 'always',
        },
      },
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/_override.less',
    '@/assets/styles/_utils.scss',
    '@/assets/styles/_transitions.css',
    '@/assets/styles/contrast.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/vuemq',
    '@/plugins/scrollTo',
    '~/plugins/graphql',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/style-resources-module#readme
    '@nuxtjs/style-resources',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://github.com/LuXDAmore/nuxt-humans-txt
    '@luxdamore/nuxt-humans-txt',
    '@nuxtjs/pwa',
    'nuxt-compress',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
    // https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/robots',
    // https://www.npmjs.com/package/vue-scrollto
    [
      'vue-scrollto/nuxt',
      {
        duration: 300,
        offset: -200,
      },
    ],
  ],
  pwa: {
    meta: {
      name: 'Azael',
      author: 'Azael',
      description: 'Yes sir',
      theme_color: '#81bd00',
      lang: 'es',
      twitterSite: 'https://twitter.com/ModeloResponde',
    },
    manifest: {
      name: 'Azael',
      short_name: 'Azael',
      description: 'Azael',
    },
  },

  // robots: {
  //   UserAgent: '*',
  //   Allow: '/',
  //   Sitemap:
  //     environment === 'production'
  //       ? 'https://nueva.afpmodelo.cl/sitemap.xml'
  //       : 'https://localhost:3000/sitemap.xml',
  // },

  // Load global Scss variables
  styleResources: {
    scss: ['./assets/styles/_global.scss'],
  },

  // humansTxt: {
  //   thanksTo: [
  //     'Comenzamos un 15 de marzo 2021',
  //     {
  //       key: company,
  //       value: authors,
  //     },
  //     false,
  //   ],
  //   site: [
  //     'TECH STUFF',
  //     {
  //       key: 'Current',
  //       value: 'v.' + version,
  //     },
  //     {
  //       key: 'Last update',
  //       value: new Date().toLocaleDateString('es-ES', {
  //         month: '2-digit',
  //         day: '2-digit',
  //         year: 'numeric',
  //       }),
  //     },
  //   ],
  //   keepDevelopersInformations: false,
  // },

  serverMiddleware: [
    { path: '/graphql', handler: '~/server-middleware/graphql.js' },
  ],
  env: {
    strapiUrl: process.env.STRAPI_URL,
  },
}

export default { ...config }
