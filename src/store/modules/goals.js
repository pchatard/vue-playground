import goalsData from "../../data/goals.json";

const goals = {
	state: {
		goals: [],
	},
	mutations: {
		INIT_GOALS: (state, goals) => (state.goals = goals),
	},
	actions: {
		initialize({ commit }) {
			const goalsProgress = goalsData.map(calculateProgress);
			commit("INIT_GOALS", goalsProgress);
		},
		// createGoal({ commit }, goal) {

		// },
	},
	getters: {
		goals: (state) => state.goals,
	},
};

function calculateProgress(goal) {
	const completedTasks =
		goal.tasks.filter((task) => task.completed).length / goal.tasks.length;
	goal.progress = parseInt(completedTasks * 100);
	return computeCompleted(goal);
}

function computeCompleted(goal) {
	switch (goal.progress) {
		case 1:
			goal.completed = "done";
			return goal;
		case 0:
			goal.completed = "todo";
			return goal;
		default:
			goal.completed = "running";
			return goal;
	}
}

export default goals;
