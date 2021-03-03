<template>
	<li class="hamburgers__grid__item">
		<a
			href="https://collagecrafting.com/fr"
			target="_blank"
			rel="noopener noreferrer"
		>
			<h3>Collage Crafting</h3>
		</a>
		<div class="hamburger__container" @click="active = !active">
			<transition name="collagecrafting" appear>
				<div v-if="!active" class="collagecrafting-hamburger" key="hamburger">
					<div class="line"></div>
					<div class="line"></div>
					<div class="line"></div>
					<div class="line"></div>
				</div>
				<div v-else class="collagecrafting-close" key="close">
					<div class="line"></div>
					<div class="line"></div>
				</div>
			</transition>
		</div>
	</li>
</template>

<script>
export default {
	name: "CollageCraftingHamburger",
	data() {
		return {
			active: false,
		};
	},
};
</script>

<style lang="scss" scoped>
h3:hover {
	color: $hamburger-collage-primary;
}

.hamburger__container {
	width: 48px;
	aspect-ratio: 1/1;
	position: relative;
	cursor: pointer;
}

.collagecrafting {
	&-hamburger {
		position: absolute;
		width: 100%;
		height: 83%;
		top: 4px;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.line {
			width: 100%;
			height: 3px;
			background-color: $hamburger-collage-primary;
			transition: width 0.3s, background 0.3s;

			&:nth-of-type(2) {
				width: 75%;
			}
			&:last-of-type {
				width: 55%;
			}
		}

		&:hover {
			.line {
				background-color: $hamburger-collage-secondary;
				&:nth-of-type(2),
				&:last-of-type {
					width: 100%;
				}
			}
		}
	}

	&-close {
		position: absolute;
		width: 100%;
		height: 83%;
		top: 4px;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.line {
			&:first-of-type {
				transform: translateY(+50%) rotate(45deg);
			}
			&:last-of-type {
				transform: translateY(-50%) rotate(-45deg);
			}
			width: 56px;
			height: 3px;
			background-color: $hamburger-collage-secondary;
		}
	}
}

.collagecrafting-enter.collagecrafting-hamburger {
	transform: rotate(180deg) scale(0);
	opacity: 0;
}
.collagecrafting-enter.collagecrafting-close {
	transform: rotate(-180deg) scale(0);
	opacity: 0;
}

.collagecrafting-leave-to.collagecrafting-hamburger {
	transform: rotate(180deg) scale(0);
	opacity: 0;
}
.collagecrafting-leave-to.collagecrafting-close {
	transform: rotate(-180deg) scale(0);
	opacity: 0;
}

.collagecrafting-enter-to,
.collagecrafting-leave {
	transform: rotate(Odeg) scale(1);
	opacity: 1;
}

.collagecrafting-enter-active {
	transition: transform 0.5s cubic-bezier(0.76, 0.24, 0.29, 0.91),
		opacity 0.5s cubic-bezier(0.76, 0.24, 0.29, 0.91);
}
.collagecrafting-leave-active {
	transition: transform 0.5s cubic-bezier(0.76, 0.24, 0.29, 0.91),
		opacity 0.5s cubic-bezier(0.76, 0.24, 0.29, 0.91);
}
</style>
