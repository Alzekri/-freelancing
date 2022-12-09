<template>
  <div class="row mainDiv">
    <div class="col-3"><SideBarManager /></div>
    <div class="col-9">
      <div class="col-7">
        <NavBarManager />
      </div>
      <div><router-view></router-view></div>
    </div>
  </div>
</template>
<script>
import SideBarManager from "../components/Nav/sideBarManager.vue";
import NavBarManager from "../components/Nav/navBarManager.vue";

export default {
  components: {
    SideBarManager,
    NavBarManager,
  },
};
</script>
<style lang="scss" scoped>
.mainDiv {
  margin-right: 0px;
}
</style>
