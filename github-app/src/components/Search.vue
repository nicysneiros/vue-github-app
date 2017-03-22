<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="logo-container">
          <img class="logo" src="./../assets/github-mark.png" alt="github logo">  
        </div>
        <h1 class="title">
          Github APP
        </h1>
        <div class="content">
          <div class="field has-addons">
            <input class="input" type="text" placeholder="Search users or repos" v-model="searchToken">
            <a class="button is-danger search-button" @click="submitSearch">Search</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      searchToken: ''
    }
  },
  methods: {
    submitSearch: function (event) {
      console.log(this.searchToken)
      this.$http.get('https://api.github.com/search/repositories?q=' + this.searchToken).then(response => {
        this.repositories = response.body.items
        console.log('Repositories: ', this.repositories)
      }, response => {
        console.log(response)
      })

      this.$http.get('https://api.github.com/search/users?q=' + this.searchToken).then(response => {
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
  .logo-container {
    background-color: white;
    width: 200px;
    margin: auto;
    border-radius: 100%;
  }

  .logo {
    width: 200px;
    height: auto;
  }

  .content {
    width: 600px;
    margin: auto;
  }

  .search-button {
    color: white !important;
  }
</style>
