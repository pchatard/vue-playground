<template>
	<main class="cursors">
		<h1>Welcome to Cursor Road</h1>
		<!-- <p>
			I'm working on some cursor techniques, but while you wait, you can hover
			that button down here.
		</p>
		<button class="hover-btn">Hover me</button> -->
		<cursor-selector />
	</main>
</template>

<script>
import CursorSelector from "../components/CursorRoad/CursorSelector.vue";
export default {
	components: { CursorSelector },
	name: "CursorRoad",
	// mounted() {
	// if (this.$route.path === "/cursors") {
	// 	document.querySelector(
	// 		"main.cursors"
	// 	).style.cursor = `url(${require("@/assets/images/DangerTriangle.svg")}) 16 16, auto`;
	// }
	// },
};
</script>

<style lang="scss">
.cursors {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 50px;
	}

	p {
		font-size: 18px;
		margin: 20px 0;
	}

	.hover-btn {
		padding: 15px;
		border: 2px solid #3dd6d0;
		border-radius: 15px;
		cursor: url("../assets/images/DangerTriangle.svg") 16 16, auto;
	}
}
</style>
