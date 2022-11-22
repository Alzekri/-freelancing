import { createRouter, createWebHistory } from "vue-router";
import landingView from "../views/landingView.vue";
import adminView from "../views/adminDashboard.vue";
import bodyManagerAdmin from "../components/Admin/bodyManagerAdmin.vue";
import bodyDashboardAmdin from "../components/Admin/bodyDashboardAmdin.vue";

const routes = [
  {
    path: "/",
    name: "langingView",
    component: landingView,
  },
  {
    path: "/admin",
    component: adminView,
    children: [
      { path: "dashboard", component: bodyDashboardAmdin },
      { path: "manager", component: bodyManagerAdmin },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
