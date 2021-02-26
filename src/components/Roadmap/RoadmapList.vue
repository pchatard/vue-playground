<template>
	<ul class="roadmap__list" v-loading="loading">
		<roadmap-list-item v-for="goal in goals" :key="goal.key" :goal="goal" />
	</ul>
</template>

<script>
import RoadmapListItem from "./RoadmapListItem.vue";
import { mapGetters } from "vuex";
export default {
	name: "RoadmapList",
	components: {
		RoadmapListItem,
	},
	computed: {
		...mapGetters(["goals", "loading"]),
	},
};
</script>

<style>
ul {
	list-style: none;
	padding-inline-start: 0;
	flex: auto;
}
</style>
