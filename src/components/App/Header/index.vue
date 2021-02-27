<template>
	<header-roadmap v-if="$route.path === '/roadmap'" :user="user" />
	<header-cursor v-else-if="$route.path === '/cursors'" />
	<!-- <header v-else>Test</header> -->
</template>

<script>
import { routes } from "@/router";
import { mapGetters } from "vuex";

import HeaderRoadmap from "./HeaderRoadmap.vue";
import HeaderCursor from "./HeaderCursor.vue";

export default {
	name: "Header",
	components: {
		HeaderRoadmap,
		HeaderCursor,
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
