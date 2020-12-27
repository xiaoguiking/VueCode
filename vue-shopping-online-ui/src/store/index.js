/**
/**
 *  vuex
 */
import Vue from "vue";
import Vuex from "vuex";
import {
  cartMutations,
  manufacturerMutations,
  productMutations
} from "./mutations";
import { manufacturerGetters, productGetters } from "./getters";
import { manufacturerActions, productActions } from "./actions";

Vue.use(Vuex);

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
    manufacturers: [],
    // selected manufacturer
    manufacturer: {}
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
    ...productActions,
    ...manufacturerActions
  }
});
