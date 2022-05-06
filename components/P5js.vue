<template>
    <canvas id="canvas" class="w-100 h-100">
        <vue-p5 v-on="{setup, draw}" />
    </canvas>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  head() {
    return {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js',
        }
      ]
    }
  },
  method () {

  }
}
</script>
