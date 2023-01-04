<template>
  <div class="mainDiv pt-2 ps-lg-5 sticky-top">
    <div class="row"><h4>LOGO</h4></div>
    <div class="row IconDashboard">
      <div class="col-12 text-start mt-3">
        <router-link to="projectRequests" exact>
          <a class="py-2 px-3">Projects requests </a>
        </router-link>
        <router-link to="approvedProjects">
          <a class="py-2 px-3"> Approved projects </a>
        </router-link>
        <router-link to="teamrequests">
          <a class="py-2 px-3"> Team requests</a>
        </router-link>
        <router-link to="tasks">
          <a class="py-2 px-3"> Tasks </a>
        </router-link>
        <router-link to="rank">
          <a class="py-2 px-3"> Rank interview </a>
        </router-link>
        <router-link to="submittedtask">
          <a class="py-2 px-3"> Submitted tasks </a>
        </router-link>
        <router-link to="roadmaps">
          <a class="py-2 px-3 mb-5"> Roadmaps </a>
        </router-link>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-12 text-center">
        <div class="accountIcon pt-2">
          <FIcons class="rounded-pill text-light" :icon="['fas', 'user']" />
        </div>
      </div>
      <div class="col-9 text-center mt-2"><h6>Ahmed ALi</h6></div>
      <div class="col-9 text-center text-black-50">
        <h6>ahmed@gmail.com</h6>
      </div>
      <div class="col-9 text-end text-black-50 pt-2">
        <div class="row">
          <div class="col-7 text-end">
            <h6>Logout</h6>
          </div>
          <div class="col-5 text-start">
            <FIcons
              class="rounded-pill"
              :icon="['fas', 'right-from-bracket']"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {};
</script>
  
  
  <style scoped lang="scss">
.mainDiv {
  background-color: #e2dcc8;
  height: 100vh;
}

.accountIcon {
  background-color: black;
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  margin-left: 27%;
}
a {
  display: block;
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin: {
    right: 3rem;
  }
}
h4 {
  color: black;
  font-weight: bold;
}
a:hover {
  color: white;
  background-color: black;
  border-radius: 1rem;
}
.router-link-active {
  background-color: red;
}
.router-link-exact-active {
  background-color: red;
}
</style>
  