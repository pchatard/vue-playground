import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth";
import cursor from "./modules/cursor";
import goals from "./modules/goals";

Vue.use(Vuex);

// TODO: Handle Errors
export default new Vuex.Store({
	modules: {
		auth,
		cursor,
		goals,
	},
});
