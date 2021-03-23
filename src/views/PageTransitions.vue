<template>
	<main class="transitions">
		<router-view></router-view>
		<div class="overlay first"></div>
		<div class="overlay second"></div>
		<div class="overlay third"></div>
		<div class="overlay fourth top"></div>
		<div class="overlay fourth bottom"></div>
	</main>
</template>

<style lang="scss">
.transitions {
	&__page {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		display: grid;
		place-items: center;

		&__link {
			position: absolute;
			width: 8rem;
			top: 50%;
			transform: translate(0, -50%);
			background-color: $transition-street;
			box-shadow: 2px 2px 5px rgba($transition-street, 0.5);
			aspect-ratio: 1/1;
			padding: 1rem;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: bold;
			color: white !important;

			&.next {
				right: 5rem;
			}

			&.previous {
				left: 5rem;
			}

			&:hover {
				box-shadow: 2px 2px 20px rgba($transition-street, 0.5);
			}
		}

		h1 {
			font-size: 5rem;

			span {
				color: $transition-street;
			}
		}

		p {
			margin: 2rem 0;
		}
	}

	.overlay {
		position: fixed;
		z-index: 11;
		top: 0;

		&.first {
			width: 100vw;
			height: 120vh;
			transform: translate(0, -100%);
			background-color: $transition-yellow;
			clip-path: polygon(0 0, 100% 10vh, 100% 100%, 0 110vh);
		}

		&.second {
			width: 120vw;
			height: 100vh;
			transform: translate(100%, 0);
			background-color: $transition-green;
			clip-path: polygon(10vw 0, 100% 0, 110vw 100%, 0 100%);
		}

		&.third {
			width: 200vw;
			height: 200vh;
			border-radius: 50%;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) scale(0);
			background-color: $transition-blue;
		}

		&.fourth {
			width: 100vw;
			height: 100vh;
			background-color: $transition-dark;
			clip-path: polygon(0 0, 101% 0, 0 101%);

			&.top {
				transform: translate(0, -100%);
			}

			&.bottom {
				transform: translate(0, 100%) rotate(180deg);
			}
		}
	}
}
</style>
