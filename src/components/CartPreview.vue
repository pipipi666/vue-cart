<template>
  <div class="cart__preview">
    <img class="cart__preview_icon" alt="" src="../assets/cart-icon.svg" />
    <div class="cart__preview_info">
      <span>Ваша корзина</span>
      <span class="text_secondary text_s"
        >{{ getProductsCount }} товар{{ suff }}</span
      >
      <span class="text_s">{{ getTotalPrice.toLocaleString("ru") }} ₽</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getSuff } from "../utils/utils.js";
export default {
  name: "CartPreview",
  computed: {
    ...mapGetters(["getProductsCount", "getTotalPrice"]),
    suff() {
      return getSuff(this.getProductsCount);
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
