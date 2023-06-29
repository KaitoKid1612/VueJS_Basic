<template>
  <div class="row">
    <div class="col-sm-12 text-center">
      <h3>Item Added</h3>
      <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{width: (itemCount / maxItem) * 100 + '%'}">{{ itemCount }} / {{ maxItem }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemCount', 'maxItem']
}
</script>

<style scope>
  .row {
    margin: 10px 0px;
    display: flex;
    justify-content: center;
  }
</style>
