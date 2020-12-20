<template>
  <div class="productInfo">
    <form @submit.prevent="saveProduct">
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
    </form>
  </div>
</template>

<script>
export default {
  props: ["model", "manufacturers", "isEditing"],
  methods: {
    saveProduct() {
      this.$emit("save-product", this.model);
    }
  }
};
</script>

<style lang="less" scoped>
.productInfo {
  width: 50vw;
  height: 100%;
  margin: 0 auto;
  border: 1px solid rgb(255, 196, 0);
  border-radius: 5px;

  .form-group {
    width: 600px;
    padding: 15px;
    display: flex;
    justify-content: center;

    label {
      width: 100px;
      height: 20px;
    }
    input,
    select,
    textarea {
      width: 170px;
      height: 20px;
    }
  }
}
</style>
