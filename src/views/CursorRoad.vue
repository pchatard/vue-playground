<template>
	<main
		class="cursors"
		:class="[cursor, cursor === 'custom' && customCursor.type]"
	>
		<div class="cursors__hero">
			<h1
				@mouseenter="castorCursorActive = true"
				@mouseleave="castorCursorActive = false"
			>
				Welcome to <span>Cursor Road</span>
			</h1>
			<p>Choose a cursor effect</p>
			<cursor-follower
				:class="[
					cursor,
					cursor === 'custom' && customCursor.type,
					castorCursorMedium && 'castor-medium',
					castorCursorActive && 'castor-active',
				]"
			/>
			<div
				@mouseenter="castorCursorMedium = true"
				@mouseleave="castorCursorMedium = false"
			>
				<el-select
					:value="cursor"
					@change="updateCursor"
					popper-class="popup-select"
				>
					<el-option label="Custom Cursor" value="custom"></el-option>
					<el-option label="Castor & Pollux" value="castor"></el-option>
				</el-select>
			</div>
			<cursor-selector v-show="cursor === 'custom'" />
			<p>Scroll down to see some hover effects</p>
		</div>

		<div class="cursors__links__container">
			<h2>Some of my projects, try hovering those links</h2>
			<a
				href="https://www.pierrechatard.fr"
				target="_blank"
				rel="noopener noreferrer"
				@mousemove.self="handleLinkHover"
				@mouseenter="castorCursorMedium = true"
				@mouseleave="castorCursorMedium = false"
			>
				Portfolio
				<img
					src="@/assets/images/cursor/portfolio.png"
					alt="Portfolio Preview"
				/>
			</a>

			<a
				href="https://giftlist-blue.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
				@mousemove.self="handleLinkHover"
				@mouseenter="castorCursorMedium = true"
				@mouseleave="castorCursorMedium = false"
			>
				GiftList
				<img src="@/assets/images/cursor/giftlist.png" alt="Giftlist Preview" />
			</a>

			<a
				href="https://starsandstripe.netlify.app/"
				target="_blank"
				rel="noopener noreferrer"
				@mousemove.self="handleLinkHover"
				@mouseenter="castorCursorMedium = true"
				@mouseleave="castorCursorMedium = false"
			>
				Stars and Stripe
				<img
					src="@/assets/images/cursor/stars.png"
					alt="Stars and Stripe Preview"
				/>
			</a>
		</div>
	</main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CursorFollower from "../components/CursorRoad/CursorFollower.vue";
import CursorSelector from "../components/CursorRoad/CursorSelector.vue";

export default {
	name: "CursorRoad",
	components: { CursorSelector, CursorFollower },
	data() {
		return {
			linkMousePosition: {
				x: 0,
				y: 0,
			},
			castorCursorMedium: false,
			castorCursorActive: false,
		};
	},
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
		handleLinkHover(e) {
			this.linkMousePosition = {
				x: e.offsetX,
				y: e.offsetY,
			};
			requestAnimationFrame(() =>
				this.updateImagePosition(e.target.childNodes[1])
			);
		},
		updateImagePosition(image) {
			image.style.left = `calc(25% + ${this.linkMousePosition.x / 3}px)`;
			image.style.top = `calc(50% + ${this.linkMousePosition.y / 3}px)`;
		},
	},
};
</script>

<style lang="scss">
.cursors {
	display: flex;
	flex-direction: column;
	align-items: center;

	&__hero {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

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
	}

	p {
		font-size: 1.8rem;
		margin: 2rem 0;
	}

	&__links__container {
		min-height: 100vh;
		width: 70%;
		margin-top: 5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h2 {
			margin-bottom: 5rem;
		}

		a {
			text-align: left;
			padding: 2rem;
			padding-left: 4rem;
			margin: 1rem 0;
			width: 100%;
			border: 1px solid rgba(black, 0.2);
			border-radius: 5px;
			position: relative;
			font-size: 3.5rem;
			text-transform: uppercase;
			font-style: italic;
			font-weight: bold;
			cursor: pointer;

			&:hover {
				color: $cursor-road;
			}

			&:hover img {
				display: block;
			}

			img {
				width: 40rem;
				z-index: -1;
				display: none;
				position: absolute;
				transform: translateY(-50%) matrix(1, 0.1, -0.2, 1, 0, 0);
				box-shadow: 0px 0px 15px 10px rgba(black, 0.2);
			}
		}
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
