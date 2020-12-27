<template>
  <div class="manufacturers">
    <h1 class="title">{{ msg }}</h1>
    <el-table class="table" :data="manufacturers">
      <el-table-column prop="name" label="制造商" width="180">
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button class="modify" type="text" size="small"
            ><router-link :to="'/admin/manufacturers/edit/' + scope.row._id"
              >修改</router-link
            ></el-button
          >
          <el-button
            class="remove"
            @click="
              removeManufacturer(scope.row._id),
                deleteRow(scope.$index, products)
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
  data() {
    return {
      msg: "manufacturers Page"
    };
  },
  created() {
    this.$store.dispatch("allManufacturers");
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    }
  },
  methods: {
    removeManufacturer(manufacturerId) {
      const res = confirm("是否删除此供应商");
      // 用户同意就删除此供应商
      if (res) {
        this.$store.dispatch("removeManufacturer", {
          manufacturerId
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.manufacturers {
  .title {
    text-align: center;
  }
  .table {
    margin: 0 auto;
    width: 330px;
  }
}
</style>
