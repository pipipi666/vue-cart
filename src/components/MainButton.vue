<template>
  <button v-bind:class="btnType" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    btnType: {
      validator(value) {
        return [
          "button_default",
          "button_accent",
          "button_secondary",
          "button_counter",
        ].includes(value);
      },
    },
    onClick: {
      type: Function,
      default() {
        console.log("a");
      },
    },
  },
};
</script>

<style scoped lang="scss">
.button_accent,
.button_default {
  height: 54px;
  border-radius: 4px;
}
.button_default {
  background-color: #fff;
  color: #0069b4;
  border: 1px solid #0069b4;
}
.button_accent {
  background-color: #0069b4;
  color: #fff;
}
.button_secondary {
  text-decoration: underline;
  font-size: 14px;
}
.button_counter {
  width: 34px;
  height: 34px;
  background-color: #f6f8fa;
}
</style>
