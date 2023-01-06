<template>
  <div class="text-center py-4" id="services"><h3>OUR SERVICES</h3></div>

  <div class="row main_row_1">
    <div class="col-md-6 py-3 web">
      <img src="@/assets/pic2_web_services.svg" alt="" />
    </div>
    <div class="col-md-6 welcome1 pt-5 pe-5">
      <h3 class="pt-5">WEB DEVELOPMENT</h3>

      <p class="mb-3 pe-5">
        Lorem ipsum dolor site Lorem ipsum dolor siteLorem ipsum dolor siteLorem
        ipsum dolor site Lorem ipsum dolor site Lorem ipsum dolor siteLorem site
      </p>
      <router-link to="client/login" class="text-decoration-none">
        <base-button class="mb-5"
          >Request Now
          <FIcons
            class="Ficons Ficons3 rounded-pill ms-2"
            :icon="['fas', 'arrow-right']" /></base-button
      ></router-link>
    </div>
  </div>
  <div class="row main_row_2 text-light">
    <div class="col-md-6 welcome2 pt-5 ps-5 pe-5">
      <h3>UI/UX DESIGN</h3>

      <p class="mb-3 pe-5">
        Lorem ipsum dolor site Lorem ipsum dolor siteLorem ipsum dolor siteLorem
        ipsum dolor site Lorem ipsum dolor site Lorem ipsum dolor siteLorem
        ipsum dolor siteLorem ipsum dolor siteLorem ipsum dolor site Lorem ipsum
        dolor site Lorem ipsum dolor siteLorem ipsum dolor siteLorem ipsum dolor
        site
      </p>
      <router-link to="client/login" class="text-decoration-none">
        <base-button mode="light" class="mb-2"
          >Request Now
          <FIcons
            class="Ficons Ficons3 rounded-pill ms-2"
            :icon="['fas', 'arrow-right']" /></base-button
      ></router-link>
    </div>
    <div class="col-md-6 text-start">
      <img src="@/assets/pic3_ui-ux_services.svg" alt="" />
    </div>
  </div>
  <div class="row main_row_3 text-light">
    <div class="col-md-6 pe-5 py-5 security">
      <img src="@/assets/pic4_security_services.svg" alt="" />
    </div>

    <div class="col-md-6 welcome1 pt-5 pe-5">
      <h3 class="pt-5">WEB SECUROTY</h3>

      <p class="mb-3 pe-5">
        Lorem ipsum dolor site Lorem ipsum dolor siteLorem ipsum dolor siteLorem
        ipsum dolor site Lorem ipsum dolor site Lorem ipsum dolor siteLorem
        ipsum dolor siteLorem ipsum dolor site site Lorem ipsum dolor site Lorem
        ipsum dolor siteLorem ipsum dolor siteLorem ipsum dolor site Lorem ipsum
        dolor site Lorem ipsum dolor siteLorem ipsum dolor siteLorem ipsum dolor
        site
      </p>
      <router-link to="client/login" class="text-decoration-none">
        <base-button class="mb-5"
          >Request Now
          <FIcons
            class="Ficons Ficons3 rounded-pill ms-2"
            :icon="['fas', 'arrow-right']" /></base-button
      ></router-link>
    </div>
  </div>
</template>
    <script>
export default {
  name: "getStarted",
};
</script>
    <style scoped lang="scss">
img {
  height: 20rem;
  width: 30rem;
}
.web,
.security {
  padding-right: 20%;
}
.main_row_1 {
  background-color: #e2dcc8;
}
.main_row_2 {
  padding: 2rem 5rem;
  background-color: #0f3d3e;
}
.main_row_3 {
  background-color: #100f0f;
}
</style>
    