<template>
     <body>
        <div class="container container-md">
            <h1>Información de tu entrega</h1>
            <hr>
            <form @submit.prevent="getAllData()">
                <div class="input-group mb-3">
                    <input class="form-control" type="text" placeholder="Nombre completo"
                    v-model="informacionEnvio['nombre']" required/> 
                </div>

                <div class="input-group mb-3">
                    <select class="form-select" aria-label="Tipo de documento" 
                    v-model="informacionFacturacion['tipoDocumento']" required>
                        <option selected disabled value="null">Tipo de documento</option>
                        <option value=1>C.C</option>
                        <option value=2>T.I</option>
                        <option value=3>N.I.T</option>
                    </select>
  
                </div>

                <div class="input-group mb-3">
                    <input class="form-control" type="text" placeholder="Número de documento"
                    v-model="informacionFacturacion['numeroDocumento']" required/>
                </div>
                <div class="input-group mb-3">
                    <input class="form-control" type="email" placeholder="Correo electrónico"
                    v-model="informacionEnvio['email']" required/>
                </div>

                <div class="input-group mb-3">
                    <input class="form-control" type="text" placeholder="Número de contacto"
                    v-model="informacionEnvio['celular']" required/> 
                </div>

                <div class="input-group mb-3">
                    <input class="form-control" type="text" placeholder="Ciudad de entrega"
                    v-model="informacionEnvio['ciudad']" required/>
                </div>
                
                <div class="input-group mb-3">
                    <input class="form-control" type="text" placeholder="Departamento"
                    v-model="informacionEnvio['departamento']" required/>
                </div>

                <div class="input-group mb-3">
                    <input class="form-control" type="text" placeholder="Dirección de entrega"
                    v-model="informacionEnvio['direccion']" required/> 
                </div>
                <hr>
                <button id="purchase" class="btn btn-primary btn-success">Confirmar pedido</button>
            </form>
        </div>
    </body>
</template>

<script>
import gql from "graphql-tag";

export default {
    name: 'Formularioview',

    data(){
        return {
            cart: [],
            informacionEnvio: {},
            informacionFacturacion: {
                metodoPago: 3
            },
            infoCompra: null


        }
    },

    created(){
        let cartStr = localStorage.getItem('cart');
        if(cartStr);
            this.cart = JSON.parse(cartStr);
    },

    methods: {
        async getAllData() {
            //Getting total from cart
            let total = 0;
            this.cart.forEach((item) => {
                total = total + item.productoPrecioTotal;
                delete item.productoNombre;
            }) 
            this.informacionFacturacion.tipoDocumento = parseInt(this.informacionFacturacion.tipoDocumento)
            this.informacionFacturacion.precioTotal = total
            this.informacionFacturacion.numeroCelular = this.informacionEnvio.celular
            
            this.infoCompra = {
                informacionEnvio: this.informacionEnvio,
                informacionFacturacion: this.informacionFacturacion,
                informacionCarrito: this.cart
            }
            
            await this.$apollo.mutate({
                mutation: gql`
                mutation Mutation($purchaseItemsPurchaseInput: PurchaseInput!) {
                    purchaseItems(purchaseInput: $purchaseItemsPurchaseInput) {
                        informacionCompra {
                        id
                        compraFecha
                        compraEstado
                        }
                    }
                }`,
                    variables: {
                        purchaseItemsPurchaseInput: this.infoCompra
                    }
                }).then(result => {
                    this.infoCompra = result.data.purchaseItems.informacionCompra
                    localStorage.setItem('infoCompra', JSON.stringify(this.infoCompra))
                    localStorage.removeItem('cart');
                    this.$router.push({ name: 'CompraView' })
                }).catch(() => {
                    alert('Ocurrió un error al realizar la compra')
                })

        }
    },

}
</script>


<style>

#purchase{
    margin-left: 5px;
}

</style>