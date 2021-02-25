<template>
	<FooterRoadmap v-if="$route.path === '/roadmap'" />
	<footer v-else class="footer">
		<router-link to="/roadmap">Roadmap</router-link>
	</footer>
</template>

<script>
export default {
	name: "Footer",
	components: {
		FooterRoadmap: () => import("@/components/App/Footer/FooterRoadmap"),
	},
};
</script>

<style>
.footer {
	/* position: relative; */
	/* bottom: 0;
	left: 0;
	right: 0; */
	padding: 20px;
	background-color: black;
	color: white;
}
</style>
