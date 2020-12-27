<template>
  <div class="productInfo">
    <!-- <form @submit.prevent="saveProduct">
      <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
        <div class="form-group">
          <label for="">Name: </label>
          <input
            type="text"
            placeholder="Name"
            v-model="model.name"
            name="name"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="">Price: </label>
          <input
            type="number"
            placeholder="Price"
            v-model="model.price"
            class="form-control"
            name="price"
          />
        </div>
        <div class="form-group">
          <label>Manufacturer: </label>
          <select
            type="text"
            name="manufacturer"
            class="form-control"
            v-model="model.manufacturer"
          >
            <template v-for="manufacturer in manufacturers">
              <option
                :value="manufacturer._id"
                :selected="
                  manufacturer._id ==
                    (model.manufacturer && model.manufacturer._id)
                "
                :key="manufacturer._id"
                >{{
                  manufacturer.name ? manufacturer.name : "manufacturerName"
                }}</option
              >
            </template>
          </select>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="form-group">
          <label for="">Image: </label>
          <input
            type="text"
            name="Image"
            class="form-control"
            placeholder="Image"
            v-model="model.image"
          />
        </div>
        <div class="form-group">
          <label for="">Description: </label>
          <textarea
            name="description"
            rows="5"
            v-model="model.description"
            class="form-control"
          ></textarea>
        </div>
        <div class="form-group new-button">
          <button class="button">
            <i class="fa fa-pencil"></i>
            <span v-if="isEditing">Update Product</span>
            <span v-else>Add Product</span>
          </button>
        </div>
      </div>
    </form> -->
    <el-form ref="form" :model="model" label-width="140px">
      <el-form-item label="name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="price">
        <el-input v-model="model.price"></el-input>
      </el-form-item>
      <el-form-item label="Manufacturer ">
        <el-select
          v-model="manufacturersdata.name"
          clearable
          placeholder="请选择制造商"
        >
          <el-option
            v-for="manufacturer in manufacturersdata"
            :key="manufacturer._id"
            :label="manufacturer.name"
            :value="manufacturer.name"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Image">
        <el-checkbox-group v-model="model.image">
          <el-input v-model="model.image"></el-input>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Description">
        <el-input type="textarea" v-model="model.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" @click="onSubmit"
          >Update Product</el-button
        >
        <el-button v-else @click="onSubmit">Add Product</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["model", "manufacturers", "isEditing"],
  data() {
    return {
      // 默认写死数据
      manufacturersdata: [
        /* 1 */
        {
          _id: "0000d0005e194b192dfe0315",
          __v: "0",
          name: "Apple Inc"
        },

        /* 2 */
        {
          _id: "0000d0005e194b252dfe0315",
          __v: "0",
          name: "华为"
        },

        /* 3 */
        {
          _id: "0000d0005e194b2d2dfe0315",
          __v: "0",
          name: "小米"
        },

        /* 4 */
        {
          _id: "0000d0005e194b402dfe0315",
          __v: "0",
          name: "Vivo"
        },

        /* 5 */
        {
          _id: "5e194b192dfe031505deaf62",
          __v: "0",
          name: "OPPO"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    saveProduct() {
      this.$emit("save-product", this.model);
    }
  }
};
</script>

<style lang="less" scoped>
.productInfo {
  margin: 0 auto;
  width: 850px;
  min-height: 650px;
}
</style>
