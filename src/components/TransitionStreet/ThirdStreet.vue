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
		<h1>Third Street</h1>
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
