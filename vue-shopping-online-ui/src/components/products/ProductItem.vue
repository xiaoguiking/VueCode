<template>
  <div class="product">
    <el-table class="table" :data="products" max-height="650">
      <el-table-column prop="name" label="产品名称" width="180">
      </el-table-column>
      <el-table-column prop="description" label="介绍" width="180">
      </el-table-column>
      <el-table-column prop="price" label="价格" width="180"> </el-table-column>
      <el-table-column prop="manufacturer.name " label="生产厂商">
      </el-table-column>
      <!-- <el-table-column label="图片" width="200">
        <img :src="image" alt="" class="product__image" />
       </el-table-column> -->
      <el-table-column label="产品图片" prop="image">
        <template slot-scope="scope">
          <el-popover placement="top-start" title="" trigger="hover">
            <img
              :src="scope.row.image"
              alt=""
              style="width: 150px;height: 150px"
            />
            <img
              slot="reference"
              :src="scope.row.image"
              style="width: 50px;height: 50px"
            />
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <product-button :id="scope.row._id"></product-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <div class="product">
      <router-link :to="'/detail/'+ product._id" class="product-link"  >
      <p class="product__name">产品名称：{{ product.name }}</p>
      <p class="product__description">介绍：{{ product.description }}</p>
      <p class="product__price">价格：{{ product.price }}</p>
      <p class="product.manufacturer">生产厂商：{{ product.name || "oppo" }}</p>
      <img :src="product.image" alt="" class="product__image" />
      </router-link>
      <product-button :product="product"></product-button>
    </div> -->
  </div>
</template>

<script>
import ProductButton from "./ProductButton.vue";
export default {
  name: "product-item",
  props: ["products"],
  components: {
    "product-button": ProductButton
  }
};
</script>
<style lang="less" scoped>
.product {
  margin: 0 auto;
  width: 80vw;
  min-height: 650px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-wrap: nowrap;

  //   .product__name {
  //     flex-grow: 1;
  //   }
  //   .product__description {
  //     flex-grow: 1;
  //   }
  //   .product__price {
  //     flex-grow: 1;
  //   }
  //   .product.manufacturer {
  //     flex-grow: 1;
  //   }
  //   .product__image {
  //     flex-grow: 2;
  //     width: 100px;
  //     height: 100px;
  //     margin-right: 10px;
  //   }
}
</style>
