<template >
  <div class="text-center py-4" id="footer"><h3>ARE YOU STUDENT?</h3></div>
  <div class="row main_row_2 pt-3">
    <div class="col-md-6 welcome2 pt-5 ps-5 pe-5">
      <p>
        Lorem ipsum dolor site Lorem ipsum dolor siteLorem ipsum dolor siteLorem
        ipsum dolor site Lorem ipsum dolor site Lorem ipsum dolor siteLorem
        ipsum dolor siteLorem ipsum dolor site Lorem ipsum dolor site Lorem
        ipsum dolor siteLorem ipsum dolor siteLorem ipsum dolor site Lorem ipsum
        dolor site Lorem ipsum dolor siteLorem ipsum dolor siteLorem ipsum dolor
        site
      </p>
      <router-link to="student/login" class="text-decoration-none">
        <base-button mode="dark" class="mb-5"
          >Join us
          <FIcons
            class="Ficons Ficons3 rounded-pill ms-2"
            :icon="['fas', 'arrow-right']" /></base-button
      ></router-link>
    </div>
    <div class="col-md-6 text-start">
      <img src="@/assets/pic5_join_us.svg" alt="" />
    </div>
  </div>
  <div class="row main_row_3 text-light text-center">
    <div class="col-md-3 text-start pt-5 pb-2">
      <h3>LOGO</h3>
      <p class="text-white-50">
        Lorem ipsum dolor site Lorem ipsum dolor siteLorem ipsum dolor siteLorem
        ipsum dolor site Lorem ipsum dolor site Lorem ipsum dolor siteLorem
        ipsum dolor siteLorem ipsum dolor site Lorem ipsum dolor site Lorem site
      </p>
      <div class="row text-start">
        <FIcons class="rounded-pill col-md-1" :icon="['fab', 'facebook']" />
        <FIcons class="rounded-pill col-md-1" :icon="['fab', 'twitter']" />
        <FIcons class="rounded-pill col-md-1" :icon="['fab', 'linkedin']" />
      </div>
    </div>
    <div class="col-md-2 text-start p-5">
      <h3>Services</h3>
      <a class="text-white-50 mt-3 text-doc">Request Service</a>
      <a class="text-white-50">Browse Service</a>
    </div>
    <div class="col-md-2 text-start p-5">
      <h3>Join Us</h3>
      <a class="text-white-50 mt-3 text-doc">Login</a>
      <a class="text-white-50">Sign Up</a>
    </div>
    <div class="col-md-2 text-start p-5">
      <h3>Contacts</h3>
      <a class="text-white-50 mt-3 text-doc">contact@sustech.edu</a>
      <a class="text-white-50">Khartoum,Sudan</a>
    </div>
  </div>
</template>
      <script>
export default {
  name: "footerView",
};
</script>
      <style scoped lang="scss">
img {
  height: 20rem;
}
.main_row_2 {
  padding: 0rem 5rem;
  background-color: #f1f1f1;
}
a {
  text-decoration: none;
  display: block;
}
.main_row_3 {
  padding: 2rem;
  background-color: #100f0f;
}
</style>
      