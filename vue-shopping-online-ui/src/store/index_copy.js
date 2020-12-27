/**
/**
 *  vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

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
    allProducts (state) {
      return state.products
    },
    productById: (state, getters) => id => {
      if (getters.allProducts.length > 0) {
        return getters.allProducts.filter(p => p._id == id)[0]
      } else {
        return state.product
      }
    }
  },
  mutations: {
    ADD_TO_CART (state, payload) {
      const { product } = payload
      state.cart.push(product)
    },
    REMOVE_FROM_CART (state, payload) {
      const { productId } = payload
      state.cart = state.cart.filter(product => product._id !== productId)
    },
    ALL_PRODUCTS (state) {
      state.showLoader = true
    },
    ALL_PRODUCTS_SUCCESS (state, payload) {
      const { products } = payload
      state.showLoader = false
      state.products = products
    },
    PRODUCT_BY_ID (state) {
      state.showLoader = true
    },
    PRODUCT_BY_ID_SUCCESS (state, payload) {
      state.showLoader = false

      const { product } = payload
      state.product = product
    }
  },
  actions: {
    // 获取所有的产品
    // commit('ALL_PRODUCTS');
    allProducts ({ commit }) {
      axios.get('/api/v1/products').then(response => {
        console.log(response, 'response')
        commit('ALL_PRODUCTS_SUCCESS', {
          products: response.data
        })
      })
    },
    productById ({ commit }, payload) {
      commit('PRODUCT_BY_ID')
      const { productId } = payload
      console.log(productId, 'productId')
      axios.get(`/api/v1/products/${productId}`).then(response => {
        console.log(response, 'productId')
        commit('PRODUCT_BY_ID_SUCCESS', {
          product: response.data
        })
      })
    }
  }
})
