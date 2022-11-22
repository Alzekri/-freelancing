<template>
  <div class="col-7 mt-4 ps-5">
    <h3 class="fw-bold">ADMIN DASHBOARD</h3>
    <p class="text-black-50">WELCOME, DR.Ali ALTAHIR</p>
  </div>
  <div class="col-5 text-end mt-4 pe-5">
    <base-button class="py-3" mode="dark" @click="isAdd = !isAdd"
      >+ADD NEW MANAGER
    </base-button>
  </div>

  <div v-if="isAdd" class="modal-dialog addnew">
    <div class="modal-content">
      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title fw-bold me-5 ms-4">Add New Manager</h4>
        <button
          type="button"
          class="btn-close ms-5"
          @click="isAdd = !isAdd"
        ></button>
        <hr />
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <form action="#">
          <div class="mx-4">
            <label class="fw-bold m-2">Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="Enter Your Email"
              name="Email"
            />
          </div>
          <div class="mx-4">
            <label class="fw-bold m-2">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter Your Password"
              name="password"
            />
          </div>
          <div class="mx-4">
            <label class="fw-bold m-2">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="confirm_password"
              placeholder="Enter Your Password"
              name="confirm_password"
            />
          </div>
          <div class="mx-4">
            <label class="fw-bold mt-4 m-3">Select Role</label>
          </div>

          <div class="ms-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label mb-1" for="flexRadioDefault1">
                Manager
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label mb-1" for="flexRadioDefault2">
                Roadmap Writer
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label class="form-check-label mb-1" for="flexRadioDefault1">
                Teacher
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
                checked
              />
              <label class="form-check-label mb-1" for="flexRadioDefault2">
                Project Manager
              </label>
            </div>
          </div>

          <div class="d-grid">
            <button class="btn btn-dark rounded m-4" @click="isAdd = !isAdd">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAdd: false,
    };
  },
};
</script>
<style scoped  lang="scss">
.addnew {
  position: fixed;
  top: 1rem;
  right: 0;
  left: 0;
  width: 32%;
  background-color: rgb(255 255 255 / 100%);
  border: 4px solid rgb(245, 244, 244);
  border-radius: 10px;
}
</style>