import { v4 as uuidv4 } from "uuid";

export default class Task {
	constructor(title = "", completed = false) {
		this.title = title;
		this.completed = completed;
		this.uid = uuidv4();
	}
}
