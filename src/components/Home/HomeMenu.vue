<template>
	<div class="home__menu">
		<HomeLink v-for="page in pages" :key="page.name" :page="page" />
	</div>
</template>

<script>
export default {
	name: "HomeMenu",
	components: { HomeLink: () => import("@/components/Home/HomeLink") },
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
					path: "/",
					name: "Transition Street",
					imgName: "DangerTriangle.svg",
					altText: "Danger Triangle",
					class: "wip",
					wip: true,
				},
				// {
				// 	path: "/",
				// 	name: "Loader Park",
				// 	imgName: "DangerTriangle.svg",
				// 	altText: "Danger Triangle",
				// 	class: "wip",
				// wip: true,
				// },
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
	column-gap: 25px;
	row-gap: 25px;
}
</style>
