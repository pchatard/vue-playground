import Vue from "vue";
import firebase from "firebase/app";
import { authorizedUsersDev } from "@/data/config";

const authorizedUsersProd = process.env.AUTH_USER_IDS.split(",");

export class Auth {
	static initializeAuthState(commit) {
		const authorizedUsers =
			process.env.NODE_ENV === "production"
				? authorizedUsersProd
				: authorizedUsersDev;
		firebase.auth().onAuthStateChanged((user) => {
			// TODO: Change condition to user id with environment variable
			if (user && authorizedUsers.includes(user.uid)) {
				const formatedUser = {
					name: user.displayName,
					email: user.email,
					id: user.uid,
					photo: user.photoURL,
				};
				commit("INITIALIZE", formatedUser);
				return;
			} else if (user && !authorizedUsers.includes(user.uid)) {
				Vue.prototype.$notify.error({
					title: "Authorization Error",
					message: "You are not authorized",
					position: "bottom-right",
				});
				Auth.signout();
			} else {
				commit("INITIALIZE", null);
			}
		});
	}

	static loginWithGoogle() {
		const provider = new firebase.auth.GoogleAuthProvider();
		provider.setCustomParameters({
			prompt: "select_account",
		});
		firebase.auth().signInWithRedirect(provider);
	}

	static signout() {
		firebase.auth().signOut();
	}
}
