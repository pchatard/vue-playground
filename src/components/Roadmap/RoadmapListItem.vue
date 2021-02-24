<template>
	<li class="roadmap__list__item">
		<details>
			<summary>
				<h3>
					{{ goal.title }}
				</h3>
				<p :class="goal.completed">
					{{ goal.completed }}
				</p>
				<el-progress
					:text-inside="true"
					:stroke-width="26"
					class="progress"
					:percentage="goal.progress"
				></el-progress>

				<el-button
					v-show="loggedIn"
					type="danger"
					size="mini"
					round
					@click="deleteGoal(goal.key)"
					>Delete</el-button
				>
			</summary>

			<p>{{ goal.description }}</p>
			<ul class="tags">
				<li v-for="tag in goal.tags" :key="tag" class="tag">{{ tag }}</li>
			</ul>
			<ul class="tasks">
				<Task
					v-for="task in goal.tasks"
					:key="task.uid"
					:task="task"
					@update-task="onUpdateTask"
				/>
			</ul>
		</details>
	</li>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	name: "RoadmapListItem",
	components: {
		Task: () => import("@/components/Roadmap/Task"),
	},
	props: {
		goal: {
			type: Object,
			default: () => {},
		},
	},
	computed: {
		...mapGetters({ loggedIn: "user" }),
	},
	methods: {
		...mapActions(["deleteGoal", "updateTask"]),
		onUpdateTask(taskUid) {
			const taskIndex = this.goal.tasks.findIndex(
				(task) => task.uid === taskUid
			);
			const currentTask = this.goal.tasks[taskIndex];
			this.updateTask({
				taskIndex,
				goalKey: this.goal.key,
				newTaskValue: !currentTask.completed,
			});
		},
	},
};
</script>

<style lang="scss">
.roadmap__list__item {
	margin: 20px;

	summary {
		display: flex;
		justify-content: center;
		align-items: baseline;
		outline: none;

		& > * {
			margin: 0;
		}
	}

	h3 {
		margin: 0 20px;
	}

	.progress {
		width: 300px;
	}

	.done {
		color: green;
		text-transform: capitalize;
	}

	.running {
		color: orange;
		text-transform: capitalize;
	}

	ul.tags {
		display: flex;
		justify-content: center;

		li.tag {
			padding: 5px;
			width: 75px;
			border: 1px solid;
			border-radius: 5px;
			margin: 5px;
		}
	}
}
</style>
