<template>
	<main
		class="cursors"
		:class="[cursor, cursor === 'custom' && customCursor.type]"
	>
		<h1>Welcome to <span>Cursor Road</span></h1>
		<p>Choose a cursor effect</p>
		<cursor-follower
			:class="[cursor, cursor === 'custom' && customCursor.type]"
		/>
		<el-select
			:value="cursor"
			@change="updateCursor"
			popper-class="popup-select"
		>
			<el-option label="Custom Cursor" value="custom"></el-option>
			<el-option label="Castor & Pollux" value="castor"></el-option>
		</el-select>
		<cursor-selector v-show="cursor === 'custom'" />
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
	computed: { ...mapGetters(["cursor", "customCursor"]) },
	methods: {
		...mapActions(["updateCursor", "updateCustomCursorFollowCoords"]),
		initCursorFollow() {
			this.$parent.$el.addEventListener("mousemove", (e) => {
				this.updateCustomCursorFollowCoords({ x: e.clientX, y: e.clientY });
			});
			requestAnimationFrame(this.renderCursorFollow);
		},
		renderCursorFollow() {
			this.$children[0].$el.style.transform = `translate3d(${this.customCursor.follower.coords.x}px, ${this.customCursor.follower.coords.y}px, 0)`;
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
		font-size: 5rem;

		span {
			color: $cursor-road;
		}

		&:hover ~ .cursor__follower.castor {
			top: -2.5rem;
			left: -2.5rem;
			width: 5rem;
			height: 5rem;
		}
	}

	p {
		font-size: 1.8rem;
		margin: 2rem 0;
	}

	.hover-btn {
		padding: 1.5rem;
		border: 2px solid #3dd6d0;
		border-radius: 1.5rem;
		cursor: url("../assets/images/DangerTriangle.svg") 16 16, auto;
	}
}

.el-select .el-input__inner {
	padding: 2.5rem;
	border-radius: 25px;
	font-size: 1.5rem;
	border-width: 2px;
}

.el-select:hover .el-input__inner {
	border-color: $cursor-road;
}

.el-select-dropdown__item {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
