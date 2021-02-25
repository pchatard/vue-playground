<template>
	<HeaderRoadmap v-if="$route.path === '/roadmap'" :user="user" />
	<HeaderCursor v-else-if="$route.path === '/cursors'" />
	<!-- <header v-else>Test</header> -->
</template>

<script>
import { routes } from "@/router";
import { mapGetters } from "vuex";

export default {
	name: "Header",
	components: {
		HeaderRoadmap: () => import("@/components/App/Header/HeaderRoadmap"),
		HeaderCursor: () => import("@/components/App/Header/HeaderCursor"),
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
header {
	height: 80px;
}
</style>
