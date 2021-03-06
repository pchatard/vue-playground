<template>
	<div class="cursor__follower" :style="{ transition }"></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "CursorFollower",
	computed: {
		...mapGetters(["cursor", "customCursor"]),
		transition() {
			switch (this.cursor) {
				case "castor":
					return `all .4s ease, transform 0.15s ease`;
				case "custom":
					return `transform ${this.customCursor.follower.delay}s ease`;
				default:
					return "all .4s ease";
			}
		},
	},
};
</script>

<style lang="scss">
.cursor__follower {
	&.custom {
		position: fixed;
		z-index: -100;
		top: -2rem;
		left: -2rem;
		width: 4rem;
		height: 4rem;
		border: 1px solid #3dd6d0;
		&.circle {
			border-radius: 50%;
		}

		&.triangle {
			border: none;
			background-color: rgba(#3dd6d0, 0.2);
			clip-path: polygon(0 100%, 50% 0, 100% 100%);
			-webkit-clip-path: polygon(0 100%, 50% 0, 100% 100%);
		}
	}

	&.castor {
		position: fixed;
		z-index: -100;
		top: 2rem;
		left: 2rem;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		background-color: red;
	}
}
</style>
