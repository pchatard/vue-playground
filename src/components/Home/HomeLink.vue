<template>
	<router-link :to="page.path" :class="page.class">
		<p :class="[{ wipTrue: page.wip }]">{{ page.wip ? "WIP" : "" }}</p>

		<img
			:src="require(`@/assets/images/${page.imgName}`)"
			:alt="page.altText"
		/>
		<h3 class="home__link__title">
			{{ page.name }}
		</h3>
		<!-- <p>{{ page.class === "wip" ? "WIP" : "" }}</p> -->
		<span></span>
	</router-link>
</template>

<script>
export default {
	name: "HomeLink",
	props: {
		page: {
			default: () => {},
			type: Object,
		},
	},
};
</script>

<style lang="scss" scoped>
a {
	aspect-ratio: 1/1;
	width: 175px;
	padding: 10px;
	border: 1px solid transparent;
	box-shadow: 0 0 2px rgba(black, 0.2);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;

	&.wip {
		color: $wip;

		img {
			width: 50px;
			animation-name: bounce;
		}

		span {
			background-color: $wip;
		}

		&:hover {
			border-color: $wip;
		}
	}

	&.cursor {
		img {
			width: 30px;
			animation-name: bounce;
		}

		span {
			background-color: $cursor-road;
		}

		&:hover {
			border-color: $cursor-road;
		}
	}

	&.hamburger {
		img {
			width: 60px;
			animation-name: bounce;
		}

		span {
			background-color: $hamburger-park;
		}

		&:hover {
			border-color: $hamburger-park;
		}
	}

	p.wipTrue {
		color: $wip;
		margin-bottom: auto;
	}

	img {
		position: relative;
		animation: 1s infinite alternate ease;
		margin-bottom: 20px;
		filter: drop-shadow(0 10px 5px rgba(black, 0.2));
	}

	span {
		margin-top: 10px;
		height: 4px;
		width: 50px;
		border-radius: 25%;
		opacity: 0;
	}

	&:hover {
		img {
			animation: none;
		}

		span {
			opacity: 1;
		}
	}
}

@keyframes bounce {
	0% {
		transform: translateY(0);
	}

	100% {
		transform: translateY(-5px);
	}
}
@keyframes wip {
	0% {
		transform: translateY(0);
	}

	100% {
		transform: translateY(-5px);
	}
}
</style>
