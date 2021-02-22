<template>
	<div id="app">
		<header id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/roadmap">Roadmap</router-link>
		</header>
		<router-view />
	</div>
</template>

<script>
export default {
	name: "app",
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
