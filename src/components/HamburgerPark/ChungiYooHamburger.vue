<template>
	<li class="hamburgers__grid__item">
		<a
			href="https://www.chungiyoo.com/"
			target="_blank"
			rel="noopener noreferrer"
			><h3>Chungi Yoo</h3>
		</a>
		<div class="hamburger__container" @click="active = !active">
			<div class="chungiyoo-hamburger" :class="{ active }" key="hamburger">
				<div class="line"></div>
				<div class="line"></div>
			</div>
		</div>
	</li>
</template>

<script>
export default {
	name: "ChungiYooHamburger",
	data() {
		return {
			active: false,
		};
	},
};
</script>

<style lang="scss" scoped>
h3:hover {
	color: $hamburger-chungiyoo-primary;
}

.hamburger__container {
	width: 48px;
	aspect-ratio: 1/1;
	position: relative;
	cursor: pointer;
}

.chungiyoo {
	&-hamburger {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;

		.line {
			position: absolute;
			width: 100%;
			height: 3px;
			background-color: $hamburger-chungiyoo-primary;
			transition: transform 0.4s linear;

			&:first-of-type {
				transform: translateY(16px);
			}

			&:last-of-type {
				transform: translateY(32px);
			}
		}

		&.active {
			.line {
				&:first-of-type {
					transform: translateY(32px) rotate(-315deg);
				}
				&:last-of-type {
					transform: translateY(32px) rotate(-225deg);
				}
			}
		}

		&:hover {
			.line {
				&:first-of-type {
					transform: translateY(16px) rotate(-180deg);
				}

				&:last-of-type {
					transform: translateY(32px) rotate(-180deg);
				}
			}
			&.active {
				.line {
					&:first-of-type {
						transform: translateY(32px) rotate(-135deg);
					}
					&:last-of-type {
						transform: translateY(32px) rotate(-45deg);
					}
				}
			}
		}
	}
}
</style>
