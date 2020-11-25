/** * 商品列表组件，用来展示商品的详细信息 */

<template>
  <div>
    <div class="products">
      <div class="container">
        This is productList
      </div>
      <template v-for="product in products">
        <div :key="product._id" class="product">
          <p class="product__name">产品名称 {{product.name}}</p>
          <p class="product__description">介绍：{{ product.description }}</p>
          <p class="product__price">价格：{{ product.price }}</p>
          <p class="product.manufacturer">
            生产厂商：{{ product.manufacturer }}
          </p>
          <img :src="product.image" alt="" class="product__image" />
          <button @click="addToCart(product)">加入购物车</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-list',
  created () {
    if (this.products.length === 0) {
      console.log(1)
      this.$store.dispatch('allProducts')
    }
  },
  computed: {
    products () {
      // a computed getter
      console.log(this.$store.state.products)
      return this.$store.state.products
    }
  },
  methods: {
    addToCart (product) {
      console.log(product)
      // 传输参数是对象
      this.$store.commit('ADD_TO_CART', { product })
    }
  }
}
</script>

<style lang="less" scoped>
.product {
  border-bottom: 1px solid black;
}

.product__image {
  width: 100px;
  height: 100px;
}
</style>
