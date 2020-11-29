<template>
<div>
    <div class="title">
        <h1>{{msg}}</h1>
    </div>
    <!-- <div class="body">
      {{product.name}}
    </div> -->
    <product-list />
</div>
</template>

<script>
import ProductList from '../../components/products/ProductList.vue'
export default {
  components: { ProductList },
  new: 'Admin',
  data () {
    return {
      msg: 'welcome to your Admin Products Page'
    }
  },
  // 计算属性
  computed: {
    product () {
      // return this.$store.state.products[0]
      return this.$store.getters.allProduct[0]
    }
  }
}
</script>

<style scoped>

</style>
