// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    meta: {
      requiresAuth: true,
      hideNavigation: false,
      hideAppBar: false,
    },
    children: [
      {
        path: "",
        name: "Home",

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
    ],
  },
  // {
  //   path: "/nav",
  //   name: "Navigation",
  //   component: () => import("@/components/navigation/navigation.vue"),
  // },
  {
    path: "/404",
    name: "404",
    meta: {
      hideNavigation: true,
      hideAppBar: true,
    },
    component: () => import("@/components/404.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      hideNavigation: true,
      hideAppBar: true,
    },
    component: () => import("@/views/login/login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
