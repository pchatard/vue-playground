import { Auth } from "../../helpers/AuthHelper";

const auth = {
	state: () => ({
		user: null,
	}),
	mutations: {
		INITIALIZE: (state, credentials) => {
			state.user = credentials;
		},
	},
	actions: {
		login() {
			Auth.loginWithGoogle();
		},
		initAuth({ commit }) {
			Auth.initializeAuthState(commit);
		},
		signout() {
			Auth.signout();
		},
	},
	getters: {
		user: (state) => state.user,
	},
};

export default auth;
