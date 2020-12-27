<template>
  <div class="new">
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
import ProductForm from "@/components/products/ProductForm";
export default {
  name: "new",
  components: {
    "product-form": ProductForm
  },
  new: "Admin",
  data() {
    return {
      msg: "welcome to your Admin New Page"
      // model: { manufacturer: { name: "" } }
      // model: {}
      // manufacturers: [
      //   {
      //     _id: "sam",
      //     name: "Samsung"
      //   },
      //   {
      //     _id: "apple",
      //     name: "Apple"
      //   }
      // ]
    };
  },
  created() {
    if (this.manufacturers.length === 0) {
      this.$store.dispatch("allManufacturers");
    }
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    },
    model() {
      return {};
    }
  },
  methods: {
    addProduct(model) {
      this.$store.dispatch("addProduct", {
        product: model
      });
    }
  }
};
</script>

<style scoped lang="less">
.new {
  .title {
    text-align: center;
  }
}
</style>
