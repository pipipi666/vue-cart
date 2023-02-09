<template>
  <div v-if="getProductsCount" class="cart-main">
    <div class="cart-main__list">
      <cart-list />
      <extra-service />
    </div>
    <cart-total />
  </div>
  <div class="text_l message" v-else>Ваша корзина пуста</div>
</template>

<script>
import { mapGetters } from "vuex";
import CartList from "./CartList.vue";
import CartTotal from "./CartTotal.vue";
import ExtraService from "./ExtraService.vue";

export default {
  components: { CartList, ExtraService, CartTotal },
  name: "CartMain",
  computed: mapGetters(["getProductsCount"]),
};
</script>

<style scoped lang="scss">
.cart-main {
  display: flex;
  gap: 55px;
  .cart-main__list {
    flex: 1;
  }
}
.message {
  margin-top: 30px;
}
</style>
