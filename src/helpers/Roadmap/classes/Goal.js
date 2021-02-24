export default class Goal {
	progress = 0;
	status = "todo";

	constructor(title = "", description = "", tasks = [], tags = [], key = "") {
		this.title = title;
		this.description = description;
		this.tasks = tasks;
		this.tags = tags;
		this.key = key;
	}

	addTask(task) {
		this.tasks.push(task);
	}
	addTag(tag) {
		this.tags.push(tag);
	}

	set progress(progress) {
		this.progress = progress;
	}
	set status(status) {
		this.status = status;
	}

	calculateProgress() {
		let completedTasks = 0;
		if (this.tasks.length) {
			completedTasks =
				this.tasks.filter((task) => task.completed).length / this.tasks.length;
		}
		this.progress = parseInt(completedTasks * 100);
	}

	computeStatus() {
		switch (this.progress) {
			case 1:
				this.status = "done";
				break;
			case 0:
				this.status = "todo";
				break;
			default:
				this.status = "running";
				break;
		}
	}
}
