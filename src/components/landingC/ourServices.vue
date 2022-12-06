<template>
  <div class="text-center py-4" id="services"><h3>OUR SERVICES</h3></div>

  <div class="row main_row_1">
    <div class="col-md-6 pt-5 pe-5">
      <div class="pe-5">
        <img
          src="@/assets/LandingImage2svg.svg"
          class="img-fluid pe-5"
          alt=""
        />
      </div>
    </div>
    <div class="col-md-6 welcome1 pt-5 pe-5">
      <h3 class="pt-5">WEB DEVELOPMENT</h3>

      <p class="mb-3 pe-5">
        Lorem ipsum dolor site Lorem ipsum dolor siteLorem ipsum dolor siteLorem
        ipsum dolor site Lorem ipsum dolor site Lorem ipsum dolor siteLorem site
      </p>
      <base-button
        >Request Now
        <FIcons
          class="Ficons Ficons3 rounded-pill ms-2"
          :icon="['fas', 'arrow-right']"
      /></base-button>
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
      <base-button mode="light"
        >Request Now
        <FIcons
          class="Ficons Ficons3 rounded-pill ms-2"
          :icon="['fas', 'arrow-right']"
      /></base-button>
    </div>
    <div class="col-md-6 text-start">
      <img src="@/assets/LandingImage3svg.svg " class="img ps-5" alt="" />
    </div>
  </div>
  <div class="row main_row_3 text-light">
    <div class="col-md-6 pe-5 py-5">
      <img src="@/assets/img4.png" class="img-fluid pe-5" alt="" />
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
      <base-button
        >Request Now
        <FIcons
          class="Ficons Ficons3 rounded-pill ms-2"
          :icon="['fas', 'arrow-right']"
      /></base-button>
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
.main_row_1 {
  background-color: #e2dcc8;
}
.main_row_2 {
  margin-right: 0;
  padding: 2rem 5rem;
  background-color: #0f3d3e;
}
.main_row_3 {
  margin-right: 0;
  background-color: #100f0f;
}
</style>
    