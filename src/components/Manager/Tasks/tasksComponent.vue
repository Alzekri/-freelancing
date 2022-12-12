<template>
  <div class="row">
    <NavBarManager />
    <GreatTask />
  </div>
  <dl>
    <dt><h3 class="fw-bold">Tasks</h3></dt>
    <dd class="text-black-50">Manage tasks here</dd>
  </dl>
  <div class="mb-4">
    <div class="row me-5 ms-1">
      <table class="table">
        <thead class="text-center">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">Category</th>

            <th scope="col">Level</th>
            <th scope="col">Total points</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody class="text-center">
          <tr class="tablebody">
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
          <div class="divhr"></div>

          <tr class="tablebody">
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
          <div class="divhr"></div>

          <tr class="tablebody">
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
import GreatTask from "./greateTask.vue";
export default {
  components: {
    NavBarManager,
    GreatTask,
  },
};
</script>
  <style lang="scss" scoped>
.tablebody {
  background-color: #e2dcc8;
}
.divhr {
  height: 10px;
}
</style>