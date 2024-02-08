<template>
  <div class="latestPost-block">
    <div class="latestPost-block-img">
      <img src="img/Blog/LatestPost.png" alt="Latest Post" />
    </div>
    <div class="latestPost-block-text">
      <h5 class="latestPost-block-text__title">
        Low Cost Latest Invented Interior Designing Ideas
      </h5>
      <p class="latestPost-block-text__p">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
        dignissim maximus.posuere in.Contrary to popular belief.
        <br />
        <br />
        Lorem Ipsum is not simply random text. It has roots in a piece of
        classica.
      </p>
      <div class="latestPost-block-text-DateAndBtn">
        <p class="latestPost-block-text-DateAndBtn__data">26 December, 2022</p>
        <Btn />
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "../UI/button/Btn.vue";

export default { components: { Btn } };
</script>

<style lang="scss">
.latestPost-block {
  padding: 22px;
  display: flex;
  gap: 65px;
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}
.latestPost-block-img img {
  border-radius: 45px;
}
.latestPost-block-text {
  padding: 51px 50px 51px 0;
}
.latestPost-block-text__title {
  @include DMSerifDisplay25;
  margin-bottom: 23px;
}
.latestPost-block-text__p {
  @include Jost22;
}
.latestPost-block-text-DateAndBtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.latestPost-block-text-DateAndBtn__data {
  @include Jost16;
}
</style>
