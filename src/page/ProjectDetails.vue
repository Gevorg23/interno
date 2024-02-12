<template>
  <Baner :img="'img/ProjectDetails/ProjectDetailsBackground.jpeg'" />
  <section class="projectDetails content">
    <h2 class="projectDetails_title">Minimal Look Bedrooms</h2>
    <p class="projectDetails_text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim
      maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida
      dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the
      ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh.
      Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a
      pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis.
      Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
    </p>
    <div class="swiperBlock">
      <Swiper />
    </div>
  </section>
</template>

<script>
import Baner from '@/components/Baner.vue';
import Swiper from '@/components/Swiper.vue';

export default { components: { Baner, Swiper } };
</script>

<style lang="scss" scoped>
.swiperBlock {
  width: 100%;
  height: 800px;
}
</style>
