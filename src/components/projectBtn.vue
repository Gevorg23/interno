<template>
  <button>{{ btntext }}</button>
</template>

<script>
export default {
  props: {
    btnText,
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
}
</style>
