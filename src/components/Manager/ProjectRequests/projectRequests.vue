<template>
  <div class="row">
    <NavBarManager />
    <CreateProjec />
  </div>
  <class class="row d-flex justify-content-around">
    <div class="col-md-5 mb-4">
      <div class="progressdiv2 rounded-4 p-3 pt-4">
        <h6 class="fw-bold ms-1 mb-3">Online Store</h6>
        <div class="bg-light rounded-4 p-3">
          <p class="text-black-50 me-4">
            Online storeOnline storeOnline store Online store Online store
            Online storeOnline store Online store Online storeOnline store
            Online store store
          </p>
          <dt>Client email</dt>
          <dd class="text-black-50">clients@gmail.com</dd>
          <dt>Category</dt>
          <dd class="text-black-50 pt-2 mt-2">
            <span class="rounded-5 px-2 py-2 status">Web developement</span>
            <span class="rounded-5 px-2 py-2 ms-2 status">UI/UX</span>
          </dd>
          <div class="row mt-5 d-flex justify-content-around">
            <div class="col-5">
              <button class="btn status rounded-3 px-5 fw-bold">Accept</button>
            </div>
            <div class="col-5">
              <button class="btn btn-danger rounded-3 px-5 fw-bold">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-5 mb-4">
      <div class="progressdiv2 rounded-4 p-3 pt-4">
        <h6 class="fw-bold ms-1 mb-3">Online Store</h6>
        <div class="bg-light rounded-4 p-3">
          <p class="text-black-50 me-4">
            Online storeOnline storeOnline store Online store Online store
            Online storeOnline store Online store Online storeOnline store
            Online store store
          </p>
          <dt>Client email</dt>
          <dd class="text-black-50">clients@gmail.com</dd>
          <dt>Category</dt>
          <dd class="text-black-50 pt-2 mt-2">
            <span class="rounded-5 px-2 py-2 status">Web developement</span>
            <span class="rounded-5 px-2 py-2 ms-2 status">UI/UX</span>
          </dd>
          <div class="row mt-5 d-flex justify-content-around">
            <div class="col-5">
              <button class="btn status rounded-3 px-5 fw-bold">Accept</button>
            </div>
            <div class="col-5">
              <button class="btn btn-danger rounded-3 px-5 fw-bold">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-5 mb-4">
      <div class="progressdiv2 rounded-4 p-3 pt-4">
        <h6 class="fw-bold ms-1 mb-3">Online Store</h6>
        <div class="bg-light rounded-4 p-3">
          <p class="text-black-50 me-4">
            Online storeOnline storeOnline store Online store Online store
            Online storeOnline store Online store Online storeOnline store
            Online store store
          </p>
          <dt>Client email</dt>
          <dd class="text-black-50">clients@gmail.com</dd>
          <dt>Category</dt>
          <dd class="text-black-50 pt-2 mt-2">
            <span class="rounded-5 px-2 py-2 status">Web developement</span>
            <span class="rounded-5 px-2 py-2 ms-2 status">UI/UX</span>
          </dd>
          <div class="row mt-5 d-flex justify-content-around">
            <div class="col-5">
              <button class="btn status rounded-3 px-5 fw-bold">Accept</button>
            </div>
            <div class="col-5">
              <button class="btn btn-danger rounded-3 px-5 fw-bold">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-5 mb-4">
      <div class="progressdiv2 rounded-4 p-3 pt-4">
        <h6 class="fw-bold ms-1 mb-3">Online Store</h6>
        <div class="bg-light rounded-4 p-3">
          <p class="text-black-50 me-4">
            Online storeOnline storeOnline store Online store Online store
            Online storeOnline store Online store Online storeOnline store
            Online store store
          </p>
          <dt>Client email</dt>
          <dd class="text-black-50">clients@gmail.com</dd>
          <dt>Category</dt>
          <dd class="text-black-50 pt-2 mt-2">
            <span class="rounded-5 px-2 py-2 status">Web developement</span>
            <span class="rounded-5 px-2 py-2 ms-2 status">UI/UX</span>
          </dd>
          <div class="row mt-5 d-flex justify-content-around">
            <div class="col-5">
              <button class="btn status rounded-3 px-5 fw-bold">Accept</button>
            </div>
            <div class="col-5">
              <button class="btn btn-danger rounded-3 px-5 fw-bold">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </class>
</template>
       
<script>
import NavBarManager from "@/components/Nav/navBarManager.vue";
import CreateProjec from "./createProject.vue";
export default {
  components: {
    NavBarManager,
    CreateProjec,
  },
};
</script>
<style lang="scss" scoped>
.progressdiv2 {
  background-color: #e2dcc8;
  color: #0f3d3e;
}
.status {
  background-color: #0f3d3e;
  color: white;
}
</style>