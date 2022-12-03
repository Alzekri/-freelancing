<template>
  <div class="maindiv">
    <NavBar />
    <MyProjects />
    <RequuestProject />
    <ContactUs />
  </div>
</template>
<script>
import NavBar from "../components/Nav/navBarClient.vue";
import MyProjects from "@/components/Client/myProjects.vue";
import RequuestProject from "@/components/Client/requestProject.vue";
import ContactUs from "@/components/Client/contactUs.vue";

export default {
  components: { NavBar, ContactUs, MyProjects, RequuestProject },
};
</script>
<style scoped lang="scss">
.maindiv {
  background-color: #f1f1f1;
  height: 100%;
}
</style>