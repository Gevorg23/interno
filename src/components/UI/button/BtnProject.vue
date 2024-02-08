<template>
  <div class="project-tags">
    <button
      v-for="tag in tags"
      :key="tag"
      class="tag-btn"
      :class="{
        'tag-btn--active': tag === btnText,
      }"
      @click="$emit('update:btnText', tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tags: Array,
    btnText: String,
  },
  emits: ['update:btnText'],
};
</script>

<style lang="scss" scoped>
.tag-btn {
  @include JostBTN18;
  color: $colorText;
  height: 100%;
  padding: 26px 66px;
  background-color: inherit;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  &--active {
    background-color: $colorAccent;
    color: $colorTextBtn;
  }
}

.project-tags {
  max-width: 880px;
  height: 75px;
  display: flex;
  border: 1px solid #cda274;
  border-radius: 18px;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
