<template lang="">
  <div class="row">
    <div class="col-xs-12 col-sm-8 offset-sm-8 offset-md-3 col-md-6">
      <h3>Filter Products From List Component</h3>
      <div class="d-flex col-sm-offset-2">
          <input type="text" class="form-control mb-md-2 me-3" v-model="filterProduct">
          <button class="btn btn-success btn-block mb-2" @click.prevent="products.push('List')">Add New Product</button>
        </div>
      <div class="card">
        <div class="card-body">
          <ul>
            <li v-for='product in filteredProducts' :key="product">{{ product }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { productMixin } from '../mixins/productMixin.js';

export default {
  mixins: [productMixin]
}
</script>
<style lang="">

</style>
