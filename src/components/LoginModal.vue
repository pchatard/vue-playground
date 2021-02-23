<template>
	<ElDialog :visible="show" @close="$emit('close-modal')" title="Login">
		<form @submit.prevent="login">
			<label for="login-email">E-mail</label>
			<el-input
				id="login-email"
				label="E-mail"
				placeholder="E-mail"
				type="email"
				v-model="connectionData.email"
				auto-complete="off"
			/>
			<label for="login-password">Password</label>
			<el-input
				id="login-password"
				placeholder="Password"
				label="Password"
				type="password"
				v-model="connectionData.password"
				show-password
			/>
			<el-button type="primary" native-type="submit">Login</el-button>
		</form>
	</ElDialog>
</template>

<script>
export default {
	name: "LoginModal",
	props: {
		show: { type: Boolean, default: false },
	},
	data() {
		return {
			connectionData: {
				email: "",
				password: "",
			},
		};
	},
	methods: {
		login() {
			// Connect here
			this.connectionData = {};
			this.$emit("close-modal");
		},
		loginWithGoogle() {
			// Connect with google
		},
	},
};
</script>
