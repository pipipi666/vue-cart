<template>
  <div class="wrapper total">
    <h3>Итого</h3>
    <ul class="total__list text_m">
      <li class="total__list__item">
        <span>Сумма заказа</span
        ><span class="text_numeric"
          >{{ getTotalPrice.toLocaleString("ru") }} ₽</span
        >
      </li>
      <li class="total__list__item">
        <span>Количество</span
        ><span class="text_numeric">{{ getProductsCount }} шт</span>
      </li>
      <li class="total__list__item">
        <span>Установка</span
        ><span class="text_numeric">
          {{ getInstallation ? getInstallationPrice : "Нет" }}</span
        >
      </li>
    </ul>
    <hr />
    <div class="total__result text_b">
      <span class="text_l">Стоимость товаров</span
      ><span class="total__result_sum text_b text_numeric"
        >{{ getTotalPrice.toLocaleString("ru") }} ₽</span
      >
    </div>
    <main-button btnType="button_accent" class="text_l"
      >Оформить заказ</main-button
    >
    <main-button btnType="button_default" class="text_l"
      >Купить в 1 клик</main-button
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MainButton from "./MainButton.vue";
export default {
  components: { MainButton },
  name: "CartTotal",
  computed: mapGetters([
    "getProductsPrice",
    "getTotalPrice",
    "getProductsCount",
    "getInstallation",
    "getInstallationPrice",
  ]),
};
</script>

<style scoped lang="scss">
.total {
  margin: 35px 0 auto;
  width: 425px;
  padding: 35px 30px;
  display: flex;
  flex-direction: column;
  .total__list {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 17px;
    .total__list__item {
      display: flex;
      justify-content: space-between;
    }
  }
  .total__result {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .total__result_sum {
      font-size: 26px;
    }
  }
  .button_accent {
    margin-top: 30px;
  }
  .button_default {
    margin-top: 12px;
  }
}
</style>
