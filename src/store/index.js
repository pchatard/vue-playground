import Vue from "vue";
import Vuex from "vuex";

import goals from "../data/goals.json";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		goals: [],
	},
	mutations: {
		INIT_GOALS: (state, goals) => (state.goals = goals),
	},
	actions: {
		initialize({ commit }) {
			commit("INIT_GOALS", goals);
		},
	},
	getters: {
		goals: (state) => state.goals,
	},
	modules: {},
});
