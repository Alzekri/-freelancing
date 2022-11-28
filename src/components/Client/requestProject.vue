<template>
  <div class="row">
    <div class="text-center">
      <img src="@/assets/LandingImage1svg.svg" class="me-5 mx-5" alt="" />
      <h1>Request your project now</h1>
      <p class="text-black-50 mx-5">
        Enter project title and briefly describe the requirements and the
        functionality
      </p>
    </div>
    <div>
      <form action="#" class="m-auto">
        <label class="ms-3 fw-bold">Project title</label>
        <input
          type="text"
          class="form-control ms-3 mt-2 py-2"
          id="email"
          placeholder="Enter project title"
          name="Email"
        />
        <label class="ms-3 fw-bold mt-2">Description</label>
        <textarea
          class="form-control ms-3"
          rows="7"
          id=""
          placeholder="Describe what you want in your project"
        ></textarea>
        <div class="d-grid ps-5">
          <base-button class="mt-4 fw-bold py-3" @click="isAdd = !isAdd">
            Send requestt
          </base-button>
        </div>
      </form>
    </div>
    <div v-if="isAdd" class="modal-dialog addnew">
      <div class="modal-content">
        <h4 class="text-center fw-bold my-4">Thank you</h4>
        <h6 class="text-black-50">
          We will review your request and contact you soon stay tuned
        </h6>

        <!-- Modal body -->
        <div class="modal-body">
          <div class="d-grid my-4">
            <base-button @click="isAdd = !isAdd"> I Will </base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      isAdd: false,
    };
  },
};
</script>
<style lang="scss" scoped>
img {
  height: 13rem;
  width: 13rem;
}
form {
  max-width: 33%;
  p {
    color: #063535;
  }

  .form-control {
    border-radius: 0.9rem;
  }
}
label {
  color: #063535;
}
.addnew {
  position: fixed;
  top: 15rem;
  right: 0;
  left: 0;
  width: 32%;
  background-color: rgb(255 255 255 / 100%);
  border: 4px solid rgb(245, 244, 244);
  border-radius: 10px;
}
</style>