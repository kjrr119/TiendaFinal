<template>
  <div class="container container-s">
    <h1>¡Nuestra selección!</h1>
    <hr>
    <div class="row row-cols-3" v-if="itemList.length > 0">    
        <ProductCard
          v-for="product in itemList"
          :key="product.id"
          :product="product"
          @add="addToCart($event)"
        />
    </div>
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
      itemList: [],
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
    if(localStorage.getItem('cart')){
      this.cart = JSON.parse(localStorage.getItem('cart'));
    } else {
      this.cart = []
    }
  },

  methods: {
    addToCart(data) { 
      this.cart.push(data);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}
</script>

<style scoped>

.img-carrito .carrito{
  width: 70px;
  height: 70px;
  position: absolute;
  top: 9px;
  left: calc(100% - 100px);
}

.container-s{
  background-color:rgba(0, 0, 0, 0.884);
  color:whitesmoke;
  padding:10px 30px;
  box-shadow: 7px 17px 37px black;
  text-align: center;
}

</style>
