<template>
  <div class="wrapper card">
    <img class="card__image" :src="getImgUrl(item.image)" />
    <span class="text_large text_b">{{ item.model }}</span>
    <span class="description">{{ item.description }}</span>
    <span class="text_large text_numeric text_price text_l"
      >{{ item.minPrice.toLocaleString("ru") }} ₽ -
      {{ item.maxPrice.toLocaleString("ru") }} ₽</span
    >
    <span class="text_m text_secondary"
      >{{ (item.minPrice / getEuroCoef).toFixed(2).toLocaleString("ru") }} € -
      {{ (item.maxPrice / getEuroCoef).toFixed(2).toLocaleString("ru") }}
      €</span
    >
    <main-button class="btn" btnType="button_accent">Подробнее</main-button>
  </div>
</template>

<script>
import MainButton from "./MainButton.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { MainButton },
  name: "ViewedItem",
  props: {
    item: {
      id: Number,
      quantity: Number,
      category: String,
      model: String,
      minPrice: Number,
      maxPrice: Number,
      price: Number,
      code: String,
      description: String,
      characteristics: {
        squareMin: Number,
        squareMax: Number,
        circulation: Number,
        isGidro: Boolean,
        isSensor: Boolean,
      },
      image: String,
    },
  },
  computed: mapGetters(["getProductCount", "getEuroCoef"]),
  methods: {
    getImgUrl(str) {
      const images = require.context("../assets/", false, /\.png$/);
      return images("./" + str + ".png");
    },
    ...mapMutations(["incrementProduct", "decrementProduct", "deleteProduct"]),
    increment() {
      this.incrementProduct(this.$props.item.id);
    },
    decrement() {
      this.decrementProduct(this.$props.item.id);
    },
    deleteP() {
      this.deleteProduct(this.$props.item.id);
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 305px;
  height: 563px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  .card__image {
    width: 245px;
    height: 245px;
    margin-bottom: 5px;
  }
  .description {
    flex: 1;
    margin: 10px 0;
  }

  .text_large {
    font-size: 22px;
  }

  .btn {
    margin-top: 20px;
  }
}
</style>
