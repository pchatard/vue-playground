import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import config from "../config/firebase";
export class FirebaseHelper {
	static async init() {
		firebase.initializeApp(config);
	}
}
