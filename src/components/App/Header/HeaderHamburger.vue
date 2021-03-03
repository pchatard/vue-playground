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
	height: 60px;
	position: fixed;
	top: 40px;
	left: 40px;
	background-color: transparent;
	box-shadow: 1px 2px 4px rgba($hamburger-park, 0.5);
	border-radius: 25px;
	padding: 0 30px;
	display: flex;
	align-items: center;
}
</style>
