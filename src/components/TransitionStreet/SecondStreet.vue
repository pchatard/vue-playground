<template>
	<div class="transitions__page second">
		<router-link to="/transitions" class="transitions__page__link previous">
			Previous
		</router-link>
		<router-link to="/transitions/third" class="transitions__page__link next">
			Next
		</router-link>
		<div>
			<h1>Welcome to <span>Second Street</span></h1>
			<p>
				In this street, you can take a slide on the beautiful and well
				maintained <span class="overlay-word">lawns</span>.
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
	name: "SecondStreet",
	beforeRouteLeave(to, _from, next) {
		showOverlay(to, next, "second");
	},
};
</script>
