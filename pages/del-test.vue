<template>
  <div id="app">
    <button @click="goto('div1')">Div 1</button>
    <button @click="goto('div2')">Div 2</button>
    <button @click="goto('div3')">Div 3</button>
    <br />

    <div class="div" ref="div1">This is Div 1</div>
    <div class="div" ref="div2">This is Div 2</div>
    <div class="div" ref="div3">This is Div 3</div>
  </div>
</template>

<script>
export default {
  methods: {
    goto(refName) {
      const element = this.$refs[refName];
      const top = element.offsetTop;

      window.scrollTo(0, top);
    }
  }
};
</script>

<style scoped>
.div {
  height: 1000px;
  padding: 20px;
  border: 2px solid yellow;
}
</style>
