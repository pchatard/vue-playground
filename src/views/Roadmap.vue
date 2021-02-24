<template>
	<main class="roadmap" data-barba="container" data-barba-namespace="roadmap">
		<h1>Roadmap</h1>
		<ElButton type="primary" @click="showGoalForm = true">Add a goal</ElButton>
		<GoalModal
			:show="showGoalForm"
			@new-goal="handleNewGoal"
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
		...mapGetters(["user"]),
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
