<template>
	<header class="header__hamburger">
		<el-page-header
			@back="$router.push({ path: '/' })"
			title="Home"
			content="Hamburger Park"
		></el-page-header>
	</header>
</template>

<script>
export default {
	name: "HeaderHamburger",
};
</script>

<style lang="scss">
.header__hamburger {
	height: 6rem;
	position: fixed;
	top: 4rem;
	left: 4rem;
	background-color: transparent;
	box-shadow: 1px 2px 4px rgba($hamburger-park, 0.5);
	border-radius: 2.5rem;
	padding: 0 3rem;
	display: flex;
	align-items: center;
}
</style>
