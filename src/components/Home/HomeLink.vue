<template>
	<router-link :to="page.path" :class="page.class">
		<p :class="[{ wipTrue: page.wip }]">{{ page.wip ? "WIP" : "" }}</p>

		<img
			v-if="page.imgName"
			:src="require(`@/assets/images/${page.imgName}`)"
			:alt="page.altText"
		/>
		<span v-else :class="page.imgClassName">
			<span></span>
			<span></span>
			<span></span>
		</span>
		<h3 class="home__link__title">
			{{ page.name }}
		</h3>
		<span class="bar"> </span>
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
	width: 17.5rem;
	padding: 1rem;
	border: 1px solid transparent;
	box-shadow: 0 0 2px rgba(black, 0.2);
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;

	&.wip {
		color: $wip;

		img {
			width: 5rem;
			animation-name: bounce;
		}

		.bar {
			background-color: $wip;
		}

		&:hover {
			border-color: $wip;
		}
	}

	&.cursor {
		img {
			width: 3rem;
			animation-name: bounce;
		}

		.bar {
			background-color: $cursor-road;
		}

		&:hover {
			border-color: $cursor-road;
		}
	}

	&.hamburger {
		img {
			width: 6rem;
			animation-name: bounce;
		}

		.bar {
			background-color: $hamburger-park;
		}

		&:hover {
			border-color: $hamburger-park;
		}
	}

	&.transition {
		.bar {
			background-color: $transition-street;
		}

		&:hover {
			border-color: $transition-street;
		}

		.transition-img {
			width: 6rem;
			height: 5rem;
			margin-bottom: 2rem;
			display: flex;
			flex-direction: column;
			overflow: hidden;

			span {
				height: 33%;
				width: 120%;
				transform: translate(-100%, 0);
				background-color: $transition-yellow;
				clip-path: polygon(7.5% 0, 100% 0, 92.5% 100%, 0 100%);
				margin: 0.5px 0;

				&:first-of-type {
					animation: transition-anim 2.5s infinite ease;
				}
				&:nth-of-type(2) {
					animation: transition-anim 2.5s infinite ease 0.2s;
				}
				&:last-of-type {
					animation: transition-anim 2.5s infinite ease 0.4s;
				}
			}
		}
	}

	p.wipTrue {
		color: $wip;
		margin-bottom: auto;
	}

	img {
		position: relative;
		animation: 1s infinite alternate ease;
		margin-bottom: 2rem;
		filter: drop-shadow(0 10px 5px rgba(black, 0.2));
	}

	.bar {
		margin-top: 1rem;
		height: 0.4rem;
		width: 5rem;
		border-radius: 25%;
		opacity: 0;
	}

	&:hover {
		img {
			animation: none;
		}

		.bar {
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

@keyframes transition-anim {
	20%,
	80% {
		transform: translate(-7.5%, 0);
	}

	100% {
		transform: translate(100%, 0);
	}
}
</style>
