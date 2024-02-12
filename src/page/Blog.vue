<template>
  <Baner :img="'img/Blog/StartImg.png'" :title="'Articles & News'" :path="'Home / Blog'" />

  <!-- Latest Post -->
  <section class="latestPost">
    <div class="latestPost-content content">
      <h3 class="latestPost__h3">Latest Post</h3>
      <BlogBlock />
    </div>
  </section>
  <!-- Articles & News -->
  <section id="articlesNews" class="articlesNews">
    <div class="articlesNews-content content">
      <h3 class="latestPost__h3">Articles & News</h3>
      <CardProduct :blogs="articlesNewsBlogs" />

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
    </div>
  </section>
</template>

<script>
import Baner from '@/components/Baner.vue';
import BlogBlock from '@/components/BlogBlock/BlogBlock.vue';
import CardProduct from '@/components/CardProduct/CardProduct.vue';
import BtnNextPage from '@/components/UI/button/BtnNextPage.vue';

export default {
  name: 'Blog',
  components: { CardProduct, BlogBlock, BtnNextPage, Baner },
  data() {
    return {
      articlesNewsBlogs: [
        {
          id: 1,
          img: 'img/Blog/imgBlog_1.png',
          titleImg: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          data: '26 December,2022',
        },
        {
          id: 2,
          img: 'img/Blog/imgBlog_2.png',
          titleImg: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          data: '22 December,2022',
        },
        {
          id: 3,
          img: 'img/Blog/imgBlog_3.png',
          titleImg: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          data: '25 December,2022',
        },
        {
          id: 4,
          img: 'img/Blog/imgBlog_4.png',
          titleImg: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          data: '26 December,2022',
        },
        {
          id: 5,
          img: 'img/Blog/imgBlog_5.png',
          titleImg: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          data: '22 December,2022',
        },
        {
          id: 6,
          img: 'img/Blog/imgBlog_6.png',
          titleImg: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          data: '25 December,2022',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
/*LATEST POST*/

.latestPost {
  margin-top: 185px;
}

.latestPost__h3 {
  @include DMSerifDisplay50;
  margin-bottom: 26px;
}

.articlesNews {
  padding-top: 145px;
  padding-bottom: 197px;
}
.articlesNews-main-card {
  display: flex;
  flex-wrap: wrap;
  gap: 27px;
}
.articlesNews-btnPage {
  margin-top: 57px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.btnPage {
  width: 52px;
  height: 52px;
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.16px;
  color: #292f36;
  border-radius: 26px;
  border: 1px solid #cda274;
  background-color: #fff;
  cursor: pointer;
}
.btnPageNext {
  border: none;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
}
@media (hover: hover) {
  .btnPage:hover {
    background-color: #f4f0ec;
  }
  .btnPageNext:hover svg {
    fill: #f4f0ec;
  }
}

.active {
  cursor: auto;
  border: none;
  background-color: #f4f0ec;
}
</style>
