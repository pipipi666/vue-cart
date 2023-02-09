<template>
  <div id="app">
    <header-panel />
    <div class="content">
      <bread-crumbs />
      <cart-title />
      <cart-main />
      <viewed-products />
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "./components/BreadCrumbs.vue";
import CartMain from "./components/CartMain.vue";
import CartTitle from "./components/CartTitle.vue";
import HeaderPanel from "./components/HeaderPanel.vue";
import ViewedProducts from "./components/ViewedProducts.vue";

export default {
  name: "App",
  components: {
    HeaderPanel,
    BreadCrumbs,
    CartTitle,
    CartMain,
    ViewedProducts,
  },
};
</script>

<style lang="scss">
:root {
  --breadcrumbs-color: #33374e;
  --base-color: #1f2432;
  --secondary-color: #797b86;
  --bg-frame: #f6f8fa;
  --accent-color: #0069b4;
  --page-color: #90a2b5;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: var(--base-color);
  font-family: Lato, Avenir, Helvetica, Arial, sans-serif;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}
h1 {
  font-size: 44px;

  @media screen and (max-width: 992px) {
    font-size: 34px;
  }
}

h2 {
  font-size: 30px;
  @media screen and (max-width: 992px) {
    font-size: 24px;
  }
}

h3 {
  font-size: 24px;
}

.text_secondary {
  color: var(--secondary-color);
}

.text_s {
  font-size: 12px;
  line-height: 18px;
}

.text_m {
  font-size: 16px;
}

.text_l {
  font-size: 18px;
}

.text_b {
  font-weight: 700;
}

.text_numeric {
  font-family: Roboto, sans-serif;
}

.wrapper {
  background-color: var(--bg-frame);
  border-radius: 5px;
}
#app {
  font-family: Lato, Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    width: 1440px;
    max-width: 100%;
    padding: 30px 80px 116px;
  }
}
</style>
