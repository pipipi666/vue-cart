<template>
  <div class="cart-title">
    <h1>Ваша корзина</h1>
    <div v-show="getProductsCount" class="cart-title__info">
      <span class="text_secondary text_l"
        >{{ getProductsCount }} товар{{ suff }}</span
      >
      <main-button
        btnType="button_secondary"
        class="cart-title__info__button text_secondary"
        :onClick="clearCart"
        >Очистить корзину</main-button
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { getSuff } from "../utils/utils.js";
import MainButton from "./MainButton.vue";
export default {
  components: { MainButton },
  name: "CartTitle",
  computed: {
    ...mapGetters(["getProductsCount"]),
    suff() {
      return getSuff(this.getProductsCount);
    },
  },
  methods: {
    ...mapMutations(["clearCart"]),
  },
};
</script>

<style scoped lang="scss">
.cart-title {
  margin-top: 60px;
  width: 800px;
  display: flex;
  align-items: flex-end;
  gap: 22px;
  .cart-title__info {
    flex: 1;
    display: flex;
    justify-content: space-between;
    .cart-title__info__button {
      justify-content: flex-end;
    }
  }
  @media screen and (max-width: 1400px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    .cart-title__info {
      width: 100%;
    }
  }
}
</style>
