<template>
	<main class="hamburgers">
		<h1>Welcome to <span>Hamburger Park</span></h1>
		<p>
			Welcome to Burger K... hum, Hamburger Park! Feel free to bite all of these
			crispy hamburgers with tasty hover effects
		</p>
		<ul class="hamburgers__grid">
			<chungi-yoo-hamburger />
			<collage-crafting-hamburger />
			<fossula-hamburger />
			<li class="hamburgers__grid__item empty">
				<img src="@/assets/images/hamburger.png" alt="Hamburger Icon" />
				<span>Coming Soon</span>
			</li>
			<li class="hamburgers__grid__item empty">
				<img src="@/assets/images/hamburger.png" alt="Hamburger Icon" />
				<span>Coming Soon</span>
			</li>
			<li class="hamburgers__grid__item empty">
				<img src="@/assets/images/hamburger.png" alt="Hamburger Icon" />
				<span>Coming Soon</span>
			</li>
			<li class="hamburgers__grid__item empty">
				<img src="@/assets/images/hamburger.png" alt="Hamburger Icon" />
				<span>Coming Soon</span>
			</li>
			<li class="hamburgers__grid__item empty">
				<img src="@/assets/images/hamburger.png" alt="Hamburger Icon" />
				<span>Coming Soon</span>
			</li>
			<li class="hamburgers__grid__item empty">
				<img src="@/assets/images/hamburger.png" alt="Hamburger Icon" />
				<span>Coming Soon</span>
			</li>
			<li class="hamburgers__grid__item empty">
				<img src="@/assets/images/hamburger.png" alt="Hamburger Icon" />
				<span>Coming Soon</span>
			</li>
		</ul>
		<p>
			<span>Hint</span>: Click on the hamburger title to visit the original
			website.
		</p>
	</main>
</template>

<script>
import ChungiYooHamburger from "../components/HamburgerPark/ChungiYooHamburger.vue";
import CollageCraftingHamburger from "../components/HamburgerPark/CollageCraftingHamburger.vue";
import FossulaHamburger from "../components/HamburgerPark/FossulaHamburger.vue";

export default {
	name: "HamburgerPark",
	components: {
		ChungiYooHamburger,
		CollageCraftingHamburger,
		FossulaHamburger,
	},
};
</script>

<style lang="scss">
.hamburgers {
	height: 100vh;
	display: grid;
	place-content: center;
	h1 {
		font-size: 4rem;

		span {
			color: $hamburger-park;
		}
	}
	p {
		margin: 2rem 0;
		span {
			color: $hamburger-park;
		}
	}

	&__grid {
		display: grid;
		place-items: center;
		grid-template-columns: repeat(5, 1fr);
		column-gap: 2rem;
		row-gap: 2rem;

		&__item {
			width: 15rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			&.empty {
				justify-content: center;
				align-items: center;
			}

			img {
				width: 10rem;
			}

			a {
				margin-bottom: 2rem;
			}

			span {
				font-size: 1.4rem;
			}
		}
	}
}
</style>
