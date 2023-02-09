<template>
  <div>
    <div class="viewed__header">
      <h2>Просмотренные товары</h2>
      <div class="viewed__header__pagination">
        <button class="button prev"><i class="left"></i></button>
        <div class="text_pages">
          <span class="current-page">{{ pagesIndex }} </span>
          <span class="text_secondary text_m"> / {{ pagesCount }}</span>
        </div>
        <button class="button next"><i class="right"></i></button>
      </div>
    </div>
    <div
      class="swiper swiper-container"
      v-swiper:mySwiper="swiperOptions"
      @transitionStart="transitionStart"
    >
      <div class="swiper-wrapper">
        <div
          v-for="item in getViewedProducts"
          :key="item.id"
          class="swiper-slide"
        >
          <viewed-item :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ViewedItem from "./ViewedItem.vue";

export default {
  components: { ViewedItem },
  name: "ViewedProducts",
  computed: {
    ...mapGetters(["getViewedProducts"]),
  },
  data() {
    return {
      pagesCount: 1,
      pagesIndex: 1,
      swiperOptions: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 50,
        navigation: {
          nextEl: ".button.next",
          prevEl: ".button.prev",
        },
      },
    };
  },
  mounted() {
    this.pagesCount = Math.round(this.mySwiper.slides.length / 4);
  },
  methods: {
    transitionStart() {
      const { realIndex } = this.mySwiper;
      this.pagesIndex = Math.round((realIndex + 1) / 4) + 1;
    },
  },
};
</script>

<style scoped lang="scss">
.viewed__header {
  margin: 95px 0 47px;
  display: flex;
  justify-content: space-between;
  .viewed__header__pagination {
    display: flex;
    align-items: center;
    gap: 15px;
    .button {
      width: 50px;
      height: 50px;
      background-color: var(--page-color);
      border-radius: 50%;
      i {
        border: solid #fff;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 7px;
        margin-top: 3px;
      }
      .right {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        margin-right: 5px;
      }

      .left {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
        margin-left: 5px;
      }
    }
    .text_pages {
      display: flex;
      align-items: center;
      .current-page {
        font-size: 24px;
      }
    }
  }
}
</style>
