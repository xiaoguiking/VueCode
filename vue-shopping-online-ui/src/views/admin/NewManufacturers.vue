<template>
  <manufacturer-form
    @save-manufacturer="addManufacturer"
    :model="model"
  ></manufacturer-form>
</template>

<script>
// 添加商品
import ManufacturerForm from "../../components/products/ManufacturerForm";
export default {
  components: {
    "manufacturer-form": ManufacturerForm
  },
  computed: {
    model() {
      return {};
    }
  },
  methods: {
    addManufacturer(model) {
      this.$store.$store.dispatch("addManufacturer", {
        manufacturer: model
      });
    }
  }
};
</script>

<style lang="less" scoped></style>
