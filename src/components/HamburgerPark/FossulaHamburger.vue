<template>
	<li class="hamburgers__grid__item">
		<a href="https://fossula.com/" target="_blank" rel="noopener noreferrer">
			<h3>Fossula</h3>
		</a>
		<div class="hamburger__container" @click="active = !active">
			<transition name="fossula" appear>
				<div v-if="!active" class="fossula-hamburger" key="hamburger">
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
				</div>
				<div v-else class="fossula-close" key="close">
					<div class="line"></div>
					<div class="line"></div>
				</div>
			</transition>
		</div>
	</li>
</template>

<script>
export default {
	name: "FossulaHamburger",
	data() {
		return {
			active: false,
		};
	},
};
</script>

<style lang="scss" scoped>
h3:hover {
	color: $hamburger-fossula-primary;
}

.hamburger__container {
	width: 48px;
	aspect-ratio: 1/1;
	position: relative;
	cursor: pointer;
}

.fossula {
	&-hamburger {
		position: absolute;
		width: 83.5%;
		aspect-ratio: 1/1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		.dot {
			position: absolute;
			width: 13px;
			height: 13px;
			border-radius: 50%;
			background-color: $hamburger-fossula-primary;

			&:nth-of-type(2) {
				top: 0;
				right: 0;
			}

			&:nth-of-type(3) {
				bottom: 0;
				left: 0;
			}

			&:last-of-type {
				bottom: 0;
				right: 0;
			}
		}
	}

	&-close {
		position: absolute;
		width: 83.5%;
		aspect-ratio: 1/1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		justify-content: center;
		align-items: center;

		.line {
			position: absolute;
			width: 40px;
			height: 2px;
			background-color: $hamburger-fossula-primary;

			&:first-of-type {
				transform: rotate(45deg);
			}
			&:last-of-type {
				transform: rotate(-45deg);
			}
		}
	}
}

.fossula-enter.fossula-hamburger,
.fossula-leave-to.fossula-hamburger {
	transform: translate(-50%, -50%) rotate(-45deg);
	opacity: 0;
}
.fossula-enter.fossula-close,
.fossula-leave-to.fossula-close {
	transform: translate(-50%, -50%) rotate(45deg);
	opacity: 0;
}

.fossula-enter-to,
.fossula-leave {
	transform: translate(-50%, -50%) rotate(Odeg);
	opacity: 1;
}

.fossula-enter-active {
	transition: transform 0.5s cubic-bezier(0.83, 0.01, 0.2, 1.01),
		opacity 0.4s cubic-bezier(0.83, 0.01, 0.2, 1.01);
}
.fossula-leave-active {
	transition: transform 0.5s cubic-bezier(0.83, 0.01, 0.2, 1.01),
		opacity 0.4s cubic-bezier(0.83, 0.01, 0.2, 1.01);
}
</style>
