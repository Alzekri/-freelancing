<template>
  <h1 class="ps-5 fw-bold mt-5">Managers List</h1>
  <h6 class="text-black-50 ps-5">
    Manage all existing managers or add new managers
  </h6>
  <div class="row ms-5 me-4">
    <table class="table mt-2">
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
</template>  
<style scoped lang="scss">
.tablebody {
  background-color: #e2dcc8;
  border-radius: 150px;
  margin-bottom: 2rem;
}
</style>