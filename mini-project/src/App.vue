<template>
  <div id="container">
    <app-header :item-count="items.length" :max-item="maxItems"></app-header>
    <app-new-item @itemAdded="addItem"></app-new-item>
    <app-item-layout :items="items" @itemRemoved="removeItem"></app-item-layout>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a Item to Delete it!
        </div>
      </div>
    </div>
    <!-- <app-items-layout></app-items-layout> -->
  </div>
</template>

<script>
// import Items from './components/Items.vue'
import Header from './components/Header.vue'
import ItemsLayout from './components/ItemsLayout.vue';
import NewItem from './components/NewItem.vue';

export default {
  data: function() {
    return {
      items: [],
      maxItems: 10
    }
  },
  components: {
    // appItems = Items
    appItemLayout: ItemsLayout,
    appNewItem: NewItem,
    appHeader: Header,
  },
  methods: {
    addItem(item) {
      if(this.items.length >= this.maxItems) {
        return this.items;
      } else if (this.items.includes(item)) {
        return alert('Write again');
      } else {
        this.items.push(item)
      }

    },
    removeItem(index) {
      this.items.splice(index, 1)
    }
  },
}
</script>

<style scoped>

</style>
