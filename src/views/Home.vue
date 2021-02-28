<template>
	<main class="home">
		<div class="home__header">
			<h1>Welcome to my front-end playground</h1>
			<p>
				Here, I explore shadowy front-end techniques used in the most beautiful
				websites
			</p>
		</div>
		<home-menu />
	</main>
</template>

<script>
import HomeMenu from "../components/Home/HomeMenu";
export default {
	name: "Home",
	components: {
		HomeMenu,
	},
};
</script>

<style lang="scss">
.home {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&__header {
		margin-bottom: 30px;
		h1 {
			margin: 0;
			padding: 20px 0;
		}
	}
}
</style>
