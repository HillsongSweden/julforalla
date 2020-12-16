import { SET_SPONSOR_POSTS } from './mutations.type'
// import { SET_BLOG_POSTS, SET_PROJECT_POSTS } from './mutations.type'

export const state = () => ({
  sponsors: [],
  // blogPosts: [],
  // projectPosts: []
})

export const mutations = {
  [SET_SPONSOR_POSTS](state, list) {
    state.sponsors = list
  },
  // [SET_BLOG_POSTS](state, list) {
  //   state.blogPosts = list
  // },
  // [SET_PROJECT_POSTS](state, list) {
  //   state.projectPosts = list
  // }
}

export const actions = {
  getImages(files) {
    return files.keys().map((key) => {
      return key.slice(2);
    })
  },
  // getPosts(files) {
  //   return files.keys().map((key) => {
  //     let res = files(key)
  //     res.slug = key.slice(2)
  //     return res
  //   })
  // },
  async nuxtServerInit({ commit }) {
    // Sponsor collection type
    let sponsorImages = await require.context('~/static/img/', false, /-sponsor\.png$/)
    await commit(SET_SPONSOR_POSTS, actions.getImages(sponsorImages))

    // // Blog collection type
    // let blogFiles = await require.context('~/assets/content/blog/', false, /\.json$/)
    // await commit(SET_BLOG_POSTS, actions.getPosts(blogFiles))

    // // Project collection type
    // let projectFiles = await require.context('~/assets/content/projects/', false, /\.json$/)
    // await commit(SET_PROJECT_POSTS, actions.getPosts(projectFiles))

    // ? When adding/changing NetlifyCMS collection types, make sure to:
    // ? 1. Add/rename exact slugs here
    // ? 2. Add/rename the MUTATION_TYPE names in `./mutations.type.js`
    // ? 3. Add/rename `pages/YOUR_SLUG_HERE` and use the Vuex store like the included examples
    // ? If you are adding, add a state, mutation and commit (like above) for it too
  }
}
