import Vue from "vue";
import Vuex from "vuex";
import products from "../utils/mock";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    installationPrice: 2000,
    euroCoef: 78.29,
    cartProducts: [products[0], products[1], products[2]],
    viewedProduct: products,
    isInstallationNeeded: false,
  },
  getters: {
    getProduct(state, id) {
      const product = state.cartProducts.find((item) => item.id === id);
      return product;
    },
    getCartProducts(state) {
      return state.cartProducts;
    },
    getViewedProduct(state) {
      return state.viewedProduct;
    },
    getInstallation(state) {
      return state.isInstallationNeeded;
    },
    getInstallationPrice(state) {
      return state.installationPrice;
    },
    getEuroCoef(state) {
      return state.euroCoef;
    },
    getProductsPrice(state) {
      return state.cartProducts.reduce(
        (sum, current) => sum + current.price * current.quantity,
        0
      );
    },
    getTotalPrice(state, getters) {
      return state.isInstallationNeeded
        ? getters.getProductsPrice + state.installationPrice
        : getters.getProductsPrice;
    },
    getProductsCount(state) {
      return state.cartProducts.reduce(
        (sum, current) => sum + current.quantity,
        0
      );
    },
    getProductCount(state, getters, id) {
      const product = state.cartProducts.find((item) => item.id === id);
      return product.quantity;
    },
  },
  mutations: {
    toggleInstallation(state) {
      state.isInstallationNeeded = !state.isInstallationNeeded;
    },
    incrementProduct(state, id) {
      const product = state.cartProducts.find((item) => item.id === id);
      product.quantity++;
    },
    decrementProduct(state, id) {
      const product = state.cartProducts.find((item) => item.id === id);
      product.quantity--;
      if (!product.quantity) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== id
        );
      }
    },
    deleteProduct(state, id) {
      state.cartProducts = state.cartProducts.filter((item) => item.id !== id);
    },
    clearCart(state) {
      state.cartProducts = [];
    },
  },
  actions: {},
  modules: {},
});
