<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
          <h1 class="title">
            Github APP
          </h1>
          <div class="content">
            <div class="columns">
              <div class="column"><users v-bind:users="users"></users></div>
              <div class="column"><repos v-bind:repos="repositories"></repos></div>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
/* import Users from './Users'
import Repos from './Repos' */

export default {
  name: 'results',
  data () {
    return {
      repositories: [],
      users: []
    }
  },
  created () {
    this.submitSearch(this.$route.params.token)
  },
  methods: {
    submitSearch: function (token) {
      this.$http.get('https://api.github.com/search/repositories?q=' + token).then(response => {
        this.repositories = response.body.items
        console.log('Repositories: ', this.repositories)
      }, response => {
        console.log(response)
      })

      this.$http.get('https://api.github.com/search/users?q=' + token).then(response => {
        this.users = response.body.items
        console.log('Users: ', this.users)
      }, response => {
        console.log(response)
      })
    }
  }
}
</script>

<style>
  
</style>
