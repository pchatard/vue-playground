<template>
	<footer-roadmap v-if="$route.path === '/roadmap'" />
	<footer v-else-if="$route.path === '/'" class="footer">
		<div class="footer__links">
			<span>Links</span>
			<ul>
				<li>
					<router-link to="/roadmap">Roadmap</router-link>
				</li>
			</ul>
		</div>
		<div class="footer__copy">
			<span>Front-end Playground © {{ new Date().getFullYear() }}</span>
			<span>
				Created by
				<a
					href="https://pierrechatard.fr"
					target="_blank"
					rel="noopener noreferrer"
				>
					Pierre Chatard
				</a>
			</span>
			<span>v 0.1</span>
		</div>
	</footer>
</template>

<script>
import FooterRoadmap from "./FooterRoadmap.vue";

export default {
	name: "Footer",
	components: {
		FooterRoadmap,
	},
};
</script>

<style lang="scss">
.footer {
	height: 8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;
	color: white;
	font-size: 1.4rem;

	&__links,
	&__copy {
		width: 20%;
		display: flex;
		flex-direction: column;
	}

	&__links {
		ul {
			li {
				margin: 0.2rem 0;
			}
		}
	}

	&__copy {
		span {
			margin: 0.2rem 0;

			a {
				color: $hamburger-park;
			}
		}
	}
}
</style>
