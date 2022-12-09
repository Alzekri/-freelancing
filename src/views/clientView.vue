<template>
  <div class="maindiv">
    <NavBar />
    <div><router-view></router-view></div>
  </div>
</template>
<script>
import NavBar from "../components/Nav/navBarClient.vue";

export default {
  components: { NavBar },
};
</script>
<style scoped lang="scss">
.maindiv {
  background-color: #f1f1f1;
  height: 100%;
}
</style>