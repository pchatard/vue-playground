import { Database } from "@/helpers/Database";
import GoalHelper from "@/helpers/GoalHelper";

const goals = {
	state: {
		goals: [],
		loading: false,
	},
	mutations: {
		SET_GOALS: (state, goals) => (state.goals = goals),
		SET_LOADING_STATUS: (state, newLoadingStatus) =>
			(state.loading = newLoadingStatus),
	},
	actions: {
		initGoals({ commit }) {
			commit("SET_LOADING_STATUS", true);
			Database.get("goals/", GoalHelper.processGoals, commit);
		},
		createGoal(_, goal) {
			// commit('SET_LOADING_STATUS', true);
			Database.add(`goals/`, goal);
		},
		updateGoal(_, updatedGoal) {
			const path = `goals/${updatedGoal.key}/`;
			Database.update(path, updatedGoal);
		},
		updateTask(_, { goalKey, taskIndex, newTaskValue }) {
			const path = `goals/${goalKey}/tasks/${taskIndex}/completed`;
			Database.update(path, newTaskValue);
		},
		deleteGoal(_, goalKey) {
			Database.delete(`goals/${goalKey}`);
		},
	},
	getters: {
		goals: (state) => state.goals,
		loading: (state) => state.loading,
	},
};

export default goals;
