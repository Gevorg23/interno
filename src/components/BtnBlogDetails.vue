<template>
  <div class="tags">
    <h4 class="tags__title">Tags</h4>

    <div class="tags__main">
      <button
          v-for="tag in tags"
          :key="tag"
          class="tag-btn"
          :class="{
            'tag-btn--active': tag === modelValue
          }"
          @click="$emit('update:modelValue', tag)"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: Array,
    modelValue: String,
  },
  emits: ['update:modelValue']
}
</script>

<style lang="scss" scoped>
.tags {
  &__title {
    @include DMSerifDisplay25;

    margin-bottom: 25px;
  }

  &__main {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
}

.tag-btn {
  @include Jost18;

  margin-bottom: 2px;
  padding: 6px 31px;
  border-radius: 10px;
  background-color: $backgroundSectionCounter;
  cursor: pointer;
  border: none;
  outline: none;

  &--active {
    color: #fff;
    background-color: #292f36;
  }
}
</style>