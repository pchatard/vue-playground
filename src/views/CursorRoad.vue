<template>
	<main class="cursors" :class="cursorType">
		<cursor-follower :class="[cursorType]" />
		<h1>Welcome to Cursor Road</h1>
		<cursor-selector
			:cursor-type="cursorType"
			@cursor-type="changeCursorType"
			@delay="updateDelay"
		/>
	</main>
</template>

<script>
import CursorFollower from "../components/CursorRoad/CursorFollower.vue";
import CursorSelector from "../components/CursorRoad/CursorSelector.vue";
export default {
	name: "CursorRoad",
	components: { CursorSelector, CursorFollower },
	data() {
		return {
			cursorType: "square",
			clientX: -100,
			clientY: -100,
		};
	},
	mounted() {
		if (this.$route.path === "/cursors") {
			this.$nextTick(() => {
				this.setHeaderCursor();
				this.initCursorFollow();
			});
		}
	},
	methods: {
		initCursorFollow() {
			this.$parent.$el.addEventListener("mousemove", (e) => {
				this.clientX = e.clientX;
				this.clientY = e.clientY;
			});
			requestAnimationFrame(this.renderCursorFollow);
		},
		renderCursorFollow() {
			this.$children[0].$el.style.transform = `translate3d(${this.clientX}px, ${this.clientY}px, 0) scale(1)`;
			requestAnimationFrame(this.renderCursorFollow);
		},
		changeCursorType(newCursorType) {
			this.cursorType = newCursorType;
			this.setHeaderCursor(newCursorType);
		},
		setHeaderCursor(cursorType = this.cursorType) {
			let image = cursorType + ".svg";
			let coords = "8 8";
			this.$parent.$children[0].$el.style.cursor = `url(${require("@/assets/images/cursor/" +
				image)}) ${coords}, auto`;
		},
		updateDelay(newDelay) {
			this.$children[0].$el.style.transition = `transform ${newDelay}s ease`;
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
