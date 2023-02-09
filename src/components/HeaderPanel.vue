<template>
  <div class="header">
    <div class="header__content">
      <cart-preview></cart-preview>
    </div>
  </div>
</template>

<script>
import CartPreview from "./CartPreview.vue";
export default {
  components: { CartPreview },
  name: "HeaderPanel",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  .header__content {
    margin: 0 80px;
    width: 1280px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
