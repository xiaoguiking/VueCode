/** * 商品列表组件，用来展示商品的详细信息 */

<template>
  <div>
    <div class="products">
      <div class="container">
        This is productList Page
      </div>
      <!-- <template v-for="product in products"> -->
      <product-item :products="products"></product-item>
      <!-- </template> -->
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "product-list",
  components: {
    "product-item": ProductItem
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
    }
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    }
  },
  methods: {
    addToCart(product) {
      console.log(product);
      // 传输参数是对象
      this.$store.commit("ADD_TO_CART", { product });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  margin: 10px auto;
  text-align: center;
}
.product {
  border-bottom: 1px solid black;
}

.product__image {
  width: 100px;
  height: 100px;
}
</style>
