<template>
	<div class="transitions__page fourth">
		<router-link
			to="/transitions/third"
			class="transitions__page__link previous"
		>
			Previous
		</router-link>
		<h1>Fourth Street</h1>
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
