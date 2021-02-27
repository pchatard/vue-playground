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
	height: 60px;
	position: fixed;
	top: 40px;
	left: 40px;
	background-color: transparent;
	box-shadow: 1px 2px 4px rgba(#3dd6d0, 0.5);
	border-radius: 25px;
	padding: 0 30px;
	display: flex;
	align-items: center;
	cursor: inherit;

	* {
		cursor: inherit;
	}
}
</style>
