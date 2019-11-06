import Router from 'vue-router'
import AboutMe from './components/AboutMe.vue'
import Articles from './components/Articles.vue'
import Article from './components/Article.vue'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Articles',
      component: Articles,
    },
    { path: '/AboutMe', name: 'AboutMe', component: AboutMe },
    { path: '/Article/:id', name: 'Article', component: Article }

  ]
})