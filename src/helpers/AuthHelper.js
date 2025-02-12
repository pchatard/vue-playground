import Vue from "vue";
import firebase from "firebase/app";

export class Auth {
	static initializeAuthState(commit) {
		const authUsers = process.env.VUE_APP_AUTHORIZED_USER.split(" ");
		firebase.auth().onAuthStateChanged((user) => {
			if (user && authUsers.includes(user.uid)) {
				const formatedUser = {
					name: user.displayName,
					email: user.email,
					id: user.uid,
					photo: user.photoURL,
				};
				commit("INITIALIZE", formatedUser);
				return;
			} else if (user && !authUsers.includes(user.uid)) {
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
