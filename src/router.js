import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage";
import AuthPage from "@/pages/AuthPage";

const routes = [
    {
        path: "/",
        name: "Home",
        meta:{layout:"main"},
        component: HomePage
    },
    {
        path: "/login",
        name: "login",
        meta:{layout:"auth"},
        component: AuthPage
    },
   ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;