<template lang="">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Default / Built-in Directives</h1>
        <p v-text="'Something else'"></p>
        <p v-html="'<h1>This is the heading one </h1>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-local-custom:background.delayed.blink="{mainColor: 'red', secondColor:'yellow', delay: 3000}">Color style by Directives</p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  directives: {
    'local-custom': {
      bind(el, binding, vnode) {
        // var delay = 0;
        // if (binding.modifiers["delayed"]) {
        //   binding.vdelay = 3000;
        // }
        if (binding.modifiers['blink']) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;

              binding.arg == "background"
                ? (el.style.backgroundColor = currentColor)
                : (el.style.color = currentColor);

            }, 1000);
          }, binding.value.delay);
        } else {
          setTimeout(() => {
            binding.arg == "background"
              ? (el.style.backgroundColor = binding.value)
              : (el.style.color = binding.value);
          }, binding.value.delay);
        }

      }
    }
  }
}
</script>
<style lang="">

</style>
