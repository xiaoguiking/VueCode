/** * 详情页 */
<template>
  <div>
      <product-details :product="product"></product-details>
  </div>
</template>

<script>
import ProductsDetail from '../components/products/ProductsDetail.vue'
export default {
  // 跳转到详情页面，如果本次不存在，则从后端获取数据
  created () {
    const { name } = this.product
    console.log(name, 'Detail name')
    if (!name) {
      return this.$store.dispatch('productById', {
        productId: this.$route.params.id
      })
    }
    console.log(this.$route.params.id)
  },
  computed: {
    product () {
      return this.$store.getters.productById(this.$route.params.id)
    }
  },
  components: {
    'product-details': ProductsDetail
  }
}
</script>

<style lang="less" scoped></style>
