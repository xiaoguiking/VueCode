<template>
  <form @submit.prevent="saveManufacturer">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        placeholder="Name"
        v-model="model.name"
        name="name"
        class="form-control"
      />
    </div>
    <div class="form-group new-button">
      <button class="button">
        <span v-if="isEditing">Update Manufacturer</span>
        <span v-else>Add Manufacturer</span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: ["model", "isEditing"],
  methods: {
    saveManufacturer() {
      this.$emit("save-manufacturer", this.model);
    }
  }
};
</script>

<style lang="less" scoped></style>
