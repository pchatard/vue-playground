<template>
	<div class="transitions__page fourth">
		<router-link
			to="/transitions/third"
			class="transitions__page__link previous"
		>
			Previous
		</router-link>
		<router-link to="/transitions/" class="transitions__page__link next">
			Next
		</router-link>
		<div>
			<h1>Welcome to <span>Fourth Street</span></h1>
			<p>
				In Fourth St, there is no story. I just wanted to use two overlays... 🤷🏽‍♂️
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
	name: "FourthStreet",
	beforeRouteLeave(to, _from, next) {
		showOverlay(to, next, "fourth");
	},
};
</script>
