<template>
	<header class="header__cursor" :class="cursorType">
		<el-page-header
			@back="$router.push({ path: '/' })"
			title="Home"
			content="Cursor Road"
		></el-page-header>
	</header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "HeaderCursor",
	computed: {
		...mapGetters(["cursorType"]),
	},
};
</script>

<style lang="scss">
.header__cursor {
	height: 6rem;
	position: fixed;
	top: 4rem;
	left: 4rem;
	background-color: transparent;
	box-shadow: 1px 2px 4px rgba($cursor-road, 0.5);
	border-radius: 2.5rem;
	padding: 0 3rem;
	display: flex;
	align-items: center;

	&.square {
		cursor: url("../../../assets/images/cursor/square.svg") 8 8, auto;
	}
	&.triangle {
		cursor: url("../../../assets/images/cursor/triangle.svg") 8 8, auto;
	}
	&.circle {
		cursor: url("../../../assets/images/cursor/circle.svg") 8 8, auto;
	}

	* {
		cursor: inherit;
	}
}
</style>
