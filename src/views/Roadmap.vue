<template>
	<main class="roadmap" data-barba="container" data-barba-namespace="roadmap">
		<h1>Roadmap</h1>
		<ElButton type="primary" @click="showLoginModal = true">Login</ElButton>
		<LoginModal :show="showLoginModal" @close-modal="showLoginModal = false" />
		<p>
			This page is public, but needs authentication to add, remove or edit goals
		</p>
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
import LoginModal from "@/components/LoginModal";
import { mapActions } from "vuex";

export default {
	name: "Roadmap",
	components: {
		RoadmapList,
		GoalModal,
		LoginModal,
	},
	data() {
		return {
			showGoalForm: false,
			showLoginModal: false,
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
