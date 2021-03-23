<template>
	<div class="transitions__page first">
		<router-link
			to="/transitions/fourth"
			class="transitions__page__link previous"
		>
			Previous
		</router-link>
		<router-link to="/transitions/second" class="transitions__page__link next">
			Next
		</router-link>
		<div>
			<h1>Welcome to <span>Transitions Street</span></h1>
			<p>
				In this neighbourhood, you'll be able to admire beautiful handmade page
				transitions.
			</p>
			<p>
				The first effect will just slide from the sky like a
				<span class="overlay-word">sunset</span>.
			</p>
			<p class="click-invitation">
				Try clicking <span>Next</span> or <span>Previous</span> to take a walk
				down our streets !
			</p>
		</div>
	</div>
</template>

<script>
import { showOverlay } from "@/helpers/Transitions/transitions";

export default {
	name: "FirstStreet",
	beforeRouteLeave(to, _from, next) {
		showOverlay(to, next, "first");
	},
};
</script>

<style lang="scss">
.transitions__page {
	p {
		font-size: 2rem;

		&.click-invitation {
			font-size: 1.6rem;
			span {
				color: $transition-street;
				font-weight: bold;
			}
		}
	}
	&.first span.overlay-word {
		font-size: 2.2rem;
		font-weight: bold;
		color: $transition-yellow;
	}
	&.second span.overlay-word {
		font-size: 2.2rem;
		font-weight: bold;
		color: $transition-green;
	}
	&.third span.overlay-word {
		font-size: 2.2rem;
		font-weight: bold;
		color: $transition-blue;
	}
}
</style>
