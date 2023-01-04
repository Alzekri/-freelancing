import { createRouter, createWebHistory } from "vue-router";
//LandingPage
import landingView from "../views/landingView.vue";
//Admin
import loginviewAdmin from "../views/loginAndSignup/loginAndSignupAdmin.vue";
import loginFormAdmin from "../components/LoginAndSignup/loginFormAdmin.vue";
import adminView from "../views/adminDashboard.vue";
import bodyManagerAdmin from "../components/Admin/bodyManagerAdmin.vue";
import bodyDashboardAmdin from "../components/Admin/bodyDashboardAmdin.vue";
//Client
import loginviewClient from "../views/loginAndSignup/loginAndSignupClient.vue";
import loginFormClient from "../components/LoginAndSignup/loginFormClient.vue";
import signupClient from "../components/LoginAndSignup/signupClient.vue";
import clientView from "../views/clientView.vue";
import myProjects from "../components/Client/myProjects.vue";
import requestProject from "../components/Client/requestProject.vue";
import contactUs from "../components/Client/contactUs.vue";

//Manager
import loginviewManager from "../views/loginAndSignup/loginAndSignupManager.vue";
import loginFormManager from "../components/LoginAndSignup/loginFormManager.vue";
import managerView from "../views/managerView.vue";
import approvedProjects from "../components/Manager/ApprovedProjects/approvedProjects.vue";
import projectRequests from "../components/Manager/ProjectRequests/projectRequests.vue";
import rankInterview from "../components/Manager/RankInterview/rankInterview.vue";
import roadMaps from "../components/Manager/RoadMaps/roadMaps.vue";
import submittedTasks from "../components/Manager/SubmittedTasks/submittedTasks.vue";
import tasksComponent from "../components/Manager/Tasks/tasksComponent.vue";
import teamRequests from "../components/Manager/TeamRequests/teamRequests.vue";
//Student
import loginviewStudent from "../views/loginAndSignup/loginAndSignupStudent.vue";
import loginFormStudent from "../components/LoginAndSignup/loginFormStudent.vue";
import signupStudent from "../components/LoginAndSignup/signupStudent.vue";
const routes = [
  //Landing
  {
    path: "/",
    name: "langingView",
    component: landingView,
  },

  //Admin
  //1-authintication
  {
    path: "/admin",
    component: loginviewAdmin,
    children: [{ path: "login", component: loginFormAdmin }],
  },
  //2-routing

  {
    path: "/admin",
    component: adminView,
    children: [
      { path: "dashboard", component: bodyDashboardAmdin },
      { path: "manager", component: bodyManagerAdmin },
    ],
  },

  //Client
  //1-authintication
  {
    path: "/client",
    component: loginviewClient,
    children: [
      { path: "login", component: loginFormClient },
      { path: "signup", component: signupClient },
    ],
  },
  //2-routing
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
  //2-routing
  {
    path: "/manager",
    component: managerView,
    children: [
      { path: "approvedprojects", component: approvedProjects },
      { path: "projectrequests", component: projectRequests },
      { path: "rank", component: rankInterview },
      { path: "roadmaps", component: roadMaps },
      { path: "submittedtask", component: submittedTasks },
      { path: "tasks", component: tasksComponent },
      { path: "teamrequests", component: teamRequests },
    ],
  },
  //1-authintication
  {
    path: "/manager",
    component: loginviewManager,
    children: [{ path: "login", component: loginFormManager }],
  },

  //Student
  //1-authintication
  {
    path: "/student",
    component: loginviewStudent,
    children: [
      { path: "login", component: loginFormStudent },
      { path: "signup", component: signupStudent },
    ],
  },
  //2-routing
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
