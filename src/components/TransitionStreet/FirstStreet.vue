<template>
	<div class="transitions__page first">
		<router-link to="/transitions/second" class="transitions__page__link next">
			Next
		</router-link>
		<h1>Welcome to <span>Transitions Street</span></h1>
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
