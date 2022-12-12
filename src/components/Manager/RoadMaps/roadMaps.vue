<template>
  <div class="row">
    <NavBarManager />
    <CreateRoadmap />
  </div>
  <div class="row form-check mt-4 d-flex justify-content-center">
    <div class="col-3">
      <input
        class="col-1 form-check-input"
        type="radio"
        id="radio1"
        name="road"
        checked
        @click="roadmapShow = 'front'"
      />
      <label class="col-md-8 text-start fw-bold">Frontend developer</label>
    </div>
    <div class="col-3">
      <input
        type="radio"
        class="form-check-input"
        id="radio3"
        name="road"
        @click="roadmapShow = 'back'"
      />
      <label class="col-md-8 text-start fw-bold">Backend developer</label>
    </div>
    <div class="col-3">
      <input
        type="radio"
        class="form-check-input"
        id="radio2"
        name="road"
        @click="roadmapShow = 'uiux'"
      />
      <label class="col-md-8 text-start fw-bold">UI/UX designer</label>
    </div>
  </div>
  <!--Frontend-->

  <div class="row roadmap m-2 rounded-4 py-3" v-if="roadmapShow == 'front'">
    <div class="col-1">
      <img src="@/assets/man1.png" class="img-fluid" alt="" />
    </div>
    <div class="col-md-11 p-2 px-5">
      <h4>Dr Nema Ezzaldeen</h4>
      <p class="text-white-50">sep23. 3min ago. Teacher</p>
      <h6 class="lh-lg">
        <h4>Frontend</h4>
        Welcome to ROADMAP! The “Real world Outcomes across the Alzheimer’s
        Disease spectrum for better care: Multi-modal data Access Platform”
        (ROADMAP) project aimed to provide the foundation for an integrated data
        environment and framework for real-world evidence (RWE in Alzheimer’s
        disease). This included the development of consensual key outcome
        measures and enabling data integration tools for dataset
        characterisation and outcome classification, as well as guidelines on
        the handling and interpretation of RWE data. ROADMAP had a budget of EUR
        8.21 million and 26 partners led by the University of Oxford and
        Novartis. The project ran from September 2016 till October 2018.
      </h6>
    </div>
  </div>
  <!--Backend-->
  <div class="row roadmap m-2 rounded-4 py-3" v-if="roadmapShow == 'back'">
    <div class="col-1">
      <img src="@/assets/man1.png" class="img-fluid" alt="" />
    </div>
    <div class="col-md-11 p-2 px-5">
      <h4>Dr Nema Ezzaldeen</h4>
      <p class="text-white-50">sep23. 3min ago. Teacher</p>
      <h6 class="lh-lg">
        <h4>Backend</h4>
        Welcome to ROADMAP! The “Real world Outcomes across the Alzheimer’s
        Disease spectrum for better care: Multi-modal data Access Platform”
        (ROADMAP) project aimed to provide the foundation for an integrated data
        environment and framework for real-world evidence (RWE in Alzheimer’s
        disease). This included the development of consensual key outcome
        measures and enabling data integration tools for dataset
        characterisation and outcome classification, as well as guidelines on
        the handling and interpretation of RWE data. ROADMAP had a budget of EUR
        8.21 million and 26 partners led by the University of Oxford and
        Novartis. The project ran from September 2016 till October 2018.
      </h6>
    </div>
  </div>
  <!--UI/UX-->
  <div class="row roadmap m-2 rounded-4 py-3" v-if="roadmapShow == 'uiux'">
    <div class="col-1">
      <img src="@/assets/man1.png" class="img-fluid" alt="" />
    </div>
    <div class="col-md-11 p-2 px-5">
      <h4>Dr Nema Ezzaldeen</h4>
      <p class="text-white-50">sep23. 3min ago. Teacher</p>
      <h6 class="lh-lg">
        <h4>UI/UX</h4>
        Welcome to ROADMAP! The “Real world Outcomes across the Alzheimer’s
        Disease spectrum for better care: Multi-modal data Access Platform”
        (ROADMAP) project aimed to provide the foundation for an integrated data
        environment and framework for real-world evidence (RWE in Alzheimer’s
        disease). This included the development of consensual key outcome
        measures and enabling data integration tools for dataset
        characterisation and outcome classification, as well as guidelines on
        the handling and interpretation of RWE data. ROADMAP had a budget of EUR
        8.21 million and 26 partners led by the University of Oxford and
        Novartis. The project ran from September 2016 till October 2018.
      </h6>
    </div>
  </div>
</template>
       
<script>
import NavBarManager from "@/components/Nav/navBarManager.vue";
import CreateRoadmap from "./createRoadMap.vue";
export default {
  components: {
    NavBarManager,
    CreateRoadmap,
  },
  data() {
    return {
      roadmapShow: "front",
    };
  },
};
</script>
<style lang="scss" scoped>
.roadmap {
  background-color: #0f3d3e;
  color: white;
}
</style>

