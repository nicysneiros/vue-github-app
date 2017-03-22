// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Results from './components/Results'
import Users from './components/Users'
import Repos from './components/Repos'
import 'bulma/css/bulma.css'

var VueResource = require('vue-resource')

Vue.use(VueResource)
Vue.config.productionTip = false

Vue.component('results', Results)
Vue.component('users', Users)
Vue.component('repos', Repos)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
