<template>
	<main class="cursors" :class="cursorType">
		<h1>Welcome to Cursor Road</h1>
		<cursor-selector :cursor-type="cursorType" @cursor-type="onCursorType" />
	</main>
</template>

<script>
import CursorSelector from "../components/CursorRoad/CursorSelector.vue";
export default {
	name: "CursorRoad",
	components: { CursorSelector },
	data() {
		return {
			cursorType: "triangle",
		};
	},
	mounted() {
		if (this.$route.path === "/cursors") {
			setTimeout(() => {
				// console.log(
				document.querySelector(
					"#app"
				).childNodes[0].style.cursor = `url(${require("@/assets/images/cursor/" +
					this.cursorType +
					".svg")}) 16 16, auto`;
				// );
			}, 1);
		}
	},
	methods: {
		onCursorType(newCursorType) {
			this.cursorType = newCursorType;
			this.updateHeaderCursor(newCursorType);
		},
		updateHeaderCursor(cursorType) {
			let image = cursorType;
			let coords = "16 16";
			if (cursorType === "luffy") {
				image = cursorType + ".png";
			} else {
				image = image + ".svg";
			}
			document.querySelector(
				".header__cursor"
			).style.cursor = `url(${require("@/assets/images/cursor/" +
				image)}) ${coords}, auto`;
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

	&.square {
		cursor: url("../assets/images/cursor/square.svg") 16 16, auto;

		.cursor__selector,
		label {
			cursor: url("../assets/images/cursor/squareHover.svg") 16 16, auto;
		}
	}
	&.triangle {
		cursor: url("../assets/images/cursor/triangle.svg") 16 16, auto;

		.cursor__selector,
		label {
			cursor: url("../assets/images/cursor/triangleHover.svg") 16 16, auto;
		}
	}
	&.circle {
		cursor: url("../assets/images/cursor/circle.svg") 16 16, auto;

		.cursor__selector,
		label {
			cursor: url("../assets/images/cursor/circleHover.svg") 16 16, auto;
		}
	}
	&.luffy {
		cursor: url("../assets/images/cursor/luffy.png") 64 64, auto;

		.cursor__selector,
		label {
			cursor: url("../assets/images/cursor/luffy.png") 64 64, auto;
		}
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
