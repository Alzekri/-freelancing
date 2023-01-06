<template>
  <div class="row text-center mainDiv">
    <div class="col-12">
      <img src="@/assets/pic7_title.svg" class="imgtitle mt-5" />
      <h1 class="fw-bold text-dark">Choose your login character</h1>
      <p class="text-black-50">
        please choose between login as client <br />
        or login as student
      </p>
    </div>
    <div class="row d-flex justify-content-center row2 mb-4">
      <div class="col-md-3 rounded-4 student me-5">
        <img src="@/assets/pic8_student.svg" class="imgchoose" />

        <h4 class="text-start my-3 fw-bold">Student</h4>
        <p class="text-start text-black-50">
          Your main goal is to complete tasks and gain points to increase your
          rank and complete real projects to earn some money.
        </p>
        <router-link to="student/login" class="text-decoration-none">
          <div class="d-grid">
            <button class="btn text-light m-3 fw-bold py-2">Select</button>
          </div>
        </router-link>
      </div>
      <div
        class="col-md-3 rounded-4 student"
        style="background-color: rgb(93 132 132)"
      >
        <img src="@/assets/pic9_client.svg" class="imgchoose mb-2" />

        <h4 class="text-start my-4 mt-5 fw-bold text-light">Client</h4>
        <p class="text-start text-light">
          Your main goal is to request project and wait for managers to approve
          it, and after project is completed you can rete the development team.
        </p>
        <router-link to="client/login" class="text-decoration-none">
          <div class="d-grid">
            <button class="btn text-light m-3 fw-bold py-2">Select</button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.mainDiv {
  margin-right: 0px;
}
.imgtitle {
  width: 30%;
  height: 40%;
  margin: auto;
}
.row2 {
  margin-top: -5%;

  .student {
    background-color: #e2dcc8;
  }
  .imgchoose {
    width: 50%;
    height: auto;
    margin: auto;
    margin-top: 3%;
  }
  h4 {
    color: #0f3d3e;
  }
  button {
    background-color: #063535;
    border-radius: 0.5rem;
  }
  button:hover {
    background-color: #538f8f;
    border-radius: 0.5rem;
  }
}
</style>