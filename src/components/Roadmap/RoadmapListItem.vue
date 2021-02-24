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

				<el-button type="danger" size="mini" round @click="deleteGoal(goal.key)"
					>Delete</el-button
				>
			</summary>

			<p>{{ goal.description }}</p>
			<ul class="tags">
				<li v-for="tag in goal.tags" :key="tag" class="tag">{{ tag }}</li>
			</ul>
			<ul>
				<li
					v-for="step in goal.tasks"
					:key="step.title"
					:class="[{ done: step.completed, todo: !step.completed }]"
				>
					{{ step.title }}
				</li>
			</ul>
		</details>
	</li>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "RoadmapListItem",
	props: {
		goal: {
			type: Object,
			default: () => {},
		},
	},
	methods: {
		...mapActions(["deleteGoal"]),
	},
};
</script>

<style>
.roadmap__list__item {
	margin: 20px;
}

.roadmap__list__item summary {
	display: flex;
	justify-content: center;
	align-items: baseline;
	outline: none;
}

.roadmap__list__item summary > * {
	margin: 0;
}

.roadmap__list__item h3 {
	margin: 0 20px;
}

.roadmap__list__item .progress {
	width: 300px;
}

.roadmap__list__item .done {
	color: green;
	text-transform: capitalize;
}

.roadmap__list__item .todo {
	color: red;
	text-transform: capitalize;
}

.roadmap__list__item .running {
	color: orange;
	text-transform: capitalize;
}

.roadmap__list__item ul.tags {
	display: flex;
	justify-content: center;
}

.roadmap__list__item ul li.tag {
	padding: 5px;
	width: 75px;
	border: 1px solid;
	border-radius: 5px;
	margin: 5px;
}
</style>
