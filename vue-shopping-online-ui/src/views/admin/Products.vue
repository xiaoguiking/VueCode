<template>
  <div class="products">
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <el-table class="table" :data="products">
      <el-table-column prop="name" label="名称" width="180"> </el-table-column>
      <el-table-column prop="price" label="价格" width="180"> </el-table-column>
      <el-table-column label="制造商" width="180" empty-text="默认值">
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button class="modify" type="text" size="small"
            ><router-link :to="'/admin/edit/' + scope.row._id"
              >修改</router-link
            ></el-button
          >
          <el-button
            class="remove"
            @click="
              removeProduct(scope.row._id), deleteRow(scope.$index, products)
            "
            type="text"
            size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  new: "Admin",
  data() {
    return {
      msg: "welcome to your Admin Products Page",
      manufacturer: {
        name: "生产商默认值"
      }
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
.title {
  text-align: center;
}
.products {
  margin: 0 auto;
  width: 800px;
  min-height: 650px;
}
</style>
