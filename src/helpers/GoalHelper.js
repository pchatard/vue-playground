import Goal from "@/helpers/Roadmap/classes/Goal";

export default class GoalHelper {
	static processGoals(data, commit) {
		const rawGoals = data.val();
		let goals = [];
		if (rawGoals) {
			goals = Object.entries(data.val()).map((goalPair) => {
				const { title, description, tasks, tags, key } = {
					...goalPair[1],
					key: goalPair[0],
				};
				const goal = new Goal(title, description, tasks, tags, key);
				goal.calculateProgress();
				goal.computeStatus();
				return goal;
			});
		}
		commit("SET_GOALS", goals);
	}
}
