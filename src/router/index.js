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
		path: "/roadmap",
		name: "Roadmap",
		component: () => import("../views/Roadmap.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
