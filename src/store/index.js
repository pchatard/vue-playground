import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth";
import goals from "./modules/goals";

Vue.use(Vuex);

// TODO: Handle Errors
export default new Vuex.Store({
	modules: {
		auth,
		goals,
	},
});
