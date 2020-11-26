<template>
  <div>
    <button v-if="isAdding" class="button" @click="addToCart">
      添加购物车
    </button>
    <button v-else class="button" @click="removeFromCart(product._id)">
      从购物车移除
    </button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    isAdding() {
      let isAdding = true;
      this.cart.map(product => {
        if (product._id === this.product._id) {
          isAdding = false;
        }
      });

      return isAdding;
    },
    cart() {
      // 注意需要返回数据
      return this.$store.state.cart;
    }
  },
  methods: {
    addToCart() {
      this.$store.commit("ADD_TO_CART", {
        product: this.product
      });
    },
    removeFromCart(productId) {
      this.$store.commit("REMOVE_FROM_CART", {
        productId
      });
    }
  }
};
</script>

<style lang="less" scoped>
.button {
  width: 130px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
