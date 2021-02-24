<template>
	<ElDialog :visible="show" @close="onClose" title="Create a goal">
		<el-form>
			<el-form-item label="Title">
				<el-input v-model="newGoal.title" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="Description">
				<el-input v-model="newGoal.description" autocomplete="off"></el-input>
			</el-form-item>
			<ul>
				<li v-for="task in newGoal.tasks" :key="task.uid">
					{{ task.title }}
					<button type="button" @click="removeTask(task.uid)">Delete</button>
				</li>
			</ul>
			<el-form-item label="Tasks">
				<el-input
					v-model="taskInputValue"
					@keyup.enter.native="handleTaskInputConfirm"
				/>
			</el-form-item>
			<el-form-item label="Tags">
				<el-tag
					:key="tag"
					v-for="tag in newGoal.tags"
					closable
					:disable-transitions="false"
					@close="handleClose(tag)"
				>
					{{ tag }}
				</el-tag>
				<el-input
					class="input-new-tag"
					v-if="tagInputVisible"
					v-model="tagInputValue"
					ref="saveTagInput"
					size="mini"
					@keyup.enter.native="handleTagInputConfirm"
					@blur="handleTagInputConfirm"
				/>
				<el-button
					v-else
					class="button-new-tag"
					size="small"
					@click="showTagInput"
					>+ Nouveau Tag</el-button
				>
			</el-form-item>
		</el-form>

		<span slot="footer" class="dialog-footer">
			<el-button type="danger" plain @click="onClose">Cancel</el-button>
			<el-button type="primary" @click="onSubmit">Create</el-button>
		</span>
	</ElDialog>
</template>

<script>
import Goal from "@/helpers/Roadmap/classes/Goal";
import Task from "@/helpers/Roadmap/classes/Task";

export default {
	name: "GoalModal",
	props: {
		show: { type: Boolean, default: false },
		goal: { type: Object, default: () => new Goal() },
	},
	data() {
		return {
			newGoal: this.goal,
			tagInputVisible: false,
			tagInputValue: "",
			taskInputValue: "",
		};
	},
	methods: {
		onClose() {
			this.$emit("close-modal");
			this.newGoal = new Goal();
		},
		onSubmit() {
			this.$emit("new-goal", this.newGoal);
			this.newGoal = new Goal();
		},
		// Tasks
		handleTaskInputConfirm() {
			let inputValue = this.taskInputValue;
			if (inputValue) {
				const task = new Task(inputValue);
				this.newGoal.tasks.push(task);
			}
			this.taskInputValue = "";
		},
		removeTask(uid) {
			this.newGoal.tasks.splice(
				this.newGoal.tasks.findIndex((task) => task.uid === uid),
				1
			);
		},
		// Tags
		handleClose(tag) {
			this.newGoal.tags.splice(this.newGoal.tags.indexOf(tag), 1);
		},
		showTagInput() {
			this.tagInputVisible = true;
			this.$nextTick(() => {
				this.$refs.saveTagInput.$refs.input.focus();
			});
		},
		handleTagInputConfirm() {
			let inputValue = this.tagInputValue;
			if (inputValue) {
				this.newGoal.tags.push(inputValue);
			}
			this.tagInputVisible = false;
			this.tagInputValue = "";
		},
	},
};
</script>

<style>
.el-form-item {
	margin: 0;
}

.el-tag + .el-tag {
	margin-left: 10px;
}
.button-new-tag {
	margin-left: 10px;
	height: 32px;
	line-height: 30px;
	padding-top: 0;
	padding-bottom: 0;
}
.input-new-tag {
	width: 90px;
	margin-left: 10px;
	vertical-align: bottom;
}
</style>
