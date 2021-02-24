import firebase from "firebase/app";

export class Database {
	static add(path, data) {
		firebase.database().ref(path).push(data);
	}

	static get(path, processData, commit) {
		firebase
			.database()
			.ref(path)
			.on("value", (result) => {
				processData(result, commit);
			});
	}

	static update(path, value) {
		firebase.database().ref(path).set(value);
	}

	static delete(path) {
		firebase.database().ref(path).remove();
	}
}
