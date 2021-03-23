<template>
	<div class="transitions__page third">
		<router-link
			to="/transitions/second"
			class="transitions__page__link previous"
		>
			Previous
		</router-link>
		<router-link to="/transitions/fourth" class="transitions__page__link next">
			Next
		</router-link>
		<div>
			<h1>Welcome to <span>Third Street</span></h1>
			<p>
				In Third St, there are many children. Be careful to that
				<span class="overlay-word">ball</span> coming at you!
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
	name: "ThirdStreet",
	beforeRouteLeave(to, _from, next) {
		showOverlay(to, next, "third");
	},
};
</script>
