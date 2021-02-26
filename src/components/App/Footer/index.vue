<template>
	<footer-roadmap v-if="$route.path === '/roadmap'" />
	<footer v-else-if="$route.path === '/'" class="footer">
		<router-link to="/roadmap">Roadmap</router-link>
	</footer>
</template>

<script>
import FooterRoadmap from './FooterRoadmap.vue';

export default {
	name: "Footer",
	components: {
		FooterRoadmap,
	},
};
</script>

<styl
FooterRoadmape>
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
