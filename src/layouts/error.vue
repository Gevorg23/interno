<template>
  <AppHeader />
  <main>
    <slot />
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: { AppHeader },
};
</script>
