<template>
	<main class="cursors" :class="cursorType">
		<cursor-follower :class="[cursorType]" />
		<h1>Welcome to Cursor Road</h1>
		<cursor-selector />
	</main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CursorFollower from "../components/CursorRoad/CursorFollower.vue";
import CursorSelector from "../components/CursorRoad/CursorSelector.vue";
export default {
	name: "CursorRoad",
	components: { CursorSelector, CursorFollower },
	mounted() {
		this.$nextTick(() => {
			this.initCursorFollow();
		});
	},
	computed: { ...mapGetters(["cursorType", "cursorCoords"]) },
	methods: {
		...mapActions(["updateCursorCoords"]),
		initCursorFollow() {
			this.$parent.$el.addEventListener("mousemove", (e) => {
				this.updateCursorCoords({ x: e.clientX, y: e.clientY });
			});
			requestAnimationFrame(this.renderCursorFollow);
		},
		renderCursorFollow() {
			this.$children[0].$el.style.transform = `translate3d(${this.cursorCoords.x}px, ${this.cursorCoords.y}px, 0)`;
			requestAnimationFrame(this.renderCursorFollow);
		},
	},
};
</script>

<style lang="scss">
.cursors {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	* {
		cursor: inherit;
	}

	&.square {
		cursor: url("../assets/images/cursor/square.svg") 8 8, auto;
	}
	&.triangle {
		cursor: url("../assets/images/cursor/triangle.svg") 8 8, auto;
	}
	&.circle {
		cursor: url("../assets/images/cursor/circle.svg") 8 8, auto;
	}

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
