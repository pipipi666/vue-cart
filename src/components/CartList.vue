<template>
  <ul class="list">
    <li v-for="(item, index) in getCartProducts" :key="item.id">
      <cart-item :item="item"></cart-item>
      <hr v-show="index < getCartProducts.length - 1" />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem.vue";

export default {
  components: { CartItem },
  name: "CartList",
  computed: mapGetters(["getCartProducts"]),
};
</script>

<style scoped lang="scss">
.list {
  margin-top: 50px;
  li {
    height: fit-content;
  }
}
hr {
  margin: 20px 0;
}
</style>
