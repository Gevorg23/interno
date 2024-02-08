<template>
  <div>
    <!-- BANER -->
    <section class="main-header">
      <img class="main-header__baner" src="img/ProjectPage/StartProject.png" alt="baner" />
      <div class="main-header-title">
        <h2 class="main-header-title__title">Our Project</h2>
        <p class="adressPage">Home / Project</p>
      </div>
    </section>
    <section class="content project">
      <BtnProject :tags="Object.keys(projects)" v-model:btnText="btnText" />

      <ProjectCards :projects="projects[btnText]" />

      <div class="articlesNews-btnPage">
        <button class="btnPage active">01</button>
        <button class="btnPage">02</button>
        <button class="btnPage">03</button>
        <button class="btnPageNext">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
          >
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            <path
              d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCards from '@/components/ProjectCards.vue';
import BtnProject from '@/components/UI/button/BtnProject.vue';

export default {
  components: { BtnProject, ProjectCards },
  data() {
    return {
      btnText: 'Bed Room',
      projects: {
        Bathroom: [],
        'Bed Room': [
          {
            img: 'img/ProjectPage/BedRoom/img_1.png',
            title: 'Minimal Bedroom',
            path: 'Decor / Artchitecture',
            favourites: false,
          },
          {
            img: 'img/ProjectPage/BedRoom/img_3.png',
            title: 'Classic Minimal Bedroom',
            path: 'Decor / Artchitecture',
            favourites: false,
          },
          {
            img: 'img/ProjectPage/BedRoom/img_5.png',
            title: 'Minimal Bedroom table',
            path: 'Decor / Artchitecture',
            favourites: false,
          },

          {
            img: 'img/ProjectPage/BedRoom/img_7.png',
            title: 'Modern Medroom',
            path: 'Decor / Artchitecture',
            favourites: false,
          },
          {
            img: 'img/ProjectPage/BedRoom/img_2.png',
            title: 'Minimal Bedroom',
            path: 'Decor / Artchitecture',
            favourites: false,
          },
          {
            img: 'img/ProjectPage/BedRoom/img_4.png',
            title: 'Modern Bedroom',
            path: 'Decor / Artchitecture',
            favourites: false,
          },
          {
            img: 'img/ProjectPage/BedRoom/img_6.png',
            title: 'System Table',
            path: 'Decor / Artchitecture',
            favourites: false,
          },
          {
            img: 'img/ProjectPage/BedRoom/img_8.png',
            title: 'Modern Medroom',
            path: 'Decor / Artchitecture',
            favourites: false,
          },
        ],
        Kitchan: [],
        'Living Area': [],
      },
    };
  },
};
</script>

<style lang="scss">
.project {
  margin-top: 200px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
