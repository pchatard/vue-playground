<template>
	<header class="header__transition">
		<el-page-header
			@back="$router.push({ path: '/' })"
			title="Home"
			content="Transitions Street"
		></el-page-header>
	</header>
</template>

<script>
export default {
	name: "HeaderTransition",
};
</script>

<style lang="scss">
.header__transition {
	height: 6rem;
	position: fixed;
	z-index: 10;
	top: 4rem;
	left: 4rem;
	background-color: white;
	box-shadow: 1px 2px 4px rgba($transition-street, 0.5);
	border-radius: 2.5rem;
	padding: 0 3rem;
	display: flex;
	align-items: center;
}
</style>
