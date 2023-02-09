<template>
  <div class="extra wrapper">
    <input
      class="extra__checkbox"
      type="checkbox"
      name="extra-checkbox"
      id="extra-checkbox"
      @click="toggleInstallation"
    />
    <div class="extra__icon">
      <img class="extra__icon__img" src="../assets/tools.svg" alt="" />
    </div>
    <div class="extra__text">
      <span class="text_b text_m">Установка</span
      ><span class="text_secondary"
        >Отметьте, если Вам необходима консультация профессионала по монтажу
        выбранных товаров.</span
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ExtraService",
  computed: mapGetters(["getInstallation"]),
  methods: {
    ...mapMutations(["toggleInstallation"]),
  },
};
</script>

<style scoped lang="scss">
.extra {
  margin-top: 25px;
  height: 102px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 40px 0 25px;
  .extra__checkbox {
    height: 20px;
    width: 20px;
  }
  .extra__icon {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    .extra__icon__img {
      width: 30px;
      height: 30px;
    }
  }
  .extra__text {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
}
</style>
