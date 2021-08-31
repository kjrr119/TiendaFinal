<template>


  <div class="card" style="width: 19rem;">
    <img :src="product.image" class="card-img-top" :alt="product.name">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>

      <div class="input-group mb-3">
        <span class="input-group-text">$</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" :value="productPrice">
        
      </div>

      <div class="input-group mb-3">
        <input type="text" v-model="quantity" class="form-control" placeholder="0" aria-label="Items">
        <button class="btn btn-success btn-sm" :disabled="quantity >=product.stock" @click="quantity += 1">+</button>
        <button class="btn btn-danger btn-sm" :disabled="quantity < 1" @click="quantity -= 1">-</button>
      </div>
      <hr>
      <button class="btn btn-primary btn-light" @click="addToCart()" :disabled="quantity === 0">Agregar</button>
    </div>
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
      quantity: 0
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
        id: this.product.id,
        name: this.product.name,
        quantity: this.quantity,
        unitPrice: this.product.price,
        totalPrice: this.quantity * this.product.price
      })
    }
  }
}
</script>

<style scoped>

.card {
  margin: 10px;
  color: white;
  background-color: black;
}

.card-title{
  min-height: 50px;
}

</style>