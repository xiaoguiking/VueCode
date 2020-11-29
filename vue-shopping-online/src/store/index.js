/**
/**
 *  vuex
 */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {
  cartMutations,
  manufacturerMutations,
  productMutations
} from "./mutations";
import { manufacturerGetters, productGetters } from "./getters";

Vue.use(Vuex);

// const API_BASE = 'http://localhost:3000/api/v1'

export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [],
    // all manufacturers
    manufacturers: []
  },
  getters: {
    ...productGetters,
    ...manufacturerGetters
  },
  mutations: {
    ...productMutations,
    ...cartMutations,
    ...manufacturerMutations
  },
  actions: {
    // 获取所有的产品
    // commit('ALL_PRODUCTS');
    allProducts({ commit }) {
      axios.get("/api/v1/products").then(response => {
        console.log(response, "response");
        commit("ALL_PRODUCTS_SUCCESS", {
          products: response.data
        });
      });
    },
    removeProducts({ commit }) {
      axios.delete(`/api/v1/products/${productId}`).then(() => {
        // 返回 productId，用于删除本地对应的商品
        commit("REMOVE_PRODUCT_SUCCESS", {
          productId
        });
      });
    },
    productById({ commit }, payload) {
      commit("PRODUCT_BY_ID");
      const { productId } = payload;
      console.log(productId, "productId");
      axios.get(`/api/v1/products/${productId}`).then(response => {
        console.log(response, "productId");
        commit("PRODUCT_BY_ID_SUCCESS", {
          product: response.data
        });
      });
    },
    allManufacturer({ commit }) {
      axios.get("/api/v1/manufacturers").then(response => {
        commit("ALL_MANUFACTURERS_SUCCESS", {
          manufacturers: response.data
        });
      });
    },
    removeManufacturer({ commit }, payload) {
      commit("REMOVE_MANUFACTURER");
      const { manufacturerId } = payload;
      axios.delete(`/manufacturers/${manufacturerId}`).then(() => {
        commit("REMOVE_MANUFACTURER_SUCCESS"),
          {
            manufacturerId
          };
      });
    }
  }
});
