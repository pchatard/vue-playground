import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import config from "../data/config";

export class FirebaseHelper {
	static init() {
		firebase.initializeApp(config);
	}
}
