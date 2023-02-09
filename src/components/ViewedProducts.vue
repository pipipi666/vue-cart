<template>
  <div>
    <div class="viewed__header">
      <h2>Просмотренные товары</h2>
      <div>cтрелки</div>
    </div>
    <ul class="list">
      <li v-for="item in getViewedProduct" :key="item.id">
        <viewed-item :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ViewedItem from "./ViewedItem.vue";

export default {
  components: { ViewedItem },
  name: "ViewedProducts",
  computed: mapGetters(["getViewedProduct"]),
};
</script>

<style scoped lang="scss">
.viewed__header {
  margin-top: 95px;
  display: flex;
  justify-content: space-between;
}
.list {
  margin: 47px 0;
  display: flex;
  gap: 20px;
}
</style>
