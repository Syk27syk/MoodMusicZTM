<template>
    <div>
        <Heade r/>
        <MoodBot />
        <h1> checkout</h1>
        <Footer />
    </div>
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
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
        }
      ]
    }
  },
}
</script>
