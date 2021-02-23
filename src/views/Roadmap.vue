<template>
	<main class="roadmap" data-barba="container" data-barba-namespace="roadmap">
		<h1>Roadmap</h1>
		<ElButton type="danger" @click="login" plain v-show="!user"
			>Login with Google</ElButton
		>
		<ElButton type="danger" @click="signout" v-show="user">Signout</ElButton>
		<p>
			This page is public, but needs authentication to add, remove or edit goals
		</p>
		<ElButton type="primary" @click="showGoalForm = true" v-show="user"
			>Add a goal</ElButton
		>
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
		...mapActions(["initialize", "create", "login", "signout"]),
		createGoal() {
			this.showGoalForm = false;
		},
	},
	mounted() {
		this.initialize();
	},
};
</script>
