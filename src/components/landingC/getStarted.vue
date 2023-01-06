<template>
  <div class="row main_row">
    <div class="col-md-6 welcome pe-5">
      <h3>WELCOME TO</h3>
      <h3>SUST <span>FREELANCING</span> PLATFORM</h3>
      <p class="mb-3">
        Lorem ipsum dolor site Lorem ipsum dolor siteLorem ipsum dolor siteLorem
        ipsum dolor site Lorem ipsum dolor site Lorem ipsum dolor siteLorem
        ipsum dolor
      </p>
      <router-link to="choose" class="text-decoration-none">
        <base-button
          >Get Started
          <FIcons
            class="Ficons Ficons3 rounded-pill ms-2"
            :icon="['fas', 'arrow-right']" /></base-button
      ></router-link>
    </div>
    <div class="col-md-6 pt-3">
      <img src="@/assets/pic1_hero_section.svg" alt="" />
    </div>
  </div>
</template>
    <script>
export default {
  name: "getStarted",
};
</script>
    <style scoped lang="scss">
.main_row {
  padding: 4rem;
  background-color: #f1f1f1;
}
.main_row {
  .welcome {
    padding-top: 7rem;
    span {
      color: #0f3d3e;
    }
  }
}

img {
  height: 20rem;
  width: 30rem;
}
</style>