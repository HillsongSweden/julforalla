import glob from 'glob'
import path from 'path'
import postcssImport from 'postcss-import'
import postcssNesting from 'postcss-nesting'
import postcssPresetEnv from 'postcss-preset-env'
import * as SITE_INFO from './assets/content/site/info.json'
import * as SITE_COUNTERS from './assets/content/site/counters.json'

const dynamicContentPath = 'assets/content' // ? No prepending/appending backslashes here
// const dynamicRoutes = getDynamicPaths(
//   {
//     blog: 'blog/*.json',
//     projects: 'projects/*.json'
//   },
//   dynamicContentPath
// )

export default {
  mode: 'universal',
  // ? The env Property: https://nuxtjs.org/api/configuration-env/
  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL || 'http://createADotEnvFileAndSetURL'
        : 'http://localhost:3000',
    lang: SITE_INFO.sitelang || 'sv-SE',
    counters: SITE_COUNTERS,
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: { lang: SITE_INFO.sitelang || 'sv-SE' },
    title: SITE_INFO.sitename || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1'
      },
      {
        hid: 'description',
        property: 'description',
        content: SITE_INFO.sitedescription || ''
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: SITE_INFO.sitedescription || ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/og-image.png'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://enjulföralla.se'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Viaoda+Libre&display=swap'
      }
    ]
  },
  // generate: {
  //   routes: dynamicRoutes,
  //   fallback: true,
  //   subFolders: false
  // },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#9F341C' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/tailwind.css', '@/assets/css/main.pcss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/v-intersect', '~/plugins/vue-formulate'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/svg', '@nuxtjs/pwa'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/image', '@nuxtjs/markdownit', 'nuxt-purgecss'],
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-import': postcssImport,
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nesting': postcssNesting,
        'postcss-preset-env': postcssPresetEnv({
          stage: 1,
          features: {
            'nesting-rules': false
          }
        })
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Custom additions configuration
   */
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false // enables `import { theme } from '~tailwind.config'`
  },
  purgeCSS: {
    mode: 'postcss',
    whitelist: ['btn', 'icon', 'main', 'overflow-hidden'],
    whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^article/, /image$/, /formulate/, /form-/],
    whitelistPatternsChildren: [/^formulate-/, /form-/]
  },
  pwa: {
    icon: {
      source: 'static/favicon.png',
      filename: 'favicon.png'
    },
    manifest: { name: SITE_INFO.sitename || process.env.npm_package_name || '', lang: process.env.lang },
    meta: {
      name: SITE_INFO.sitename || process.env.npm_package_name || '',
      lang: process.env.lang,
      ogHost: process.env.URL,
      ogImage: '/og-image.png'
    }
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable - example below
 * {
 *   blog: 'blog/*.json',
 *   projects: 'projects/*.json'
 * }
 *
 * @return {Array} - Will return those files into urls for SSR generated .html's like
 * [
 *   /blog/2019-08-27-incidunt-laborum-e ,
 *   /projects/story-test-story-1
 * ]
 */
function getDynamicPaths(urlFilepathTable, cwdPath) {
  console.log('Going to generate dynamicRoutes for these collection types: ', urlFilepathTable)
  const dynamicPaths = [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      const filepathGlob = urlFilepathTable[url]
      return glob.sync(filepathGlob, { cwd: cwdPath }).map(filepath => {
        return `/${url}/${path.basename(filepath, '.json')}`
      })
    })
  )
  console.log('Found these dynamicPaths that will be SSR generated:', dynamicPaths)
  return dynamicPaths
}
