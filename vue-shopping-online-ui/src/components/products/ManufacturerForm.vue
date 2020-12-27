<template>
  <div class="manufacturerInfo">
    <el-form class="form" ref="form" :model="model" label-width="180px">
      <el-form-item label="Name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" @click="onSubmit"
          >Update Manufacturer</el-button
        >
        <el-button v-else @click="onSubmit">Add Manufacturer</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  <script>
    export default {
      name: "ManufacturerForm",
      props: ["model", "isEditing"],
      methods: {
        onSubmit() {
          this.$emit("save-manufacturer", this.model);
        }
      }
    };
  </script>

  <style lang="less" scoped></style>
</template>
