<template>
	<main class="roadmap" data-barba="container" data-barba-namespace="roadmap">
		<h1>Roadmap</h1>
		<RoadmapList />
	</main>
</template>

<script>
import RoadmapList from "@/components/RoadmapList";

export default {
	name: "Roadmap",
	components: {
		RoadmapList,
	},
};
</script>
