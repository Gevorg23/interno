<template>
  <header>
    <div class="header-content">
      <a href="./index.html">
        <router-link to="/">
          <div class="logo">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                fill="#CDA274"
              />
            </svg>
            <p>Interno</p>
          </div>
        </router-link>
      </a>

      <nav class="navMenu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/project">Project</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
header {
  width: 1201px;
  margin: 0 auto;
}
.header-content {
  padding: 52px 0 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  @include DMSerifDisplay40;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.navMenu ul {
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 49px;
  & li {
    transition: transform 0.5s;
    &:hover {
      transform: scale(1.2);
    }
  }

  & a {
    @include Jost20;
  }
}
</style>
