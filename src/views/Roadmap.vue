<template>
	<main class="roadmap">
		<h1>Roadmap</h1>
		<ElButton v-show="loggedIn" type="primary" @click="showGoalForm = true"
			>Add a goal</ElButton
		>
		<GoalModal
			:show="showGoalForm"
			@submit-goal="handleNewGoal"
			@close-modal="showGoalForm = false"
		/>
		<RoadmapList />
	</main>
</template>

<script>
import RoadmapList from "@/components/Roadmap/RoadmapList";
import GoalModal from "@/components/Roadmap/GoalModal";
import { mapActions, mapGetters } from "vuex";

export default {
	name: "Roadmap",
	components: {
		RoadmapList,
		GoalModal,
	},
	data() {
		return {
			showGoalForm: false,
		};
	},
	computed: {
		...mapGetters({ loggedIn: "user" }),
	},
	methods: {
		...mapActions(["initGoals", "createGoal"]),
		handleNewGoal(goal) {
			this.createGoal(goal);
			this.showGoalForm = false;
		},
	},
	mounted() {
		this.initGoals();
	},
};
</script>

<style lang="scss">
main.roadmap {
	min-height: calc(100vh - 80px);
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
