<template>
	<main class="transitions">
		<router-view></router-view>
		<div class="overlay first"></div>
		<div class="overlay second"></div>
		<div class="overlay third"></div>
		<div class="overlay fourth"></div>
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
			border: 1px solid red;
			background-color: white;
			aspect-ratio: 1/1;
			padding: 1rem;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;

			&.next {
				right: 5rem;
			}

			&.previous {
				left: 5rem;
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
		width: 100vw;
		height: 100vh;

		&.first {
			transform: translate(0, -100%);
			background-color: $transition-green;
		}

		&.second {
			transform: translate(-100%, 0);
			background-color: $transition-yellow;
		}

		&.third {
			transform: translate(0, 100%);
			background-color: $transition-blue;
		}

		&.fourth {
			transform: translate(100%, 0);
			background-color: $transition-dark;
		}
	}
}
</style>
