<template>
	<div class="transitions__page second">
		<router-link to="/transitions" class="transitions__page__link previous">
			Previous
		</router-link>
		<router-link to="/transitions/third" class="transitions__page__link next">
			Next
		</router-link>
		<h1>Second Street</h1>
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
