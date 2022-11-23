<template>
  <div class="row">
    <div class="col-md-7"><router-view></router-view></div>
    <div class="col-md-5 col-img"></div>
  </div>
</template>
<style lang="scss">
body {
}
.col-img {
  height: 100vh;
  background-image: url(../assets/LandingImage2svg.svg);
}
</style>