<template>
  <h1>Product id: {{ productId }}</h1>
</template>

<script>
export default {
  name: "Producto",

  data () {
    return {
      productId: ''
    }
  },

  created() {
    this.productId = this.$route.params.id
  }
}
</script>

<style scoped>

</style>
