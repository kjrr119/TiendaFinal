<template>
  <div class="card">
    <img :src="product.image" :alt="product.name">
    <h4>{{ product.name }}</h4>
    <p>{{ productPrice }}</p>

    <input class="agregar" type="number" v-model="stock" disabled>
    <button class="agregar" v-if="product.stock > stock" @click="stock += 1">+</button>
    <button class="agregar" v-if="stock > 0" @click="stock -= 1">-</button>
    <hr>
    <button class="agregar" @click="addToCart()" :disabled="stock === 0">Agregar al carrito</button>
  </div>
</template>

<script>
export default {
  name: "ProductoT",

  props: {
    product: {
      type: Object,
      required: true,
      // :to="{ name: 'Product', params: { id: product.id } }"
    }
  },

  data () {
    return {
      stock: 0
    }
  },

  created() {
    //console.log(this.product)
  },

  computed: {
    productPrice() {
      return this.product.price + ' COP'
    }
  },

  methods: {
    addToCart() {
      this.$emit('add', {
        stock: this.stock,
        id: this.product.id,
        total: this.stock * this.product.price
      })
    }
  }
}
</script>

<style scoped>
.card:nth-child(3n + 2) {
  margin: 0 5% 10%;
}

.card {
  width: calc(30% - 2px);
  margin-bottom: 10%;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  overflow: hidden;
  background-color:white;
}

.card img {
  max-width: 100%;
  height: auto;
}

.agregar{
  background-color: black;
  color: whitesmoke;
  
}


</style>