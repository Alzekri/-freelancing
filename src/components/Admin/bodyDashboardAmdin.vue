<template>
  <div class="row">
    <!--Clients and Managers-->

    <div class="col-md-6 ms-5 me-5">
      <div class="row mb-5 mt-5 divTotal1 align-items-center">
        <div class="col-md-8 ps-5">
          <h6 class="text-black-50">Total Number of Clients</h6>
          <h2>210 Clients</h2>
        </div>
        <div class="col-md-4 text-center p-5">
          <FIcons
            class="rounded-pill iconsize"
            :icon="['fas', 'calendar-days']"
          />
        </div>
      </div>
      <div class="row mt-5 divTotal2 align-items-center text-light">
        <div class="col-md-8 ps-5">
          <h6 class="text-white-50">Total Number of Managers</h6>
          <h2>6 Managers</h2>
        </div>
        <div class="col-md-4 text-center p-5">
          <FIcons class="rounded-pill iconsize" :icon="['fas', 'user-group']" />
        </div>
      </div>
    </div>
    <!--Students-->

    <div class="col-md-4 divtotal3 ms-4 mt-5 text-light text-center">
      <div class="row">
        <FIcons
          class="rounded-pill iconsize"
          :icon="['fas', 'graduation-cap']"
        />
      </div>
      <div class="row">
        <h6 class="text-white-50 mt-5">Total Number of Students</h6>
      </div>
      <div class="row"><h2>60 Students</h2></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.divTotal1 {
  background-color: #e2dcc8;
  height: 11rem;
  border-radius: 1.5rem;
}
.divTotal2 {
  background-color: black;
  height: 14rem;
  border-radius: 1.5rem;
}
.divtotal3 {
  background-color: #0f3d3e;
  padding-top: 7rem;
}
.iconsize {
  height: 2rem;
}
</style>