<template>
  <Baner :img="'img/ProjectDetails/ProjectDetailsBackground.jpeg'" />
  <section class="projectDetails content">
    <div v-for="item in getProjectDetails" :key="item">
      <h2 class="projectDetails_title">{{ item.title }}</h2>
      <p class="projectDetails_text">{{ item.text }}</p>
    </div>

    <div class="swiperBlock">
      <Swiper />
    </div>
  </section>
</template>

<script>
import Baner from "@/components/Baner.vue";
import Swiper from "@/components/Swiper.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: { Baner, Swiper },
  computed: {
    ...mapState(["text"]),
    ...mapGetters(["getProjectDetails", "getText"]),
  },
};
</script>

<style lang="scss" scoped>
.projectDetails {
  padding-top: 200px;
  padding-bottom: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.projectDetails_title {
  @include DMSerifDisplay50;
  width: 658px;
}
.projectDetails_text {
  @include Jost22;
  width: 658px;
  text-align: justify;
  margin-bottom: 100px;
}
.swiperBlock {
  width: 100%;
  height: 800px;
  border-radius: 70px;
  overflow: hidden;
}
</style>
