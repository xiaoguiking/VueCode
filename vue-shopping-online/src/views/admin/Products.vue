<template>
  <div>
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>名称</th>
            <th>价格</th>
            <th>制造商</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product._id">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>
              {{ product.manufacturer ? product.manufacturer.name : "oppo" }}
            </td>
            <td class="modify">
              <router-link :to="'/admin/edit/' + product._id">修改</router-link>
            </td>
            <td class="remove">
              <a @click="removeProduct(product._id)" href="#">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import ProductList from '../../components/products/ProductList.vue'
export default {
  // components: { ProductList },

  new: "Admin",
  data() {
    return {
      msg: "welcome to your Admin Products Page"
    };
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
    }
  },
  methods: {
    removeProduct(productId) {
      const res = confirm("是否删除此产品");
      if (res) {
        this.$store.dispatch("removeProduct", {
          productId
        });
      }
    }
  },
  computed: {
    products() {
      console.log(
        this.$store.getters.allProducts,
        "------------allProducts----------"
      );
      return this.$store.getters.allProducts;
    }
  }
};
</script>

<style scoped lang="less">
table {
  margin: 0 auto;
}

.modify {
  color: blue;
}

.remove a {
  color: red;
}
</style>
