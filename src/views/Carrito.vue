<template>
<body>
    <div class="CarritoCompra">
        <h1>¡Carrito!</h1>
        <section v-if="cart.length > 0">
            <form @submit.prevent>
                <table class="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Nombre del producto</th>
                            <th>Cantidad</th>
                            <th>Precio unitario</th>
                            <th>Precio total</th>
                            <th> Acciones </th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartProduct
                            v-for="cartItem in cart"
                            :key="cartItem.id"
                            :cartItem="cartItem"
                            @delete="deleteCartItem($event)"
                        />
                    </tbody>
                </table>
                
                <button class="btn btn-primary btn-success" @click="PurchaseItems()">Comprar</button>
            </form>
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
        let cartStr = localStorage.getItem('cart')
        this.cart = JSON.parse(cartStr);
    },

    data () {

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
            console.log(this.cart)
        }
    }
}
</script>



<style>
.CarritoCompra {
    width: 700px;
    background-color:black;
    color:whitesmoke;
    top: 60%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding:10px 30px;
    box-shadow: 7px 17px 37px black;
    text-align: center;
}

.compra h1{
    margin: 0;
    padding: 0 0 20px;
    text-align: center;

}
.boton{
    width: 100%;
    color: black;
    background:whitesmoke;
    border: none;
    padding: 12px;
    margin: 16px 0;
    font-size: 18px;
}


</style>