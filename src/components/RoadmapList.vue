<template>
	<ul class="roadmap__list">
		<RoadmapListItem v-for="goal in goals" :key="goal.title" :goal="goal" />
	</ul>
</template>

<script>
import RoadmapListItem from "@/components/RoadmapListItem";
import { mapGetters } from "vuex";
export default {
	name: "RoadmapList",
	components: {
		RoadmapListItem,
	},
	computed: {
		...mapGetters(["goals"]),
	},
};
</script>

<style>
ul {
	list-style: none;
	padding-inline-start: 0;
}
</style>
