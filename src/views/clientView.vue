<template>
  <navBar />
  <requestProject />
</template>
<script>
import navBar from "../components/Nav/navBarClient.vue";
import requestProject from "../components/Client/requestProject.vue";

export default {
  components: { navBar, requestProject },
};
</script>