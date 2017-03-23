<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
          <h1 class="title">
            Github APP
          </h1>
          <div class="column-content">
            <div class="columns">
              <div class="column users"><users :users="users"></users></div>
              <div class="column repos"><repos :repos="repositories"></repos></div>
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
      this.$http.get('https://api.github.com/search/repositories?q=' + token + '&client_id=46452babe035461119a6&client_secret=89d1bde2130b7dca92bed1c7919a77732eb390ab').then(response => {
        this.repositories = response.body.items
        console.log('Repositories: ', this.repositories)
      }, response => {
        console.log(response)
      })

      this.$http.get('https://api.github.com/search/users?q=' + token + '&client_id=46452babe035461119a6&client_secret=89d1bde2130b7dca92bed1c7919a77732eb390ab').then(response => {
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
  .column-content {
    width: 80%;
    margin: auto;
  }
  .column {
    border-radius: 16px;
    color: white !important;
  }
  .users {
    background-color: #26547C;
    margin-right: 16px;
  }
  .repos {
    background-color: #EF476F;
    margin-left: 16px;
  }
</style>
