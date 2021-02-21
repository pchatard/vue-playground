<template>
	<li class="roadmap__list__item">
		<h3>
			{{ goal.title }}
		</h3>
		<p>{{ goal.description }}</p>
		<p :class="[{ done: goal.completed, todo: !goal.completed }]">
			{{ goal.completed ? "Done" : "Todo" }}
		</p>
		<ul>
			<li v-for="tag in goal.tags" :key="tag">{{ tag }}</li>
		</ul>
	</li>
</template>

<script>
export default {
	name: "RoadmapListItem",
	props: {
		goal: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

<style>
.roadmap__list__item {
	margin: 20px;
}

.roadmap__list__item > * {
	margin: 0;
}

.roadmap__list__item .done {
	color: green;
}

.roadmap__list__item .todo {
	color: red;
}

.roadmap__list__item ul {
	display: flex;
	justify-content: center;
}

.roadmap__list__item ul li {
	padding: 5px;
	width: 75px;
	border: 1px solid;
	border-radius: 5px;
	margin: 5px;
}
</style>
