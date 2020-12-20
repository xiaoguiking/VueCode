import axios from "axios";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
  MANUFACTURER_BY_ID,
  MANUFACTURER_BY_ID_SUCCESS,
  ADD_MANUFACTURER,
  ADD_MANUFACTURER_SUCCESS,
  UPDATE_MANUFACTURER,
  UPDATE_MANUFACTURER_SUCCESS,
  REMOVE_MANUFACTURER,
  REMOVE_MANUFACTURER_SUCCESS
} from "./mutation-types.js";

// const API_BASE = "http://localhost:3000/api/v1";

export const productActions = {
  allProducts({ commit }) {
    commit(ALL_PRODUCTS);

    axios.get(`/api/v1/products`).then(response => {
      commit(ALL_PRODUCTS_SUCCESS, {
        products: response.data
      });
    });
  },
  productById({ commit }, payload) {
    commit(PRODUCT_BY_ID);

    const { productId } = payload;
    axios.get(`/api/v1/products/${productId}`).then(response => {
      commit(PRODUCT_BY_ID_SUCCESS, {
        product: response.data
      });
    });
  },
  removeProduct({ commit }, payload) {
    commit(REMOVE_PRODUCT);

    const { productId } = payload;
    axios.delete(`/api/v1/products/${productId}`).then(() => {
      // 返回 productId，用于删除本地对应的商品
      commit(REMOVE_PRODUCT_SUCCESS, {
        productId
      });
    });
  },
  updateProduct({ commit }, payload) {
    commit(UPDATE_PRODUCT);

    const { product } = payload;
    axios.put(`/api/v1/products/${product._id}`, product).then(() => {
      commit(UPDATE_PRODUCT_SUCCESS, {
        product
      });
    });
  },
  addProduct({ commit }, payload) {
    commit(ADD_PRODUCT);

    const { product } = payload;
    axios.post(`/api/v1/products`, product).then(response => {
      commit(ADD_PRODUCT_SUCCESS, {
        product: response.data
      });
    });
  }
};

export const manufacturerActions = {
  allManufacturers({ commit }) {
    commit(ALL_MANUFACTURERS);

    axios.get(`/api/v1/manufacturers`).then(response => {
      commit(ALL_MANUFACTURERS_SUCCESS, {
        manufacturers: response.data
      });
    });
  },
  manufacturerById({ commit }, payload) {
    commit(MANUFACTURER_BY_ID);

    const { manufacturerId } = payload;
    axios.get(`/api/v1/manufacturers/${manufacturerId}`).then(response => {
      commit(MANUFACTURER_BY_ID_SUCCESS, {
        manufacturer: response.data
      });
    });
  },
  removeManufacturer({ commit }, payload) {
    commit(REMOVE_MANUFACTURER);

    const { manufacturerId } = payload;
    axios.delete(`/api/v1/manufacturers/${manufacturerId}`).then(() => {
      // 返回 manufacturerId，用于删除本地对应的制造商
      commit(REMOVE_MANUFACTURER_SUCCESS, {
        manufacturerId
      });
    });
  },
  updateManufacturer({ commit }, payload) {
    commit(UPDATE_MANUFACTURER);

    const { manufacturer } = payload;
    axios
      .put(`/api/v1/manufacturers/${manufacturer._id}`, manufacturer)
      .then(() => {
        commit(UPDATE_MANUFACTURER_SUCCESS, {
          manufacturer
        });
      });
  },
  addManufacturer({ commit }, payload) {
    commit(ADD_MANUFACTURER);

    const { manufacturer } = payload;
    axios.post(`/api/v1/manufacturers`, manufacturer).then(response => {
      commit(ADD_MANUFACTURER_SUCCESS, {
        manufacturer: response.data
      });
    });
  }
};
