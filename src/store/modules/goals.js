import { Database } from "@/helpers/Database";
import GoalHelper from "@/helpers/GoalHelper";

const goals = {
	state: {
		goals: [],
	},
	mutations: {
		SET_GOALS: (state, goals) => (state.goals = goals),
	},
	actions: {
		initGoals({ commit }) {
			Database.get("goals/", GoalHelper.processGoals, commit);
		},
		createGoal(_, goal) {
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
	},
};

export default goals;
