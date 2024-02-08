<template>
  <section class="baner content">
    <img class="baner__img" src="img/backgroundSectionBanner.png" alt="" />
    <h2 class="baner__h2">Let Your Home<br />Be Unique</h2>
    <p class="baner__p">
      There are many variations of the passages of<br />
      lorem Ipsum fromavailable, majority.
    </p>
    <button class="baner__btn">
      Get Started
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
      >
        <path
          d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
          stroke="#CDA274"
          stroke-width="2"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </section>
  <section class="project content">
    <div class="project-header">
      <h2 class="project-header__h2">Follow Our Projects</h2>
      <p class="project-header__p">
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>
    </div>
    <div id="projectMain" class="project-main">
      <div
        v-for="projectCard in projectCards"
        :key="projectCard.id"
        class="project-main-card"
      >
        <div class="project-main-card-img">
          <img :src="projectCard.img" alt="img_1" />
        </div>
        <div class="project-main-card-text">
          <div class="project-main-card-text-info">
            <h2 class="project-main-card-text-info__h2">
              {{ projectCard.title }}
            </h2>
            <p class="project-main-card-text-info__p">
              {{ projectCard.text }}
            </p>
          </div>
          <button class="project-main-card-text__btn">
            <router-link to="/blog_details">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
              >
                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                <path
                  d="M32 44L40 35L32 26"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="counter">
    <div class="counter-content content">
      <div class="experiance counter-card">
        <p class="experiance__counter counter__num">12</p>
        <p class="experiance__text counter__text">Years Of Experiance</p>
      </div>
      <div class="successProject counter-card">
        <p class="successProject__counter counter__num">85</p>
        <p class="successProject__text counter__text">Success Project</p>
      </div>
      <div class="activeProject counter-card">
        <p class="activeProject__counter counter__num">15</p>
        <p class="activeProject__text counter__text">Active Project</p>
      </div>
      <div class="happyCustomers counter-card">
        <p class="happyCustomers__counter counter__num">95</p>
        <p class="happyCustomers__text counter__text">Happy Customers</p>
      </div>
    </div>
  </section>
  <section class="blog content">
    <div class="blog-header">
      <h2 class="blog-header__title">Articles & News</h2>
      <p class="blog-header__p">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
    </div>
    <div id="blogMain" class="blog-main">
      <div class="blog-main-card">
        <CardProduct v-for="blog in blogCards" :key="blog.id" :blog="blog" />
      </div>
    </div>
  </section>
</template>

<script>
import CardProduct from "@/components/CardProduct/CardProduct.vue";

export default {
  name: "Home",
  components: { CardProduct },
  data: () => ({
    projectCards: [
      {
        id: 1,
        img: "img/sectionProject/img_1.png",
        title: "Modern Kitchan",
        text: "Decor / Artchitecture",
      },
      {
        id: 2,
        img: "img/sectionProject/img_2.png",
        title: "Modern Kitchan",
        text: "Decor / Artchitecture",
      },
      {
        id: 3,
        img: "img/sectionProject/img_3.png",
        title: "Modern Kitchan",
        text: "Decor / Artchitecture",
      },
      {
        id: 4,
        img: "img/sectionProject/img_4.png",
        title: "Modern Kitchan",
        text: "Decor / Artchitecture",
      },
    ],
    blogCards: [
      {
        id: 1,
        img: "img/sectionBlog/img_1.png",
        titleImg: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        data: "26 December,2022",
      },
      {
        id: 2,
        img: "img/sectionBlog/img_2.png",
        titleImg: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas",
        data: "22 December,20222",
      },
      {
        id: 3,
        img: "img/sectionBlog/img_3.png",
        titleImg: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        data: "25 December,2022",
      },
    ],
  }),
};
</script>

<style lang="scss">
/*MAIN*/
/*Section Baner*/

.baner {
  position: relative;
  padding: 215px 52px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 70px;
  overflow: hidden;
}
.baner__img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.baner__h2 {
  position: relative;
  z-index: 10;
  @include DMSerifDisplay65;
  margin-bottom: 16px;
}
.baner__p {
  @include Jost22;
  margin-bottom: 21px;
}
.baner__btn {
  @include JostBTN18;
  width: 220px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background: #292f36;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  text-align: center;
  & svg {
    margin-left: 12px;
  }
}

/*Section Project*/
.project {
  margin-bottom: 94px !important;
}
.project-header {
  width: 737px;
  margin: 90px auto 93px;
  text-align: center;
}
.project-header__h2 {
  @include DMSerifDisplay50;
  margin-bottom: 8px;
}
.project-header__p {
  @include Jost22;
}
.project-main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 620px;
  column-gap: 100px;
  row-gap: 53px;
}
.project-main-card {
  &:nth-child(4n + 1) img {
    border-top-right-radius: 80px;
  }
  &:nth-child(4n + 2) img {
    border-top-left-radius: 80px;
  }
  &:nth-child(4n + 3) img {
    border-bottom-right-radius: 80px;
  }
  &:nth-child(4n + 4) img {
    border-bottom-left-radius: 80px;
  }
  &:nth-child(4n + 3) .project-main-card-img {
    margin-bottom: 38px;
  }
  &:nth-child(4n + 4) .project-main-card-img {
    margin-bottom: 38px;
  }
}
.project-main-card-img {
  margin-bottom: 20px;

  & img {
    overflow: hidden;
  }
}
.project-main-card-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project-main-card-text-info__h2 {
  @include DMSerifDisplay25;
}
.project-main-card-text-info__p {
  @include Jost22;
}
.project-main-card-text__btn {
  border: none;
  border-radius: 35px;
}

/*Section Counter*/
.counter {
  background: $backgroundSectionCounter;
}
.counter-content {
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 151px 0;
}
.counter-card {
  padding-right: 80px;
  border-right: 1px solid $colorAccent;
}
.counter-card:last-child {
  padding-right: 0;
  border-right: none;
}
.counter__num {
  @include DMSerifDisplay85;
  margin-bottom: 15px;
}
.counter__text {
  @include Jost22;
}

/*Section Blog*/
.blog {
  margin-bottom: 96px !important;
}
.blog-header {
  width: 811px;
  margin: 97px auto 53px;
  text-align: center;
}
.blog-header__title {
  @include DMSerifDisplay50;
  margin-bottom: 10px;
}
.blog-header__p {
  @include Jost22;
}
.blog-main {
}
.blog-main-card {
  display: flex;
  gap: 27px;
}
</style>
