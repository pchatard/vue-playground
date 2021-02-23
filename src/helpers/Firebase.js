import firebase from "firebase/app";
import "firebase/auth";
import config from "../data/config";

export class FirebaseHelper {
	static init() {
		firebase.initializeApp(config);
	}
}
