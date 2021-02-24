<template>
	<footer class="footer footer-roadmap">
		<router-link to="/">Home</router-link>
		<button v-show="!loggedIn" @click="login">Admin</button>
		<button v-show="loggedIn" @click="signout">Sign Out</button>
	</footer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	name: "FooterRoadmap",
	computed: {
		...mapGetters({ loggedIn: "user" }),
	},
	methods: {
		...mapActions(["login", "signout"]),
	},
};
</script>

<style lang="scss">
.footer-roadmap {
	display: flex;
	flex-direction: column;

	button {
		font: inherit;
		background: none;
		color: white;
		border: none;
		cursor: pointer;
	}
}
</style>
