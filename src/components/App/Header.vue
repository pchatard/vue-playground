<template>
	<header class="header">
		<nav class="header__nav">
			<router-link v-for="route in routes" :key="route.path" :to="route.path">
				{{ route.name }}
			</router-link>
		</nav>
		<div v-show="user" class="header__user">
			<!-- <div class="header__user__text">
				<span class="header__user__text__name">
					{{ user && user.name }}
				</span>
				<span class="header__user__text__email">{{ user && user.email }}</span>
			</div> -->
			<img
				:src="user && user.photo"
				alt="Profile image"
				class="header__user__image"
			/>
		</div>
	</header>
</template>

<script>
import { routes } from "@/router";
import { mapGetters } from "vuex";

export default {
	name: "Header",
	data() {
		return {
			routes,
		};
	},
	computed: {
		...mapGetters(["user"]),
	},
};
</script>

<style>
.header {
	height: 50px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.header__nav {
	display: flex;
	justify-content: space-between;
}

.header__nav a {
	margin-left: 20px;
}

.header__nav a.router-link-exact-active {
	color: #41b883;
	font-weight: bold;
}

.header__user {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.header__user__text {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
}

.header__user__text__email {
	font-size: 12px;
}

.header__user__image {
	aspect-ratio: 1/1;
	width: 35px;
	border-radius: 50%;
	margin-left: 15px;
}
</style>
