import firebase from "firebase/app";

export class Database {
	static async add(path, data) {
		firebase.database().ref(path).push(data);
	}

	static async get(path, processData, commit) {
		firebase
			.database()
			.ref(path)
			.on("value", (result) => {
				processData(result, commit);
			});
	}

	static async delete(path) {
		try {
			await firebase.database().ref(path).remove();
		} catch (error) {
			throw new Error("Test");
		}
	}
}
