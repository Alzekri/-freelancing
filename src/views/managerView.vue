  <template>
  <div class="row mainDiv">
    <div class="col-3"><SideBarManager /></div>
    <div class="col-9">
      <projectRequests />
      <hr />
      <approvedProjects />
      <hr />
      <teamRequests />
      <hr />
      <TasksComponent />
      <hr />
      <rankInterview />
      <hr />
      <submittedTasks />
      <hr />
      <roadMaps />
      <div><router-view></router-view></div>
    </div>
  </div>
</template>
  <script>
import SideBarManager from "../components/Nav/sideBarManager.vue";
import projectRequests from "../components/Manager/ProjectRequests/projectRequests.vue";
import approvedProjects from "../components/Manager/ApprovedProjects/approvedProjects.vue";
import teamRequests from "../components/Manager/TeamRequests/teamRequests.vue";
import TasksComponent from "../components/Manager/Tasks/tasksComponent.vue";
import rankInterview from "../components/Manager/RankInterview/rankInterview.vue";
import submittedTasks from "../components/Manager/SubmittedTasks/submittedTasks.vue";
import roadMaps from "../components/Manager/RoadMaps/roadMaps.vue";

export default {
  components: {
    SideBarManager,
    projectRequests,
    approvedProjects,
    teamRequests,
    TasksComponent,
    rankInterview,
    submittedTasks,
    roadMaps,
  },
};
</script>
  <style lang="scss" scoped>
.mainDiv {
  margin-right: 0px;
}
</style>
