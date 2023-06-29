<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-md-offset-3 form-group">
        <label for="">U can saying ...</label>
        <textarea class="form-group" v-model="item" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-md-offset-3 form-group">
        <button class="btn btn-success" @click.prevent="createNew">Add item</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      item: ''
    }
  },
  methods: {
    createNew: function() {
      if(this.item == '') {
        return false
      } else {
        this.$emit('itemAdded', this.item);
        this.item = '';
      }
    },
  }
}
</script>

<style scoped>
  .row {
    margin: 0 auto;
    max-width: fit-content;
  }

  .row div {
    text-align: center;
  }
</style>
