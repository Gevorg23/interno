<template>
  <component :is="$route.meta.layout">
    <router-view />
  </component>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: black;
}
li {
  list-style-type: none;
}
.content {
  width: 1201px;
  margin: 0 auto;
}
</style>
