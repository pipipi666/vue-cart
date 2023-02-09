<template>
  <div class="cart__preview">
    <img class="cart__preview_icon" alt="" src="../assets/cart-icon.svg" />
    <div class="cart__preview_info">
      <span>Ваша корзина</span>
      <span class="text_secondary text_s">3 товара</span>
      <span class="text_s">50 576 ₽</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartPreview",
};
</script>

<style scoped lang="scss">
.cart__preview {
  display: flex;
  align-items: center;
  gap: 10px;
  .cart__preview_icon {
    width: 32px;
    height: 32px;
  }
  .cart__preview_info {
    display: flex;
    flex-direction: column;
    text-align: start;
  }
}
</style>
