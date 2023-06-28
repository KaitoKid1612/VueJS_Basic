<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span style="color: #ccc">
        <!-- Slots have value default which is slot default -->
        <slot name="">The Subtitle</slot>
      </span>
    </div>
    <div class="content">
      <!-- Slot unsigned is a default slot -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cardWords']
}
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
    padding: 30px;
    margin: 20px auto;
    text-align: center;
  }
  h2 {
    color: red;
  }
  .title {
    font-style: italic;
  }
</style>
