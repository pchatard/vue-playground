<template>
	<li
		:class="[{ done: task.completed }]"
		@mouseenter="showCommands = true"
		@mouseleave="showCommands = false"
	>
		<span>
			{{ task.title }}
		</span>
		<span v-show="showCommands" class="commands">
			<el-button
				v-if="task.completed"
				type="success"
				size="mini"
				plain
				@click="$emit('update-task', task.uid)"
				>Todo</el-button
			>
			<el-button
				v-else
				type="success"
				size="mini"
				plain
				@click="$emit('update-task', task.uid)"
				>Done</el-button
			>
		</span>
	</li>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "Task",
	props: {
		task: {
			type: Object,
			default: () => {},
		},
	},
	data() {
		return {
			showCommands: false,
		};
	},
	methods: {
		...mapActions(["updateTask", "deleteTask"]),
	},
};
</script>
