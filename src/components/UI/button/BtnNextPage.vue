<template>
  <button class="btnPage">{{ page }}</button>
</template>

<script>
export default {
  props: {
    numberPage: [String, Number],
  },
  computed: {
    page(){
      return '0' + this.numberPage
    }
  }
};
</script>

<style lang="scss">
.articlesNews-btnPage {
  margin-top: 57px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.btnPage {
  width: 52px;
  height: 52px;
  font-family: "Jost", sans-serif;
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
.btnPageNext:hover svg {
  fill: #f4f0ec;
}
.active {
  cursor: auto;
  border: none;
  background-color: #f4f0ec;
}
</style>
