<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand ms-5" href="#">LOGO</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
          <li class="nav-item ms-5">
            <a class="nav-link active" aria-current="page" href="#"
              >My Projects</a
            >
          </li>
          <li class="nav-item ms-3">
            <a class="nav-link active" aria-current="page" href="#"
              >Request Project</a
            >
          </li>

          <li class="nav-item ms-3">
            <a class="nav-link active" aria-current="page" href="#"
              >Contact Us</a
            >
          </li>
        </ul>

        <button class="btn btn-outline-light round px-3 py-1" type="submit">
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>
  <script>
export default {
  name: "NavBar",
  methods: {},
};
</script>
  <style scoped lang="scss">
body {
  margin: 0;
  padding: 0;
}
.navbar {
  height: 3rem;
  font-weight: 700;
}
</style>
  