  <template>
  <div class="row mainDiv">
    <div class="col-3"><SideBarManager /></div>
    <div class="col-9">
      <TasksComponent />

      <div><router-view></router-view></div>
    </div>
  </div>
</template>
  <script>
import SideBarManager from "../components/Nav/sideBarManager.vue";
import TasksComponent from "../components/Manager/SubmittedTasks/submittedTasks.vue";

export default {
  components: {
    SideBarManager,
    TasksComponent,
  },
};
</script>
  <style lang="scss" scoped>
.mainDiv {
  margin-right: 0px;
}
</style>
