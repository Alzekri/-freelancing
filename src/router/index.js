import { createRouter, createWebHistory } from "vue-router";
import landingView from "../views/landingView.vue";
import adminView from "../views/adminDashboard.vue";
import bodyManagerAdmin from "../components/Admin/bodyManagerAdmin.vue";
import bodyDashboardAmdin from "../components/Admin/bodyDashboardAmdin.vue";
import loginview from "../views/loginAndSignup.vue";
import loginForm from "../components/LoginAndSignup/loginForm.vue";
import signupStudent from "../components/LoginAndSignup/signupStudent.vue";
import signupClient from "../components/LoginAndSignup/signupClient.vue";
import clientView from "../views/clientView.vue";
import managerView from "../views/managerView.vue";
import myProjects from "../components/Client/myProjects.vue";
import requestProject from "../components/Client/requestProject.vue";
import contactUs from "../components/Client/contactUs.vue";

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
  //Client
  {
    path: "/client",
    component: clientView,
    children: [
      { path: "projects", component: myProjects },
      { path: "request", component: requestProject },
      { path: "contact", component: contactUs },
    ],
  },

  //Manager
  {
    path: "/manager",
    component: managerView,
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
