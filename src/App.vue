<template>
	<div id="app">
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "app",
	components: {
		Header: () => import("./components/App/Header/"),
		Footer: () => import("./components/App/Footer/"),
	},
	methods: {
		...mapActions(["initAuth"]),
	},
	mounted() {
		this.initAuth();
	},
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	padding: 0 50px;
}

a,
a:visited {
	text-decoration: none;
	color: inherit;
}
</style>
