import axios from "axios";

// const API_BASE = "http://localhost:3000/api/v1";

// 产品
export const productActions = {
  allProducts({ commit }) {
    commit("ALL_PRODUCTS");

    axios.get(`/api/v1/products`).then(response => {
      commit("ALL_PRODUCTS_SUCCESS", {
        products: response.data
      });
    });
  },
  productById({ commit }, payload) {
    commit("PRODUCT_BY_ID");

    const { productId } = payload;
    axios.get(`/api/v1/products/${productId}`).then(response => {
      commit("PRODUCT_BY_ID_SUCCESS", {
        product: response.data
      });
    });
  },
  removeProduct({ commit }, payload) {
    commit("REMOVE_PRODUCT");

    const { productId } = payload;
    axios.delete(`/api/v1/products/${productId}`).then(() => {
      // 返回 productId，用于删除本地对应的商品
      commit("REMOVE_PRODUCT_SUCCESS", {
        productId
      });
    });
  },
  updateProduct({ commit }, payload) {
    commit("UPDATE_PRODUCT");

    const { product } = payload;
    axios.put(`/api/v1/products/${product._id}`, product).then(() => {
      commit("UPDATE_PRODUCT_SUCCESS", {
        product
      });
    });
  },
  addProduct({ commit }, payload) {
    commit("ADD_PRODUCT");

    const { product } = payload;
    axios.post(`/api/v1/products`, product).then(response => {
      commit("ADD_PRODUCT_SUCCESS", {
        product: response.data
      });
    });
  }
};

// 制造商
export const manufacturerActions = {
  allManufacturers({ commit }) {
    commit("ALL_MANUFACTURERS");

    axios.get(`/api/v1/manufacturers`).then(response => {
      commit("ALL_MANUFACTURERS_SUCCESS", {
        manufacturers: response.data
      });
    });
  },
  removeManufacturer({ commit }, payload) {
    commit("REMOVE_MANUFACTURER");

    const { manufacturerId } = payload;
    axios.delete(`/api/v1/manufacturers/${manufacturerId}`).then(() => {
      // 返回 manufacturerId，用于删除本地对应的制造商
      commit("REMOVE_MANUFACTURER_SUCCESS", {
        manufacturerId
      });
    });
  }
};
