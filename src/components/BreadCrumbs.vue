<template>
  <div class="breadcrumbs">
    <a href="#">Главная</a>
    <div class="breadcrumbs__arrow"></div>
    <a href="#" class="text_secondary">Корзина</a>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbs",
};
</script>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  gap: 10px;
  align-items: center;
  .breadcrumbs__arrow {
    opacity: 0.8;
    border-top: 4px solid transparent;
    border-left: 5px solid var(--breadcrumbs-color);
    border-bottom: 4px solid transparent;
  }
}
</style>
