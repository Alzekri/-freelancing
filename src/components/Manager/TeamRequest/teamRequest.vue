<template>
  <div class="row">
    <NavBarManager />
  </div>
  <dl>
    <dt><h3 class="fw-bold">Teams</h3></dt>
    <dd class="text-black-50">
      See projects and the students whom applied to the project
    </dd>
  </dl>
  <div class="mb-4">
    <dl>
      <dt><h4 class="fw-bold">Online Store</h4></dt>
      <dd>
        Client email <br />
        <span class="text-black-50">client@gmail.com</span>
      </dd>
    </dl>
    <div class="row me-5 ms-1">
      <table class="table">
        <thead class="text-center tablebody">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">Role</th>

            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody class="text-center">
          <tr>
            <th scope="row">userid</th>
            <td>user.last_name</td>
            <td>user.designation</td>

            <td>
              <button class="text-light btn btn-info mx-1">
                <FIcons class="rounded-pill" :icon="['fas', 'check']" />
              </button>
              <button class="text-lgiht btn btn-danger mx-1">
                <FIcons class="rounded-pill" :icon="['fas', 'trash']" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">userid</th>
            <td>user.last_name</td>
            <td>user.designation</td>

            <td>
              <button class="text-light btn btn-info mx-1">
                <FIcons class="rounded-pill" :icon="['fas', 'check']" />
              </button>
              <button class="text-lgiht btn btn-danger mx-1">
                <FIcons class="rounded-pill" :icon="['fas', 'trash']" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="mb-4">
    <dl>
      <dt><h4 class="fw-bold">Online Store</h4></dt>
      <dd>
        Client email <br />
        <span class="text-black-50">client@gmail.com</span>
      </dd>
    </dl>
    <div class="row me-5 ms-1">
      <table class="table">
        <thead class="text-center tablebody">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">Role</th>

            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody class="text-center">
          <tr>
            <th scope="row">userid</th>
            <td>user.last_name</td>
            <td>user.designation</td>

            <td>
              <button class="text-light btn btn-info mx-1">
                <FIcons class="rounded-pill" :icon="['fas', 'check']" />
              </button>
              <button class="text-lgiht btn btn-danger mx-1">
                <FIcons class="rounded-pill" :icon="['fas', 'trash']" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">userid</th>
            <td>user.last_name</td>
            <td>user.designation</td>

            <td>
              <button class="text-light btn btn-info mx-1">
                <FIcons class="rounded-pill" :icon="['fas', 'check']" />
              </button>
              <button class="text-lgiht btn btn-danger mx-1">
                <FIcons class="rounded-pill" :icon="['fas', 'trash']" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NavBarManager from "@/components/Nav/navBarManager.vue";

export default {
  components: {
    NavBarManager,
  },
};
</script>
<style lang="scss" scoped>
.tablebody {
  background-color: #e2dcc8;
  margin-bottom: 2rem;
}
</style>