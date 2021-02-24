<template>
	<HeaderRoadmap
		v-if="$route.path === '/roadmap'"
		:user="user"
		:routes="routes"
	/>
	<header v-else>Hello</header>
</template>

<script>
import { routes } from "@/router";
import { mapGetters } from "vuex";

export default {
	name: "Header",
	components: {
		HeaderRoadmap: () => import("@/components/App/Header/HeaderRoadmap"),
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
