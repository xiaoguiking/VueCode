<template>
  <div>
    <div class="product">
      <p class="product__name">产品名称：{{ product.name }}</p>
      <p class="product__description">介绍：{{ product.description }}</p>
      <p class="product__price">价格：{{ product.price }}</p>
      <p class="product.manufacturer">生产厂商：{{ product.name || "oppo" }}</p>
      <img :src="product.image" alt="" class="product__image" />
      <product-button :product="product">131312</product-button>
    </div>
  </div>
</template>

<script>
import ProductButton from "./ProductButton.vue";
export default {
  name: "product-item",
  props: ["product"],
  components: {
    "product-button": ProductButton
  }
};
</script>
<style lang="less" scoped>
.product {
  margin: 0 auto;
  border-bottom: 1px solid black;
  width: 80vw;
  height: 250px;
  border: 1px solid burlywood;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  .product__name {
    flex-grow: 1;
  }
  .product__description {
     flex-grow: 1;
  }
  .product__price {
     flex-grow: 1;
  }
  .product.manufacturer {
     flex-grow: 1;
  }
  .product__image {
    flex-grow: 2;
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }
}
</style>
