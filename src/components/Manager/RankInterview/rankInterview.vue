<template>
  <div class="row">
    <NavBarManager />
  </div>
  <dl class="my-4">
    <dt><h3 class="fw-bold">Interviews</h3></dt>
    <dd class="text-black-50">Accept or decline ranks interviews</dd>
  </dl>
  <div class="mb-5">
    <div class="row me-5 ms-1">
      <table class="table">
        <thead class="text-center tablebody">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">Role</th>

            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody class="text-center">
          <tr>
            <th scope="row">userid</th>
            <td>user.last_name</td>
            <td>user.designation</td>
            <td>user.designation</td>
            <td>user.designation</td>

            <td>
              <button class="text-light btn btn-info mx-1">
                <FIcons class="rounded-pill" :icon="['fas', 'edit']" />
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
            <td>user.designation</td>
            <td>user.designation</td>

            <td>
              <button class="text-light btn btn-info mx-1">
                <FIcons class="rounded-pill" :icon="['fas', 'edit']" />
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

  <h3 class="fw-bold mb-4">Accepted Interviews</h3>
  <div>
    <div class="row me-5 ms-1">
      <table class="table">
        <thead class="text-center tablebody">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">Role</th>

            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody class="text-center">
          <tr>
            <th scope="row">userid</th>
            <td>user.last_name</td>
            <td>user.designation</td>
            <td>user.designation</td>
            <td>user.designation</td>

            <td>
              <button class="text-light btn btn-info mx-1">
                <FIcons class="rounded-pill" :icon="['fas', 'edit']" />
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
            <td>user.designation</td>
            <td>user.designation</td>

            <td>
              <button class="text-light btn btn-info mx-1">
                <FIcons class="rounded-pill" :icon="['fas', 'edit']" />
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