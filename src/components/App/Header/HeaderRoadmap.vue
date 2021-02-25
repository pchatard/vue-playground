<template>
	<header v-if="$route.path === '/roadmap'" class="header__roadmap">
		<el-page-header
			@back="$router.push({ path: '/' })"
			title="Home"
			content="Roadmap"
		></el-page-header>

		<div v-show="user" class="header__roadmap__user">
			<button
				v-show="user"
				@click="signout"
				class="header__roadmap__user__logout"
			>
				Logout
			</button>
			<img
				:src="user && user.photo"
				alt="Profile image"
				class="header__roadmap__user__image"
			/>
		</div>
	</header>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "HeaderRoadmap",
	props: {
		user: { type: Object, default: () => ({}) },
	},
	methods: {
		...mapActions(["signout"]),
	},
};
</script>

<style lang="scss">
.header__roadmap {
	height: 80px;
	padding: 0 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	&__user {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		&__logout {
			font: inherit;
			color: inherit;
			background: none;
			border: none;
			cursor: pointer;
		}

		&__image {
			aspect-ratio: 1/1;
			width: 35px;
			border-radius: 50%;
			margin-left: 15px;
		}
	}
}
</style>
