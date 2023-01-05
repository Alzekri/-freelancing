<template>
  <div class="row m-2 me-0"><h4>LOGO</h4></div>
  <div class="row row_form text-align-items-center">
    <form action="#" class="m-auto">
      <h1 class="text-center fw-bold mb-4">Welcome back</h1>
      <p class="text-center">Please Enter Your Details</p>
      <div class="mx-4">
        <label class="fw-bold m-2">Email</label>
        <input
          type="text"
          class="form-control ms-3 py-3 mb-3"
          id="email"
          placeholder="Enter Your Email"
          name="Email"
        />
      </div>
      <div class="mx-4">
        <label class="fw-bold m-2">Password</label>
        <input
          type="password"
          class="form-control ms-3 py-3 mb-3"
          id="password"
          placeholder="*****************"
          name="password"
        />
      </div>
      <div class="row ms-4">
        <div class="col-md-6 text-start">
          <input
            class="form-check-input me-2"
            type="checkbox"
            id="check1"
            name="remeber"
            value="something"
          />
          <label class="form-check-label fw-bold">Remember me</label>
        </div>
        <div class="col-md-6 text-end pe-4">
          <p class="text-black-50 fw-bold">Forget Password</p>
        </div>
      </div>
      <router-link to="dashboard" class="text-decoration-none">
        <div class="d-grid">
          <button class="btn text-light mt-4 ms-5 fw-bold py-3">Sign in</button>
        </div>
      </router-link>
    </form>
  </div>
</template> 
  <style lang="scss" scoped>
form {
  max-width: 55%;
  p {
    color: #063535;
  }

  .form-control {
    border-radius: 0.9rem;
  }
  button {
    background-color: #063535;
    border-radius: 0.9rem;
  }
  button:hover {
    background-color: #538f8f;
    border-radius: 0.9rem;
  }
  .span2 {
    color: #063535;
  }
}
label {
  color: #063535;
}
@media only screen and (min-width: 600px) {
  .row_form {
    height: calc(100vh - 14rem);
  }
}
</style>