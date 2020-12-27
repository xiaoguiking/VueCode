<template>
  <div class="cart">
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <!-- <template v-for="product in cart"> -->
    <product-item :products="cart"></product-item>
    <!-- </template> -->
  </div>
</template>

<script>
import ProductItem from "../components/products/ProductItem.vue";
export default {
  new: "Admin",
  components: {
    "product-item": ProductItem
  },
  data() {
    return {
      msg: "welcome to your Cart Page"
    };
  },
  computed: {
    cart() {
      console.log(this.$store.state.cart, "cart");
      return this.$store.state.cart;
    }
  },
  methods: {
    removeFromCart(productId) {
      this.$store.commit("REMOVE_FROM_CART", { productId });
    }
  }
};
</script>

<style lang="less" scoped>
.cart {
  .title {
    text-align: center;
  }
}
.product__image {
  width: 100px;
  height: 100px;
}
</style>
