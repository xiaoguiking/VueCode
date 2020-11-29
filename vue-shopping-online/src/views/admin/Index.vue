<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <li>
              <router-link to="/admin">View Product 查看商品</router-link>
            </li>
            <li>
              <router-link to="/admin/new">New Products 添加商品</router-link>
            </li>
            <li>
              <router-link to="/admin/manufacturers">show manufacturers 查看生产商</router-link>
            </li>
            <li>
              <router-link to="/admin/manufacturers/create">New Products 添加制造商</router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  new: "Admin",
  data() {
    return {
      msg: "welcome to your Index.vue"
    };
  }
};
</script>

<style scoped></style>
