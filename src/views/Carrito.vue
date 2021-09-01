<template>
<body>
    <div class="container container-md">
        <h1>¡Carrito!</h1>
        <hr>
        <form @submit.prevent v-if="cart.length > 0">

            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Nombre del producto</th>
                        <th>Cantidad</th>
                        <th>Precio unitario</th>
                        <th>Precio total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <CartProduct
                        v-for="cartItem in cart"
                        :key="cartItem.productoId"
                        :cartItem="cartItem"
                        @delete="deleteCartItem($event)"
                    />
                </tbody>
            </table>
            <hr>
            <button class="btn btn-primary btn-success" @click="PurchaseItems()">Comprar</button>

        </form>
        <section v-else>
            No tienes productos en tu carrito
        </section>
        
    </div>
 </body>
    
</template>

<script>

import CartProduct from '@/components/CartProduct'

export default {
    name: 'CarritoView',

    components: { CartProduct },

    created(){
        if(localStorage.getItem('cart')){
            this.cart = JSON.parse(localStorage.getItem('cart'));
        } else {
            this.cart = []
        }
    },

    data () {
        return {
        }
    },

    methods: {
        deleteCartItem(data) {
            console.log(data.item);
            const index = this.cart.indexOf(data.item);
            if(index > -1)
                this.cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(this.cart));
                this.$router.go();
        },
        PurchaseItems() {
            this.$router.push({ name: 'FormularioView' })
        }
    }
}
</script>



<style>




</style>