<template>
	<div>
		<h1>Hello Users</h1>
		<p>{{users}}</p>
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
