<template>
  <div class="row mb-3">
    <NavBarManager />
  </div>
  <div class="bg-gray maindiv ms-1 d-flex border border-2 ps-4 py-2 pt-3">
    <FIcons
      v-if="chevron1 == 'down'"
      :icon="['fas', 'chevron-down']"
      class="FIcons"
      @click="chevron1 = 'up'"
    />
    <FIcons
      v-else-if="chevron1 == 'up'"
      :icon="['fas', 'chevron-up']"
      class="FIcons"
      @click="chevron1 = 'down'"
    />
    <h6>Web development</h6>
  </div>
  <div
    v-if="chevron1 == 'up'"
    class="
      task
      border border-2
      rounded-3
      shadow-lg
      p-4
      mb-4
      px-3
      py-2
      my-3
      pb-5
    "
  >
    <h4 class="fw-bold">Task: Title</h4>
    <p>Level:mid <br />Total points: 40</p>
    <div class="row">
      <div class="col-2">
        <img src="@/assets/man1.png" alt="" class="img-fluid" />
      </div>
      <div class="col ps-5">
        <h4 class="fw-bold">Fatima</h4>
        <p class="text-black-50 fw-bold">Backend Developer</p>
        <form action="">
          <input type="file" id="myFile" name="filename" />
        </form>
        <div class="row mt-5">
          <div class="col-md-6">
            <button class="btn py-3 px-5">Give full pionts</button>
          </div>
          <div class="col-md-6">
            <input type="number" class="col-md-2 h-75 py-3" />
            <button class="btn py-3 px-4">Give pionts</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="chevron1 == 'up'"
    class="
      task
      border border-2
      rounded-3
      shadow-lg
      p-4
      mb-4
      px-3
      py-2
      my-3
      pb-5
    "
  >
    <h4 class="fw-bold">Task: Title</h4>
    <p>Level:mid <br />Total points: 40</p>
    <div class="row">
      <div class="col-2">
        <img src="@/assets/man1.png" alt="" class="img-fluid" />
      </div>
      <div class="col ps-5">
        <h4 class="fw-bold">Fatima</h4>
        <p class="text-black-50 fw-bold">Backend Developer</p>
        <form action="">
          <input type="file" id="myFile" name="filename" />
        </form>
        <div class="row mt-5">
          <div class="col-md-6">
            <button class="btn py-3 px-5">Give full pionts</button>
          </div>
          <div class="col-md-6">
            <input type="number" class="col-md-2 h-75 py-3" />
            <button class="btn py-3 px-4">Give pionts</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="maindiv ms-1 d-flex border border-2 ps-4 py-2 pt-3">
    <FIcons
      v-if="chevron2 == 'down'"
      :icon="['fas', 'chevron-down']"
      class="FIcons"
      @click="chevron2 = 'up'"
    />
    <FIcons
      v-else-if="chevron2 == 'up'"
      :icon="['fas', 'chevron-up']"
      class="FIcons"
      @click="chevron2 = 'down'"
    />

    <h6>UI/UX</h6>
  </div>
  <div
    v-if="chevron2 == 'up'"
    class="
      task
      border border-2
      rounded-3
      shadow-lg
      p-4
      mb-4
      px-3
      py-2
      my-3
      pb-5
    "
  >
    <h4 class="fw-bold">Task: Title</h4>
    <p>Level:mid <br />Total points: 40</p>
    <div class="row">
      <div class="col-2">
        <img src="@/assets/man1.png" alt="" class="img-fluid" />
      </div>
      <div class="col ps-5">
        <h4 class="fw-bold">Fatima</h4>
        <p class="text-black-50 fw-bold">Backend Developer</p>
        <form action="">
          <input type="file" id="myFile" name="filename" />
        </form>
        <div class="row mt-5">
          <div class="col-md-6">
            <button class="btn py-3 px-5">Give full pionts</button>
          </div>
          <div class="col-md-6">
            <input type="number" class="col-md-2 h-75 py-3" />
            <button class="btn py-3 px-4">Give pionts</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray maindiv ms-1 d-flex border border-2 ps-4 py-2 pt-3">
    <FIcons
      v-if="chevron3 == 'down'"
      :icon="['fas', 'chevron-down']"
      class="FIcons"
      @click="chevron3 = 'up'"
    />
    <FIcons
      v-else-if="chevron3 == 'up'"
      :icon="['fas', 'chevron-up']"
      class="FIcons"
      @click="chevron3 = 'down'"
    />

    <h6>Web security</h6>
  </div>
  <div
    v-if="chevron3 == 'up'"
    class="
      task
      border border-2
      rounded-3
      shadow-lg
      p-4
      mb-4
      px-3
      py-2
      my-3
      pb-5
    "
  >
    <h4 class="fw-bold">Task: Title</h4>
    <p>Level:mid <br />Total points: 40</p>
    <div class="row">
      <div class="col-2">
        <img src="@/assets/man1.png" alt="" class="img-fluid" />
      </div>
      <div class="col ps-5">
        <h4 class="fw-bold">Fatima</h4>
        <p class="text-black-50 fw-bold">Backend Developer</p>
        <form action="">
          <input type="file" id="myFile" name="filename" />
        </form>
        <div class="row mt-5">
          <div class="col-md-6">
            <button class="btn py-3 px-5">Give full pionts</button>
          </div>
          <div class="col-md-6">
            <input type="number" class="col-md-2 h-75 py-3" />
            <button class="btn py-3 px-4">Give pionts</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBarManager from "@/components/Nav/navBarManager.vue";
export default {
  components: { NavBarManager },
  data() {
    return {
      chevron1: "down",
      chevron2: "down",
      chevron3: "down",
    };
  },
};
</script>
<style lang="scss" scoped>
.maindiv {
  margin-right: 10%;
  background-color: #e2dcc8;

  h6 {
    color: #125e5f;
    font-weight: bold;
  }
}
.FIcons {
  color: #afada5;
  height: 1.3rem;
  width: 1.5rem;
  margin-right: 2%;
}
.task {
  max-width: 70%;
  margin-left: 10%;
  background-color: #e2dcc8;
  p {
    color: #125e5f;
  }
  button {
    background-color: black;
    color: white;
  }
}
</style>