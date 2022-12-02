<template>
  <div class="row bg-white m-4 mx-5 p-3">
    <div class="col-md-3 mb-2">
      <div class="progressdiv rounded-4 p-3 pt-4">
        <h6 class="fw-bold ms-1">Progress</h6>
        <p class="bg-light rounded-4 ps-3 py-1">
          Started<br />
          <span class="text-black-50">wen, 12:30 10/10/2022</span>
        </p>
        <div class="progress ms-1 my-5">
          <div
            class="
              progress-bar progress-bar-striped progress-bar-animated
              progressbar
            "
            style="width: 60%"
          ></div>
        </div>
        <hr />
        <div class="row text-center">
          <div class="col-6">
            <p>Work hours <br />70hrs</p>
          </div>
          <div class="col-6">
            <p>Overtime <br />70hrs</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-2">
      <div class="progressdiv rounded-4 p-3 pt-4">
        <h6 class="fw-bold ms-1">Project details</h6>
        <div class="bg-light rounded-4 p-2">
          <dl>
            <dt>Online store</dt>
            <dd class="text-black-50 me-4">
              Online storeOnline storeOnline store Online store Online store
              Online storeOnline store Online store Online storeOnline store
              Online store store
            </dd>
            <dt>Status</dt>
            <dd class="text-black-50">Unfinished</dd>
            <dt>Category</dt>
            <dd class="text-black-50 pt-2">
              <span class="rounded-5 px-2 py-1 status">Web developement</span>
              <span class="rounded-5 px-2 py-1 ms-2 status">UI/UX</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>

    <div class="col-md-5 mb-2">
      <div class="progressdiv rounded-4 p-3">
        <h6 class="fw-bold ms-1">Project details</h6>
        <div class="bg-light rounded-4 p-2">
          <img src="@/assets/man1.png" alt="" class="mt-1 imgmanager" />
          <dl class="text-center">
            <dt>DR.Khalid</dt>
            <dd class="text-black-50">Project Manager</dd>
          </dl>
          <div class="row">
            <div class="col">
              <img src="@/assets/man1.png" alt="" class="" />
              <dl class="text-center">
                <dt>DR.Khalid</dt>
                <dd class="text-black-50">Project Manager</dd>
              </dl>
            </div>
            <div class="col">
              <img src="@/assets/man1.png" alt="" />
              <dl class="text-center">
                <dt>DR.Khalid</dt>
                <dd class="text-black-50">Project Manager</dd>
              </dl>
            </div>
            <div class="col">
              <img src="@/assets/man1.png" alt="" />
              <dl class="text-center">
                <dt>DR.Khalid</dt>
                <dd class="text-black-50">Project Manager</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row bg-white m-4 mx-5 p-3">
    <div class="col-md-3 mb-2">
      <div class="progressdiv2 rounded-4 p-3 pt-4">
        <h6 class="fw-bold ms-1">Progress</h6>
        <p class="bg-light rounded-4 ps-3 py-1">
          Started<br />
          <span class="text-black-50">wen, 12:30 10/10/2022</span>
        </p>
        <div class="progress ms-1 my-5">
          <div
            class="
              progress-bar progress-bar-striped progress-bar-animated
              progressbar
            "
            style="width: 100%"
          ></div>
        </div>
        <hr />
        <div class="row text-center">
          <div class="col-6">
            <p>Work hours <br />70hrs</p>
          </div>
          <div class="col-6">
            <p>Overtime <br />70hrs</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-2">
      <div class="progressdiv2 rounded-4 p-3 pt-4">
        <h6 class="fw-bold ms-1">Project details</h6>
        <div class="bg-light rounded-4 p-2">
          <dl>
            <dt>Online store</dt>
            <dd class="text-black-50 me-4">
              Online storeOnline storeOnline store Online store Online store
              Online storeOnline store Online store Online storeOnline store
              Online store store
            </dd>
            <dt>Status</dt>
            <dd class="text-black-50">Finished</dd>
            <dt>Category</dt>
            <dd class="text-black-50 pt-2">
              <span class="rounded-5 px-2 py-1 status">Web developement</span>
              <span class="rounded-5 px-2 py-1 ms-2 status">UI/UX</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>

    <div class="col-md-5 mb-2">
      <div class="progressdiv2 rounded-4 p-3">
        <h6 class="fw-bold ms-1">Project details</h6>
        <div class="bg-light rounded-4 p-2">
          <img src="@/assets/man1.png" alt="" class="mt-1 imgmanager" />
          <dl class="text-center">
            <dt>DR.Khalid</dt>
            <dd class="text-black-50">Project Manager</dd>
          </dl>
          <div class="row">
            <div class="col">
              <img src="@/assets/man1.png" alt="" class="" />
              <dl class="text-center">
                <dt>DR.Khalid</dt>
                <dd class="text-black-50">Project Manager</dd>
                <dd class="text-black-50">
                  <FIcons class="" :icon="['fas', 'star']" />
                </dd>
              </dl>
            </div>
            <div class="col">
              <img src="@/assets/man1.png" alt="" />
              <dl class="text-center">
                <dt>DR.Khalid</dt>
                <dd class="text-black-50">Project Manager</dd>
                <dd class="text-black-50">
                  <FIcons class="" :icon="['fas', 'star']" />
                </dd>
              </dl>
            </div>
            <div class="col">
              <img src="@/assets/man1.png" alt="" />
              <dl class="text-center">
                <dt>DR.Khalid</dt>
                <dd class="text-black-50">Project Manager</dd>
                <dd class="text-black-50">
                  <FIcons class="" :icon="['fas', 'star']" />
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<style scoped lang="scss">
.progressdiv {
  background-color: #e2dcc8;
  color: #0f3d3e;
  height: 23rem;
}
.progressdiv2 {
  background-color: #e2dcc8;
  color: #0f3d3e;
  height: 25rem;
}
.progressbar,
.status {
  background-color: #0f3d3e;
  color: white;
}
img {
  height: 5rem;
  width: 5rem;
}
.imgmanager {
  margin-left: 40%;
}
</style>