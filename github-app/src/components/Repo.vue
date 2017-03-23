<template>
	<div class="box repo-info">
		<h4 class="title is-4">{{repo.name}} <span>{{repo.language}}</span></h4>
		<div class="columns">
			<div class="owner-info column">
				<img :src="repo.owner.avatar_url" alt="" class="owner-avatar">
				<span>{{repo.owner.login}}</span>
			</div>
			<div class="repo-stats column">
				<div class="columns">
					<div class="column">
						<p>{{repo.forks}}</p>
						<p>Forks</p>
					</div>
					<div class="column">
						<p>{{repo.stargazers_count}}</p>
						<p>Stars</p>
					</div>
					<div class="column">
						<p>{{repo.watchers}}</p>
						<p>Watchers</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'repo',
  data () {
    return {}
  },
  props: ['repo']
}
</script>

<style>
	.owner-avatar {
		width: 30px;
		height: auto;
		border-radius: 100%;
	}

	.repo-info .title.is-4 {
		color: #2c3e50 !important;
		margin-bottom: 0.5rem;
		text-align: left;
	}

	.repo-info .title.is-4 span {
		float: right;
		font-size: 1rem;
		color: #a7a7a7;
		vertical-align: middle;
	}

	.repo-info .column {
		color: #2c3e50 !important;
	}

	.owner-info {
		text-align: left;
	}

	.owner-info span {
		color: #2c3e50 !important;
		vertical-align: middle;
	}

	.owner-info img {
		vertical-align: middle;
	}
</style>
