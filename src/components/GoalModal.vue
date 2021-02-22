<template>
	<ElDialog :visible="show" @close="$emit('close-modal')" title="Create a goal">
		<el-form>
			<el-form-item label="Title">
				<el-input v-model="newGoal.title" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="Description">
				<el-input v-model="newGoal.description" autocomplete="off"></el-input>
			</el-form-item>
		</el-form>

		<span slot="footer" class="dialog-footer">
			<el-button @click="$emit('close-modal')" type="danger" plain
				>Cancel</el-button
			>
			<el-button type="primary" @click="$emit('new-goal', newGoal)"
				>Create</el-button
			>
		</span>
	</ElDialog>
</template>

<script>
export default {
	name: "GoalModal",
	props: {
		show: { type: Boolean, default: false },
	},
	data() {
		return {
			newGoal: {
				title: "",
				description: "",
			},
		};
	},
};
</script>
