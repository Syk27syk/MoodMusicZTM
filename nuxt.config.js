export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mood Music',
    htmlAttrs: {
      lang: 'en, fr, zh-Hans',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  firebase: {
    config: {
      apiKey: 'AIzaSyC6kq9sxDYR6-Bb27vxmzgmx-J_yU21q2A',
      authDomain: 'mood-music-syk.firebaseapp.com',
      projectId: 'mood-music-syk',
      storageBucket: 'mood-music-syk.appspot.com',
      messagingSenderId: '358012430332',
      appId: '1:358012430332:web:6cdb019158404b2fc8f479',
      measurementId: 'G-ML7Z87T5BS'
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
