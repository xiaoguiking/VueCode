<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>制造商</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="manufacturer in manufacturers" :key="manufacturer._id">
          <td>{{ manufacturer.name }}</td>
          <td class="modify">
            <router-link :to="'/admin/manufacturers/edit/' + manufacturer._id"
              >修改</router-link
            >
          </td>
          <td class="remove">
            <a @click="removeManufacturer(manufacturer._id)" href="#">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  created() {
    if (this.$store.allManufacturers === 0) {
      this.$store.dispatch("allManufacturers");
    }
  },
  computed: {
    allManufacturers() {
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
table {
  margin: 0 auto;
}

.modify {
  color: blue;
}

.remove a {
  color: red;
}
</style>
