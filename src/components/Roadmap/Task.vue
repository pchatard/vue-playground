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
				v-show="loggedIn && task.completed"
				type="warning"
				size="mini"
				plain
				@click="$emit('update-task', task.uid)"
				>Todo</el-button
			>
			<el-button
				v-show="loggedIn && !task.completed"
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
import { mapActions, mapGetters } from "vuex";

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
	computed: {
		...mapGetters({ loggedIn: "user" }),
	},
	methods: {
		...mapActions(["updateTask", "deleteTask"]),
	},
};
</script>
