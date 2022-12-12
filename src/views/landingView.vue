<template>
  <div class="row mainDiv">
    <div class="col-12"><navBar /></div>
    <div class="col-12"><getStarted /></div>
    <div class="col-12"><ourServices /></div>
    <div class="col-12"><footerView /></div>
  </div>
</template>

<script>
import navBar from "../components/landingC/NavBar.vue";
import getStarted from "../components/landingC/getStarted.vue";
import footerView from "../components/landingC/footerView.vue";
import ourServices from "../components/landingC/ourServices.vue";
export default {
  name: "HomeView",
  components: {
    navBar,
    getStarted,
    ourServices,
    footerView,
  },
};
//<FIcons :icon="['fas', 'user']" class="pt-5 ps-5" />
</script>
<style scoped lang="scss">
.mainDiv {
  margin-right: 0px;
}
</style>
