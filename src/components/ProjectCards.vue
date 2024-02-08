<template>
  <div class="project-cards">
    <div class="project-card" v-for="(item, index) in projects" :key="index">
      <img :src="item.img" alt="" />
      <div class="project-card-info">
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.path }}</p>
        </div>
        <Btn />
      </div>
    </div>
  </div>
</template>

<script>
import Btn from './UI/button/Btn.vue';

export default {
  props: {
    projects: null,
  },
  components: { Btn },
};
</script>

<style lang="scss" scoped>
.project-cards {
  width: 100%;
  column-count: 2;
  margin-top: 61px;
}
.project-card {
  width: 585px;
  overflow: hidden;
}
.project-card-info {
  max-width: 585px;
  margin-top: 33px;
  margin-bottom: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h3 {
    @include DMSerifDisplay25;
  }
  & p {
    @include Jost22;
    color: #4d5053;
  }
}
</style>
