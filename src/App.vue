<template>
	<div v-if="windowWidth > 800" id="app">
		<Header />
		<router-view />
		<Footer />
	</div>
	<div v-else id="app" class="mobile">
		<div>
			<img src="@/assets/images/DangerSquare.svg" alt="Danger Icon" />
			<h2>Hum... Not ready yet</h2>
			<p>
				Please consider visiting this website on a computer as it is not
				optimized for mobile yet.
			</p>
		</div>
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
	data() {
		return {
			windowWidth: window.innerWidth,
		};
	},
	methods: {
		...mapActions(["initAuth"]),
	},
	mounted() {
		this.initAuth();
		window.addEventListener("resize", () => {
			this.windowWidth = window.innerWidth;
		});
	},
};
</script>

<style lang="scss">
@import "@/assets/styles/reset.scss";

html {
	font-size: 62.5%;
}

body {
	margin: 0;
	padding: 0;
	font-size: 1.6rem;
}

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	&.mobile {
		height: 100vh;
		display: grid;
		place-items: center;
		padding: 0 2rem;

		img {
			width: 5rem;
			margin-bottom: 2rem;
		}

		h2 {
			margin-bottom: 2rem;
		}
	}
}

a,
a:visited {
	text-decoration: none;
	color: inherit;
}

button {
	outline: none;
	background: none;
	border: none;
	font: inherit;
	color: inherit;
}
</style>
