<template>
  <div class="row">
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
          <ul class="navbar-nav col-4">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#services"
                >Services</a
              >
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#footer"
                >Contact us</a
              >
            </li>
          </ul>

          <div class="col-9 text-end">
            <button class="btn btn-outline-light round px-3 py-1" type="submit">
              Login
            </button>
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
