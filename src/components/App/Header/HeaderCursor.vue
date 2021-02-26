<template>
	<header class="header__cursor" ref="test">
		<el-page-header
			@back="$router.push({ path: '/' })"
			title="Home"
			content="Cursor Road"
		></el-page-header>
	</header>
</template>

<script>
export default {
	name: "HeaderCursor",
};
</script>

<style lang="scss">
.header__cursor {
	height: 80px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: transparent;
	padding: 0 50px;
	display: flex;
	align-items: center;

	* {
		cursor: inherit;
	}
}
</style>
