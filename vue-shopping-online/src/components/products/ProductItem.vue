<template>
  <div>
    <div class="product">
      <p class="product__name">产品名称：{{product.name}}</p>
      <p class="product__description">介绍：{{product.description}}</p>
      <p class="product__price">价格：{{product.price}}</p>
      <p class="product.manufacturer">生产厂商：{{product.name || 'oppo'}}</p>
      <img :src="product.image" alt="" class="product__image">
      <product-button :product="product"></product-button>
    </div>
  </div>
</template>

<script>
import ProductButton from './ProductButton.vue'
export default {
  name: 'product-item',
  props: ['product'],
  components: {
    'product-button': ProductButton
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

