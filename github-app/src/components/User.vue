<template>
  <div class="box">
    <img class="user-avatar" :src="user.avatar_url" alt="">
    <div class="user-info">
      <h4 class="title is-4"><a :href="userData.homepage" target="_blank">{{userData.name}}</a></h4>
      <h5 class="title is-5">{{userData.email}}</h5>
      <div class="columns user-stats">
        <div class="column">
          <p>{{userData.public_repos}}</p>
          <p>Repositories</p>
        </div>
        <div class="column">
          <p>{{userData.public_gists}}</p>
          <p>Gists</p>
        </div>
        <div class="column">
          <p>{{userData.followers}}</p>
          <p>Followers</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      userData: {}
    }
  },
  created () {
    this.getUser(this.user.url)
  },
  props: ['user'],
  methods: {
    getUser: function (userURL) {
      this.$http.get(userURL + '?client_id=46452babe035461119a6&client_secret=89d1bde2130b7dca92bed1c7919a77732eb390ab').then(response => {
        this.userData = response.body
        this.userData.homepage = 'https://github.com/' + this.userData.login
        console.log('User Data: ', this.userData)
      }, response => {
        console.log(response)
      })
    }
  }
}
</script>

<style>
  .box {
    width: 90%;
    margin: auto;
    height: 100%;
  }
  .user-info .title {
    color: #2c3e50 !important;
  }
  .user-avatar {
    border-radius: 100%;
    width: 100px;
    height: auto;
  }
  .user-stats .column{
    color: #2c3e50 !important;
  }
  .user-info .title.is-4 {
    margin-bottom: 0.5rem !important;
  }
</style>
