<template>
  <AppHeader />
  <main>
    <slot />
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: { AppFooter, AppHeader },
};
</script>
