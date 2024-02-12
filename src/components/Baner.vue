<template>
  <!-- BANER -->
  <section class="main-header">
    <img class="main-header__baner" :src="img" alt="baner" />
    <DescriptionBaner v-if="title" :title="title" :path="path" />
  </section>
</template>

<script>
import DescriptionBaner from './DescriptionBaner.vue';

export default {
  props: {
    img: String,
    title: String,
    path: String,
  },
  components: { DescriptionBaner },
};
</script>

<style lang="scss" scoped>
.main-header {
  position: relative;
  height: 356px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
}
.main-header__baner {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
</style>
