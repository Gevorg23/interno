<template>
  <button class="card__btn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="52
      "
      viewBox="0 0 52 52"
      fill="none"
    >
      <circle cx="26" cy="26" r="26" fill="#F4F0EC" />
      <path
        d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
        stroke="#292F36"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;
  cursor: pointer;
  border: none;
  border-radius: 25px;
  & circle {
    transition: fill 0.3s;
  }
}
@media (hover: hover) {
  .blog-card:hover .card__btn svg circle {
    fill: #fff;
  }
  circle:hover {
    fill: $colorAccent;
  }
}
</style>
