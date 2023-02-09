<template>
  <div class="cart__preview">
    <img class="cart__preview_icon" alt="" src="../assets/cart-icon.svg" />
    <div class="cart__preview_info">
      <span>Ваша корзина</span>
      <span class="text_secondary text_s"
        >{{ getProductsCount }} товар{{ suff }}</span
      >
      <span class="text_s">{{ getTotalPrice }} ₽</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartPreview",
  computed: {
    ...mapGetters(["getProductsCount", "getTotalPrice"]),
    suff() {
      const s =
        this.getProductsCount % 10 > 4 ||
        !(this.getProductsCount % 10) ||
        (this.getProductsCount > 10 && this.getProductsCount < 15)
          ? "ов"
          : this.getProductsCount % 10 === 1
          ? ""
          : "а";
      return s;
    },
  },
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
