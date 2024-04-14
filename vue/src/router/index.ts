import { createRouter, createWebHistory } from "vue-router";

import AVue from "@/pages/results/a/A.vue";
import BVue from "@/pages/results/b/B.vue";
import CVue from "@/pages/results/c/C.vue";
import DVue from "@/pages/results/d/D.vue";
import EVue from "@/pages/results/e/E.vue";
import FVue from "@/pages/results/f/F.vue";
import GVue from "@/pages/results/g/G.vue";
import HVue from "@/pages/results/h/H.vue";
import HomeVue from "@/pages/Home.vue";
import IVue from "@/pages/results/i/I.vue";
import JVue from "@/pages/results/j/J.vue";
import KVue from "@/pages/results/k/K.vue";
import LVue from "@/pages/results/l/L.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeVue,
        },
        {
            path: "/results/a",
            name: "a",
            component: AVue,
        },
        {
            path: "/results/b",
            name: "b",
            component: BVue,
        },
        {
            path: "/results/c",
            name: "c",
            component: CVue,
        },
        {
            path: "/results/d",
            name: "d",
            component: DVue,
        },
        {
            path: "/results/e",
            name: "e",
            component: EVue,
        },
        {
            path: "/results/f",
            name: "f",
            component: FVue,
        },
        {
            path: "/results/g",
            name: "g",
            component: GVue,
        },
        {
            path: "/results/h",
            name: "h",
            component: HVue,
        },
        {
            path: "/results/i",
            name: "i",
            component: IVue,
        },
        {
            path: "/results/j",
            name: "j",
            component: JVue,
        },
        {
            path: "/results/k",
            name: "k",
            component: KVue,
        },
        {
            path: "/results/l",
            name: "l",
            component: LVue,
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../views/AboutView.vue')
        // }
    ],
});

export default router;
