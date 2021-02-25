import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import config from "../data/config";

const configProd = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
	databaseURL: process.env.DATABASE_URL,
};
export class FirebaseHelper {
	static init() {
		firebase.initializeApp(
			process.env.NODE_ENV === "production" ? configProd : config
		);
	}
}
