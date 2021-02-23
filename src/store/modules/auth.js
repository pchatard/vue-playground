import { Auth } from "../../helpers/Auth";

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
		async signout() {
			try {
				await Auth.signout();
			} catch (error) {
				return;
			}
		},
	},
	getters: {
		user: (state) => state.user,
	},
};

export default auth;
