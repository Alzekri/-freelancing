<template>
  <div class="row ms-4 mt-2">
    <form action="#">
      <h3 class="fw-bold mb-2">
        Welcome TO<br />
        SUSU <span class="span1">FREELANCING </span>PLATFORM
      </h3>
      <p>Please Enter Your Details</p>
      <div>
        <label class="fw-bold">Full Name</label>
        <input
          type="text"
          class="form-control py-2 mb-1"
          id="email"
          placeholder="Enter Your Full Name"
          name="Email"
        />
      </div>
      <div>
        <label class="fw-bold"
          >Company Name
          <pre class="text-danger d-inline"> *Optional</pre>
        </label>
        <input
          type="text"
          class="form-control py-2 mb-1"
          id="email"
          placeholder="Enter Your Current Company Name"
          name="Email"
        />
      </div>
      <div>
        <label class="fw-bold">Email</label>
        <input
          type="text"
          class="form-control py-2 mb-1"
          id="email"
          placeholder="Enter Your Email"
          name="Email"
        />
      </div>
      <div>
        <label class="fw-bold"
          >Company Email
          <pre class="text-danger d-inline"> *Optional</pre>
        </label>
        <input
          type="text"
          class="form-control py-2 mb-1"
          id="email"
          placeholder="Enter Your Company Email"
          name="Email"
        />
      </div>
      <div>
        <label class="fw-bold">Password</label>
        <input
          type="password"
          class="form-control py-2 mb-1"
          id="email"
          placeholder="*****************"
          name="Email"
        />
      </div>
      <div>
        <label class="fw-bold">Confirm Password</label>
        <input
          type="password"
          class="form-control py-2 mb-1"
          id="email"
          placeholder="*********************"
          name="Email"
        />
      </div>
      <div class="d-grid">
        <button class="btn text-light fw-bold py-2 mt-2">Sign up</button>
      </div>
      <div class="row mt-4">
        <span class="text-black-50 col-md-5 text-end">
          Already have an account?
        </span>
        <router-link
          to="login"
          class="col-md-4 text-start span2 text-decoration-none"
        >
          <span class="span2">Sign in</span>
        </router-link>
      </div>
    </form>
  </div>
</template> 
<style lang="scss" scoped>
.span1 {
  color: #063535;
}
form {
  max-width: 75%;
  p {
    color: #063535;
  }

  .form-control {
    border-radius: 0.9rem;
    width: 60%;
  }
  button {
    background-color: #063535;
    border-radius: 0.9rem;
    width: 60%;
  }
  button:hover {
    background-color: #538f8f;
    border-radius: 0.9rem;
  }
  .span2 {
    margin-left: -0.6rem;
    color: #063535;
  }
}
label {
  color: #063535;
}
@media only screen and (min-width: 600px) {
}
</style>