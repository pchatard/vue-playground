<template>
	<footer>
		<button v-show="!loggedIn" @click="login">Admin</button>
		<button v-show="loggedIn" @click="signout">Sign Out</button>
	</footer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Footer",
	computed: {
		...mapGetters({ loggedIn: "user" }),
	},
	methods: {
		...mapActions(["login", "signout"]),
	},
};
</script>
