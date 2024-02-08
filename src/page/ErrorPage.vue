<template>
  <div class="errorPage content">
    <div class="errorPage-info">
      <h1>404</h1>
      <p>We are sorry, but the page you requested was not found</p>
      <button class="errorPage-info__btn">
        <router-link to="/">
          Bar To Home
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
        </router-link>
      </button>
    </div>
    <div class="errorPage-img">
      <img src="img/errorPage/img_1.jpg" alt="Изображение" />
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  components: {},
};
</script>

<style lang="scss">
/*Error Page*/
.content {
  width: 1201px;
  margin: 0 auto;
}
.errorPage {
  display: flex;
  justify-content: space-between;
  gap: 50px;
}
.errorPage-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  & h1 {
    @include DMSerifDisplay250ColorCDA274;
  }
  & p {
    @include DMSerifDisplay35;
  }
}
.errorPage-info__btn {
  width: 253px;
  height: 75px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 18px;
  background: #292f36;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  text-align: center;
  & a {
    @include JostBTN18;
    color: $colorTextBtn;
  }
  & svg {
    margin-left: 12px;
  }
}
.errorPage-img {
  height: 550px;
  border-bottom-left-radius: 353px;
  overflow: hidden;
}
</style>
