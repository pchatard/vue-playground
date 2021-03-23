<template>
	<header-roadmap v-if="$route.path === '/roadmap'" :user="user" />
	<header-cursor v-else-if="$route.path === '/cursors'" />
	<header-hamburger v-else-if="$route.path === '/hamburgers'" />
	<header-transition v-else-if="$route.path.includes('/transitions')" />
	<!-- <header v-else>Test</header> -->
</template>

<script>
import { routes } from "@/router";
import { mapGetters } from "vuex";

import HeaderRoadmap from "./HeaderRoadmap.vue";
import HeaderCursor from "./HeaderCursor.vue";
import HeaderHamburger from "./HeaderHamburger.vue";
import HeaderTransition from "./HeaderTransition.vue";

export default {
	name: "Header",
	components: {
		HeaderRoadmap,
		HeaderCursor,
		HeaderHamburger,
		HeaderTransition,
	},
	data() {
		return {
			routes,
		};
	},
	computed: {
		...mapGetters(["user"]),
	},
};
</script>

<style lang="scss" scoped>
// header {
// 	height: 80px;
// }
</style>
