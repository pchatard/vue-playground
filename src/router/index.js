import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FirstStreet from "../components/TransitionStreet/FirstStreet.vue";
import SecondStreet from "../components/TransitionStreet/SecondStreet.vue";
import ThirdStreet from "../components/TransitionStreet/ThirdStreet.vue";
import FourthStreet from "../components/TransitionStreet/FourthStreet.vue";
import { hideOverlay } from "../helpers/Transitions/transitions";

Vue.use(VueRouter);

export const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/cursors",
		name: "Cursor Road",
		component: () => import("../views/CursorRoad.vue"),
	},
	{
		path: "/hamburgers",
		name: "Hamburger Park",
		component: () => import("../views/HamburgerPark.vue"),
	},
	{
		path: "/transitions",
		component: () => import("../views/PageTransitions.vue"),
		children: [
			{
				path: "",
				name: "1 Transitions Street",
				component: FirstStreet,
			},
			{
				path: "second",
				name: "2 Transitions Street",
				component: SecondStreet,
			},
			{
				path: "third",
				name: "3 Transitions Street",
				component: ThirdStreet,
			},
			{
				path: "fourth",
				name: "4 Transitions Street",
				component: FourthStreet,
			},
		],
	},
	{
		path: "/roadmap",
		name: "Roadmap",
		component: () => import("../views/Roadmap.vue"),
	},
];

const router = new VueRouter({
	routes,
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
});

router.afterEach(hideOverlay);

export default router;
