<template>
  <div class="row maindiv">
    <nav class="navbar navbar-expand-lg fixed-top fw-bold">
      <div class="container">
        <div class="text-light col-2">
          <h4>LOGO</h4>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main"
          aria-controls="main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FIcons class="icon" :icon="['fas', 'bars']" />
        </button>
        <div class="collapse navbar-collapse" id="main">
          <ul class="navbar-nav col-6">
            <router-link to="projects">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"> My Projects </a>
              </li>
            </router-link>
            <router-link to="request">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#footer">
                  Request Project
                </a>
              </li></router-link
            >
            <router-link to="contact">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#footer">
                  Contact Us
                </a>
              </li></router-link
            >
          </ul>
          <div class="col-7 text-end">
            <router-link to="login" class="text-decoration-none">
              <button
                class="btn btn-outline-light round px-3 py-1"
                type="submit"
              >
                Logout
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped lang="scss">
h4 {
  position: fixed;
  top: 0.7rem;
  left: 1rem;
}
.maindiv {
  margin-bottom: 5rem;
}
a {
  text-decoration: none;
}
.navbar {
  background-color: black;

  .navbar-toggler {
    border: 1px solid rgb(163, 221, 178);
  }
  .navbar-nav {
    .nav-link {
      color: white;
    }
  }
}
.navbar .navbar-nav .nav-link:focus,
.navbar .navbar-nav .nav-link:active,
.navbar .navbar-nav .nav-link:hover {
  color: #33d1cc;
}

.icon {
  color: #33d1cc;
}
</style>

           