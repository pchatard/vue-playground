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
		async deleteGoal(_, goalKey) {
			try {
				await Database.delete(`goals/${goalKey}`);
			} catch (error) {
				console.log("Il y a une erreur");
			}
		},
	},
	getters: {
		goals: (state) => state.goals,
	},
};

export default goals;
