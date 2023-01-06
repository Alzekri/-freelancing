<template>
  <div class="row me-0">
    <div class="text-center">
      <img src="@/assets/LandingImage1svg.svg" class="me-5 mx-5" alt="" />
      <dt>
        <h1>Contact us now I need help</h1>
        <dl class="text-black-50 mx-5">
          write down your problem and we will help you as soon as possible
        </dl>
      </dt>
    </div>
    <div>
      <form action="#" @click.prevent class="m-auto mb-3">
        <label class="ms-3 fw-bold mb-2">Problem</label>
        <textarea
          class="form-control ms-3"
          rows="7"
          id=""
          placeholder="Describe your problem"
        ></textarea>
        <div class="d-grid ms-4 ps-1">
          <base-button class="mt-3 fw-bold py-2" @click="isAdd = !isAdd">
            Send
          </base-button>
        </div>
      </form>
    </div>
    <div v-if="isAdd" class="modal-dialog addnew">
      <div class="modal-content">
        <h4 class="text-center fw-bold my-4">Thank you</h4>
        <h6 class="text-black-50">
          We will review your problem and contact you soon stay tuned
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
  border: 4px solid rgb(205, 201, 201);
  border-radius: 10px;
}
</style>