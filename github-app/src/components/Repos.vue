<template>
	<div>
		<h1 class="subtitle">Repos</h1>
		<div v-for="repo in repos" class="column">
			<repo :repo="repo"></repo>
		</div>
	</div>
</template>

<script>
export default {
  name: 'repos',
  data () {
    return {}
  },
  props: ['repos']
}
</script>

<style>
	
</style>
