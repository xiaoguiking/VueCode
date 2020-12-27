<template>
  <div class="edit">
    <div class="title">
      <h1>This is id: {{ $route.params.id }}</h1>
    </div>
    <product-form
      @save-product="updateProduct"
      :model="model"
      :manufacturers="manufacturers"
      :isEditing="true"
    >
    </product-form>
  </div>
</template>

<script>
import ProductForm from "../../components/products/ProductForm.vue";

export default {
  components: {
    "product-form": ProductForm
  },
  data() {
    return {
      msg: "welcome to your Edit Page"
    };
  },
  created() {
    const { name } = this.model;
    if (!name) {
      console.log(this.$route.params["id"]);
      this.$store.dispatch("productById", {
        productId: this.$route.params["id"]
      });
    }
    if (this.manufacturers.length === 0) {
      this.$store.dispatch("allManufacturers");
    }
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    },
    model() {
      const product = this.$store.getters.productById(this.$route.params["id"]);
      console.log(this.$store.getters, "getters");
      // 返 回product的拷贝，是为了在修改 product的拷贝之后，在保存之前不修改本地 Vuex store 的product属性。计算属性manufacturers通过相同的方式获取本地数据。
      return {
        ...product,
        manufacturers: {
          ...product.manufacturers
        }
      };
    }
  },
  methods: {
    updateProduct(product) {
      this.$store.dispatch("updateProduct", {
        product
      });
    }
  }
};
</script>

<style scoped lang="less">
.edit {
  .title {
    text-align: center;
  }
}
</style>
