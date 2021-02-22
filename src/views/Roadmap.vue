<template>
	<main class="roadmap" data-barba="container" data-barba-namespace="roadmap">
		<h1>Roadmap</h1>
		<ElButton type="primary" @click="showGoalForm = true">Add a goal</ElButton>
		<GoalModal
			:show="showGoalForm"
			@new-goal="createGoal"
			@close-modal="showGoalForm = false"
		/>
		<RoadmapList />
	</main>
</template>

<script>
import RoadmapList from "@/components/RoadmapList";
import GoalModal from "@/components/GoalModal";
import { mapActions } from "vuex";

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
	methods: {
		...mapActions(["initialize", "create"]),
		createGoal() {
			// this.create(newGoal);
			this.showGoalForm = false;
		},
	},
	mounted() {
		this.initialize();
	},
};
</script>
