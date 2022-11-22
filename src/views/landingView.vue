<template>
  <navBar />
  <getStarted />
  <ourServices />
  <footerView />
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
<style scoped>
</style>
