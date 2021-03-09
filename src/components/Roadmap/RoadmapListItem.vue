<template>
	<li class="roadmap__list__item">
		<details>
			<summary>
				<h3>
					{{ goal.title }}
				</h3>

				<div class="info">
					<el-progress
						:text-inside="true"
						:stroke-width="20"
						:percentage="goal.progress"
						:status="progressStatus"
					></el-progress>
					<el-button
						v-show="loggedIn"
						type="primary"
						size="mini"
						round
						@click="showEditGoal = true"
						>Edit</el-button
					>
					<el-button
						v-show="loggedIn"
						type="danger"
						size="mini"
						round
						@click="deleteGoal(goal.key)"
						>Delete</el-button
					>
				</div>
			</summary>
			<div class="details">
				<ul class="tags">
					<li v-for="tag in goal.tags" :key="tag" class="tag">{{ tag }}</li>
				</ul>
				<p>{{ goal.description }}</p>
				<ul class="tasks">
					Tasks:
					<task
						v-for="task in goal.tasks"
						:key="task.uid"
						:task="task"
						@update-task="onUpdateTask"
					/>
				</ul>
			</div>
		</details>
		<goal-modal
			:show="showEditGoal"
			@submit-goal="onUpdateGoal"
			@close-modal="showEditGoal = false"
			:goal="goal"
		/>
	</li>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import GoalModal from "./GoalModal.vue";
import Task from "./Task.vue";

export default {
	name: "RoadmapListItem",
	components: {
		GoalModal,
		Task,
	},
	props: {
		goal: {
			type: Object,
			default: () => {},
		},
	},
	data() {
		return {
			showEditGoal: false,
		};
	},
	computed: {
		...mapGetters({ loggedIn: "user" }),
		progressStatus() {
			if (this.goal.progress === 100) {
				return "success";
			} else if (this.goal.progress >= 50) {
				return "warning";
			} else {
				return undefined;
			}
		},
	},
	methods: {
		...mapActions(["deleteGoal", "updateTask", "updateGoal"]),
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
		onUpdateGoal(updatedGoal) {
			this.updateGoal(updatedGoal);
			this.showEditGoal = false;
		},
	},
};
</script>

<style lang="scss">
.roadmap__list__item {
	margin: 2rem;
	width: 100%;

	details {
		summary {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			outline: none;
			cursor: pointer;

			& > * {
				margin: 0;
			}

			h3 {
				margin-left: 2rem;
			}

			div.info {
				margin-left: auto;
				display: flex;
				align-items: center;

				.el-button {
					margin-left: 5px;
				}

				.el-progress {
					width: 25rem;
				}
			}
		}

		.details {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding-left: 5rem;

			p {
				margin-top: 0;
				margin-bottom: 1rem;
				font-style: italic;
			}

			.done {
				color: green;
			}

			ul.tags {
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 1rem 0;

				li.tag {
					margin-right: 0.5rem;
					padding: 0.5rem 1.5rem;
					border: 1px solid;
					border-radius: 8px;
					font-size: 1.4rem;
				}
			}

			ul.tasks {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				font-weight: bold;

				li {
					height: 3.2rem;
					display: flex;
					align-items: center;
					font-weight: normal;

					.el-button {
						margin-left: 1rem;
					}
				}
			}
		}
	}
}
</style>
