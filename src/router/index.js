import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/skills",

    name: "Skills",
    component: () => import("../views/Skills.vue"),
  },
  {
    path: "/works",
    redirect: "works/bocachica",
    component: () => import("../views/Works.vue"),
    children: [
      {
        path: ":id",
        name: "works",
        component: () => import("../components/Showcase.vue"),
      },
    ],
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
