<template>
  <a :href="logo.link"><img :src="logo.image" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
</template>

<script>
export default {
  props: ['logo'],
};

</script>
