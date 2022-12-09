<template>
  <div class="mainDiv pt-5 ps-lg-5 sticky-top">
    <div class="row mb-5"><h4>LOGO</h4></div>
    <div class="row IconDashboard">
      <div class="col-12 text-start mt-5">
        <router-link to="dashboard">
          <base-button class="py-lg-3 pe-lg-5" mode="">
            <FIcons
              class="rounded-pill ms-lg-2 me-lg-4"
              :icon="['fas', 'gear']"
            />
            Dashboard
          </base-button>
        </router-link>
      </div>
    </div>
    <div class="row IconDashboard">
      <div class="col-12 text-start mt-5">
        <router-link to="manager">
          <base-button class="py-lg-3 pe-lg-5 mb-lg-5" mode="  ">
            <FIcons
              class="rounded-pill ms-3 me-4"
              :icon="['fas', 'user-group']"
            />Manager
          </base-button>
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-12 text-center mt-5">
        <div class="accountIcon pt-2 mt-4">
          <FIcons class="rounded-pill text-light" :icon="['fas', 'user']" />
        </div>
      </div>
      <div class="col-9 text-center mt-2"><h6>Ahmed ALi</h6></div>
      <div class="col-9 text-center text-black-50">
        <h6>ahmed@gmail.com</h6>
      </div>
      <div class="col-9 text-end text-black-50 pt-2">
        <div class="row">
          <div class="col-7 text-end">
            <h6>Logout</h6>
          </div>
          <div class="col-5 text-start">
            <FIcons
              class="rounded-pill"
              :icon="['fas', 'right-from-bracket']"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>


<style scoped lang="scss">
.mainDiv {
  background-color: #e2dcc8;
  height: 100vh;
}

.accountIcon {
  background-color: black;
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  margin-left: 27%;
}
</style>
