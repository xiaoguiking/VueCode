<template>
  <div>
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <product-form
      :save-product="addProduct"
      :model="model"
      :manufacturers="manufacturers"
    >
    </product-form>
  </div>
</template>

<script>
import ProductForm from '../../components/products/ProductForm'
export default {
  components: {
    'product-form': ProductForm
  },
  new: 'Admin',
  data () {
    return {
      msg: 'welcome to your Admin/New',
      model: {},
      manufacturers: [
        {
          _id: 'sam',
          name: 'Samsung'
        },
        {
          _id: 'apple',
          name: 'Apple'
        }
      ]
    }
  },
  methods: {
    addProduct (model) {
      console.log('model', model)
    }
  }

}
</script>

<style scoped></style>
