<template>
	<div class="home__menu">
		<home-link v-for="page in pages" :key="page.name" :page="page" />
	</div>
</template>

<script>
import HomeLink from "./HomeLink.vue";
export default {
	name: "HomeMenu",
	components: { HomeLink },
	data() {
		return {
			pages: [
				{
					path: "/cursors",
					name: "Cursor Road",
					imgName: "cursor.svg",
					altText: "Cursor Image",
					class: "cursor",
					wip: true,
				},
				{
					path: "/hamburgers",
					name: "Hamburger Park",
					imgName: "hamburger.png",
					altText: "Hamburger Icon",
					class: "hamburger",
					wip: false,
				},
				{
					path: "/transitions",
					name: "Transitions Street",
					imgClassName: "transition-img",
					class: "transition",
					wip: false,
				},
				// {
				// 	path: "/",
				// 	name: "Perspective Alley",
				// 	imgName: "DangerTriangle.svg",
				// 	altText: "Danger Triangle",
				// 	class: "wip",
				// wip: true,
				// },
			],
		};
	},
};
</script>

<style lang="scss">
.home__menu {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 2.5rem;
	row-gap: 2.5rem;
}
</style>
