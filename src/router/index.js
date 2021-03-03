import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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

export default router;
