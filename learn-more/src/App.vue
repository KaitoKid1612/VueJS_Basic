<template lang="">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-8 offset-md-3 col-md-6">
        <h1>Filter & Mixins</h1>
        <p>{{ text | toLowerCase | toUpperCase }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-8 offset-md-3 col-md-6">
        <h3>Filter Products</h3>
        <div class="d-flex col-sm-offset-2">
          <input type="text" class="form-control mb-md-2 me-3" v-model="filterProduct">
          <button class="btn btn-success btn-block mb-2" @click.prevent="products.push('Mixins')">Add New Product</button>
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
    <app-list></app-list>
  </div>
</template>
<script>
import List from './components/List.vue'
import { productMixin } from './mixins/productMixin.js';

export default {
  // created() {
  //   console.log('Created!')
  // },
  data() {
    return {
      text: 'Hello world! With VueJS',
    }
  },
  filters: {
    toLowerCase(text) {
      return text.toLowerCase();
    }
  },
  computed: {
  },
  components: {
    appList: List
  },
  mixins: [productMixin]
}
</script>
<style lang="">

</style>
