const webpack = require("webpack");
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/semantic/dist/semantic.min.css',
    '~/assets/tailwindcss/dist/tailwind.min.css',
    '~/assets/main/main.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '~/plugins/jquery.js'
    '~/plugins/i18n.js',
    { src: '~/assets/jquery/dist/jquery.min.js', ssr: false },
    { src: '~/assets/semantic/dist/semantic.min.js', ssr: false },
    { src: '~/assets/ethers/dist/ethers-v4.min.js', ssr: false },
    { src: '~/assets/crypto/dist/crypto.min.js', ssr: false },
    // { src: '~/assets/web3/dist/web3.min.js', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
    // 'jQuery'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      return Object.assign({}, config, {
        devtool: 'source-map'
      });

    },
    render: {
      static: {
        maxAge: 30 * 24 * 60 * 60 * 1000
      },
      compressor: {
        threshold: 0
      }
    },
    router: {
      middleware: ['i18n']
    }
  },
  server: {
    port: 8000, // default: 3000
    // host: '192.168.135.116' // default: localhost
    host: '127.0.0.1' // default: localhost
  }
}
