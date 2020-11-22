<template>
  <div class="home">
    <h1>In Stock</h1>
    <product-list />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import ProductList from '../components/products/ProductList.vue'
import ProductList from '@/components/products/ProductList.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    'product-list': ProductList
  }
}
</script>
