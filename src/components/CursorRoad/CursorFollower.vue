<template>
	<div
		class="cursor__follower"
		:style="{ transition: `transform ${followDelay}s ease` }"
	></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "CursorFollower",
	computed: {
		...mapGetters(["followDelay"]),
	},
};
</script>

<style lang="scss">
.cursor__follower {
	position: fixed;
	z-index: -100;
	top: -20px;
	left: -20px;
	width: 40px;
	height: 40px;
	border: 1px solid #3dd6d0;

	&.circle {
		border-radius: 50%;
	}

	&.triangle {
		border: none;
		background-color: rgba(#3dd6d0, 0.2);
		clip-path: polygon(0 100%, 50% 0, 100% 100%);
		-webkit-clip-path: polygon(0 100%, 50% 0, 100% 100%);
	}
}
</style>
