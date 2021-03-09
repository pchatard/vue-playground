<template>
	<main class="roadmap">
		<div class="roadmap__header">
			<h1>Roadmap</h1>
			<el-button
				v-show="loggedIn"
				@click="showGoalForm = true"
				type="primary"
				size="medium"
			>
				Add a goal
			</el-button>
		</div>

		<goal-modal
			:show="showGoalForm"
			@submit-goal="handleNewGoal"
			@close-modal="showGoalForm = false"
		/>
		<roadmap-list />
	</main>
</template>

<script>
import RoadmapList from "../components/Roadmap/RoadmapList.vue";
import GoalModal from "../components/Roadmap/GoalModal.vue";
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
.roadmap {
	min-height: calc(100vh - 8rem);
	display: flex;
	flex-direction: column;
	align-items: center;

	&__header {
		display: flex;
		align-items: center;
		margin-bottom: 2rem;

		.el-button {
			margin-left: 3rem;
		}
	}
}
</style>
