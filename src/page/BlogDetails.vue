<template>
  <!-- BANER -->
  <section class="main-header">
    <img class="main-header__baner" src="img/BlogDetails/StartImg.jpg" alt="StartImg" />
  </section>

  <section id="blogDetails" class="blogDetails content">
    <!-- Contetn -->
    <div class="blogDetails-content">
      <h3 class="blogDetails-content__title">Let’s Get Solution for Building Construction Work</h3>
      <div class="blogDetails-content-img">
        <img class="blogDetails-content__img" :src="articles[tag].img1" :alt="tag" />
      </div>

      <div class="content-date">
        <p>26 December,2022</p>
        <p>Interior / Home / Decore</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
        to popular belief.There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injecthumour, or randomised words which
        don't look even slightly believable.
        <br /><br />
        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
        tend to repeat predefined chunks as necessary.
      </p>
      <div class="content-quote">
        <p>,,</p>
        <p>The details are not the details. They make the design.</p>
      </div>
      <h3 class="blogDetails-content__title">Design sprints are great</h3>
      <p>
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
        to popular belief.There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered.
      </p>
      <ol class="blogDetails-content__list">
        <li>
          <span>
            Contrary to popular belief.There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered.
          </span>
        </li>
        <li>
          <span>
            Contrary to popular belief.There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered.
          </span>
        </li>
        <li>
          <span>
            Contrary to popular belief.There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered.
          </span>
        </li>
      </ol>
      <div class="blogDetails-content-img blogDetails-content__img2">
        <img class="blogDetails-content__img" :src="articles[tag].img2" alt="tag" />
      </div>

      <p>
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
        to popular belief.There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered.
      </p>
    </div>

    <!-- Tags -->
    <BtnBlogDetails :tags="Object.keys(articles)" v-model:modelValue="tag" />
  </section>
</template>

<script>
import BtnBlogDetails from '@/components/BtnBlogDetails.vue';

export default {
  name: 'BlogDetails',
  components: { BtnBlogDetails },
  data() {
    return {
      tag: 'Kitchen',
      articles: {
        Kitchen: {
          img1: 'img/BlogDetails/img_1.png',
          img2: 'img/BlogDetails/img_2.png',
        },
        Bedroom: {
          img1: 'img/BlogDetails/img_3.jpg',
          img2: 'img/BlogDetails/img_4.jpg',
        },
        Building: {
          img1: 'img/BlogDetails/img_5.jpg',
          img2: 'img/BlogDetails/img_6.jpg',
        },
        Architecture: {
          img1: 'img/BlogDetails/img_7.jpg',
          img2: 'img/BlogDetails/img_8.webp',
        },
        'Kitchen Planning': {
          img1: 'img/BlogDetails/img_9.jpg',
          img2: 'img/BlogDetails/img_10.jpg',
        },
      },
    };
  },
  methods: {
    tagAdd(tag, e) {
      const tags = document.querySelectorAll('.tags-main-block');
      tags.forEach((e) => e.classList.remove('tags-main-block__activ'));
      e.target.tagName === 'P'
        ? e.target.parentNode.classList.toggle('tags-main-block__activ')
        : e.target.classList.toggle('tags-main-block__activ');
      this.tag = tag;
    },
  },
};
</script>

<style lang="scss">
.main-header {
  position: relative;
  height: 356px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
}
.main-header__baner {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.main-header-title {
  position: relative;
  z-index: 2;
  padding: 41px 78px;
  background-color: #fff;
  border-radius: 37px 37px 0 0;
  text-align: center;
}
.main-header-title__title {
  @include DMSerifDisplay50;
}
.adressPage {
  @include Jost22;
}
.blogDetails {
  padding-top: 180px;
  display: flex;
  gap: 56px;
}

/* Content */
.blogDetails-content {
  min-width: 800px;
  max-width: 800px;
  margin-bottom: 95px;
  & > p {
    @include Jost22;
  }
}
.blogDetails-content__title {
  @include DMSerifDisplay50;
  margin-bottom: 23px;
}
.blogDetails-content-img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  overflow: hidden;
}
.blogDetails-content__img {
  width: 100%;
  height: 365px;
  border-radius: 50px;
  object-fit: cover;
}
.content-date {
  @include Jost16;
  margin-bottom: 4px;
  padding: 42px 0px;
  padding-right: 68px;
  display: flex;
  justify-content: space-between;
}
.content-quote {
  margin-top: 40px;
  margin-bottom: 55px;
  padding: 35px 220px;
  text-align: center;
  background-color: #f4f0ec;
  border-radius: 50px;
  & p:first-child {
    @include DMSerifDisplay150ItalicColorCDA274;
    margin-top: -75px;
  }
  & p:last-child {
    @include DMSerifDisplay25ItalicColorCDA274;
    margin-top: -5px;
  }
}
.blogDetails-content__list {
  @include DMSerifDisplay20;
  margin-top: 20px;
  margin-bottom: 42px;
  list-style-type: none;
  counter-reset: my-counter;
  & li {
    position: relative;
    max-width: 750px;
    margin-left: 20px;
    margin-bottom: 32px;
  }
  & li::before {
    position: absolute;
    top: 2px;
    left: -20px;
    content: counter(my-counter);
    counter-increment: my-counter;
    margin-right: 8px;
  }
  & span {
    @include Jost22;
  }
}

.blogDetails-content__img2 {
  margin-bottom: 34px;
}

/* Tags */
.tags {
}
.tags-title {
  @include DMSerifDisplay25;
  margin-bottom: 25px;
}

.tags-main {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tags-main-block {
  @include Jost18;
  margin-bottom: 2px;
  padding: 6px 31px;
  border-radius: 10px;
  background-color: $backgroundSectionCounter;
  cursor: pointer;
}
.tags-main-block__activ {
  color: #fff;
  background-color: #292f36;
}
</style>
