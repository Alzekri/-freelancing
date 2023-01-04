<template>
  <div class="row me-0">
    <div class="col-md-7"><router-view></router-view></div>
    <div class="col-md-5 col-img">
      <img src="../../assets/LandingImage1svg.svg" alt="" />
    </div>
  </div>
</template>
<style lang="scss">
.col-img {
  height: 100vh;
  background-color: #e2dcc8;
  padding: {
    top: 13.5%;
  }
}

img {
  height: 20rem;
  width: 20rem;
  margin-left: 30%;
}
</style>