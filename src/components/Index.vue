
<template>
	<section>
		<NavBar></NavBar>
		<section class="main-container">
			<Posts></Posts>
		</section>
	</section>
</template>

<script>
	import NavBar from '../components/NavBar.vue'
	import Posts from '../components/Posts.vue'
	export default {
		name: "Index",
		components: {
			NavBar,
			Posts
		},
		methods: {

		},

	}
</script>

<style scoped>

</style>