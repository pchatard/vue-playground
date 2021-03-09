<template>
	<main class="transitions">
		<h1>Welcome to <span>Page Transitions</span></h1>
		<p>Let's explore some smooth page transitions.</p>
	</main>
</template>

<style lang="scss">
.transitions {
	height: 100vh;
	display: grid;
	place-content: center;

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
</style>
