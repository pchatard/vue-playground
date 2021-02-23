import firebase from "firebase/app";

export class Auth {
	static initializeAuthState(commit) {
		firebase.auth().onAuthStateChanged((user) => {
			// TODO: Change condition to user id with environment variable
			if (user) {
				const formatedUser = {
					name: user.displayName,
					email: user.email,
					id: user.uid,
					photo: user.photoURL,
				};
				commit("INITIALIZE", formatedUser);
				return;
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

	static async signout() {
		try {
			await firebase.auth().signOut();
		} catch (error) {
			console.log(error);
		}
	}
}
