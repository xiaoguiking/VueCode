<template>
  <!-- <manufacturer-form
    @save-manufacturer="addManufacturer"
    :model="model"
    :isEditing="true"
  ></manufacturer-form> -->
  <div>edit</div>
</template>

<script>
import ManufacturerForm from "../../components/products/ManufacturerForm.vue";
// 编辑商品
export default {
  components: {
    "manufacturer-form": ManufacturerForm
  },
  created() {
    this.$store.dispatch("manufacturerById", {
      manufacturerId: this.$store.params["id"]
    });
  },
  computed: {
    model() {
      const manufacturer = this.$store.getters.manufacturerById(
        this.$route.params["id"]
      );
      // 这里返回 product 的拷贝，是为了在修改 product 的拷贝之后，在保存之前不修改本地 Vuex stire 的 product 属性
      return { ...manufacturer };
    }
  },
  methods: {
    addManufacturer(model) {
      this.$store.dispatch("updateManufacturer", {
        manufacturer: model
      });
    }
  }
};
</script>

<style lang="less" scoped></style>
