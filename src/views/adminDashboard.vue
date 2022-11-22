<template>
  <div class="row mainDiv">
    <div class="col-3"><SideBareAdmin /></div>
    <div class="col-9 ps-5">
      <div class="row">
        <NavBarAdmin />
      </div>
      <div><router-view></router-view></div>
    </div>
  </div>
</template>
<script>
import SideBareAdmin from "../components/Nav/sideBareAdmin.vue";
import NavBarAdmin from "../components/Nav/navBarAdmin.vue";

export default {
  components: {
    SideBareAdmin,
    NavBarAdmin,
  },
};
</script>
<style lang="scss" scoped>
.mainDiv {
  margin-right: 0px;
}
</style>
