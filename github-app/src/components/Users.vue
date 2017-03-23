<template>
	<div>
		<h1 class="subtitle">Users</h1>
		<div class="columns is-multiline is-mobile">
			<div v-for="user in users" class="column">
				<user :user="user"></user>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {}
  },
  props: ['users']
}
</script>

<style>
	
</style>
