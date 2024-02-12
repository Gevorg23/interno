<template>
  <div class="main-header-title">
    <h2 class="main-header-title__title">{{ title }}</h2>
    <p class="adressPage">{{ path }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    path: String,
  },
};
</script>

<style lang="scss" scoped>
.main-header-title {
  position: relative;
  z-index: 2;
  padding: 41px 78px;
  background-color: #fff;
  border-radius: 37px 37px 0 0;
  text-align: center;
}
.main-header-title__title {
  @include DMSerifDisplay50;
}
.adressPage {
  @include Jost22;
}
</style>
