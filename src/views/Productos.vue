<template>
  <div class="home">
    <section v-if="itemList.length > 0" class="products-grid">
      <ProductCard
        v-for="product in itemList"
        :key="product.id"
        :product="product"
        @add="addToCart($event)"
      />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductoT'
import gql from "graphql-tag";

export default {
  name: 'InicioView',

  components: { ProductCard },

  data () {
    return {
      cart: [],
      itemList: []
    }
  },

  apollo: {
    itemList: {
      query: gql`
        query {
          itemList {
            id
            name
            description
            stock
            price
            size
            image
          }
        }
      `,
      variables: {

      }
    }
  },

  created(){
        let cartStr = localStorage.getItem('cart')
        if(cartStr)
          this.cart = JSON.parse(cartStr);
  },

  methods: {
    addToCart(data) { 
      this.cart.push(data)
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  }
}
</script>

<style>

.products-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  padding: 40px 10%;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Times New Roman', Times, serif;
  font-size: 16pt;
  color: black;
  

}

.img-carrito .carrito{
  width: 70px;
  height: 70px;
  position: absolute;
  top: 9px;
  left: calc(100% - 100px);
}
</style>
