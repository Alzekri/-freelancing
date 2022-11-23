import { createRouter, createWebHistory } from "vue-router";
import landingView from "../views/landingView.vue";
import adminView from "../views/adminDashboard.vue";
import bodyManagerAdmin from "../components/Admin/bodyManagerAdmin.vue";
import bodyDashboardAmdin from "../components/Admin/bodyDashboardAmdin.vue";
import loginview from "../views/loginAndSignup.vue";
import loginForm from "../components/LoginAndSignup/loginForm.vue";
import signupStudent from "../components/LoginAndSignup/signupStudent.vue";
import signupClient from "../components/LoginAndSignup/signupClient.vue";

const routes = [
  //Landing
  {
    path: "/",
    name: "langingView",
    component: landingView,
  },
  //Admin
  {
    path: "/admin",
    component: adminView,
    children: [
      { path: "dashboard", component: bodyDashboardAmdin },
      { path: "manager", component: bodyManagerAdmin },
    ],
  },
  //Login and Sign up
  {
    path: "/account",
    component: loginview,
    children: [
      { path: "login", component: loginForm },
      { path: "signups", component: signupStudent },
      { path: "signupc", component: signupClient },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
