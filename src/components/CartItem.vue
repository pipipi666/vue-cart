<template>
  <div class="card">
    <img class="card__image" :src="getImgUrl(item.image)" />
    <div class="card__info">
      <span class="item_name text_m text_b"
        >{{ item.category }} {{ item.model }}</span
      >
      <span class="description text_s"
        >{{ item.characteristics.squareMin }}-{{
          item.characteristics.squareMax
        }}/{{ item.characteristics.circulation }} м<sup><small>3</small></sup
        >/ч / {{ item.characteristics.isGidro && "Гидрорегулируемый расход" }} /
        {{ item.characteristics.isSensor && "От датчика присутствия" }}</span
      >
      <span class="item_code text_secondary">Артикул: {{ item.code }}</span>
    </div>
    <div class="card__calc">
      <main-button
        class="card__calc_left"
        btnType="button_counter"
        :onClick="decrement"
        >-</main-button
      >
      <div class="card__calc_count">{{ item.quantity }}</div>
      <main-button
        class="card__calc_right"
        btnType="button_counter"
        :onClick="increment"
        >+</main-button
      >
    </div>
    <span class="card__text_price text_price text_l"
      >{{ (item.price * item.quantity).toLocaleString("ru") }} ₽</span
    >
    <button class="card__button_close" @click="deleteP"></button>
  </div>
</template>

<script>
import MainButton from "./MainButton.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { MainButton },
  name: "CartItem",
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
  computed: mapGetters(["getProductCount"]),
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
  margin-top: 25px;
  display: flex;
  align-items: center;
  padding: 0 6px 20px 15px;
  gap: 30px;
  min-height: 120px;
  .card__image {
    width: 100px;
    height: 100px;
  }

  .card__info {
    height: 93px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    .item_name {
      height: 23px;
      overflow: hidden;
    }
    .description {
      height: 36px;
      overflow: hidden;
    }
    .item_code {
      height: 21px;
      overflow: hidden;
    }
  }
  .card__calc {
    display: flex;
    gap: 2px;
    .card__calc_left {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .card__calc_right {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    .card__calc_count {
      width: 35px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f6f8fa;
    }
  }
  .card__text_price {
    margin-right: 20px;
    width: 125px;
    display: flex;
    justify-content: flex-end;
  }
  .card__button_close {
    width: 12px;
    height: 12px;
    position: relative;
    background: none;
    border: none;
    align-self: flex-start;

    &:before,
    &:after {
      position: absolute;
      content: " ";
      height: 17px;
      width: 2px;
      background-color: #333;
      right: 5px;
      top: -2px;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
}
</style>
