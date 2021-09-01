<template>

 <body>
        <div class="container">
            <h1>¡Ingrese el codigo de compra!</h1>
            <hr>
            <form @submit.prevent="purchaseInfo">
                <div class="input-group mb-3 search-box">
                    <input type="text" class="form-control" placeholder="Código de compra" aria-label="Código de compra" aria-describedby="button-addon2" v-model="purchaseId">
                    <button class="btn btn-outline-secondary" type="submit"><i class="fas fa-search"></i></button>
                </div>
            </form>

            <section v-if="purchaseDetails">
                <table class="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <th><h2>Facturación</h2></th>
                        </tr>
                    </thead>
                </table>

                    <table class="table table-dark table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Tipo documento</th>
                                <th>Documento</th>
                                <th>Celular</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {{ tipoDeDocumento }} </td>
                                <td> {{ this.purchaseDetails.informacionFacturacion.numeroDocumento }} </td>
                                <td> {{ this.purchaseDetails.informacionFacturacion.numeroCelular }} </td>
                                <td> $ {{ this.purchaseDetails.informacionFacturacion.precioTotal }} </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table class="table table-dark table-striped table-hover">
                        <thead>
                            <tr>
                                <th><h2>Envío</h2></th>
                            </tr>
                        </thead>
                    </table>

                    <table class="table table-dark table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Ciudad</th>
                                <th>Departamento</th>
                                <th>Dirección</th>
                                <th>Celular</th>
                                <th>Email</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {{ this.purchaseDetails.informacionEnvio.nombre }} </td>
                                <td> {{ this.purchaseDetails.informacionEnvio.ciudad }} </td>
                                <td> {{ this.purchaseDetails.informacionEnvio.departamento }} </td>
                                <td> {{ this.purchaseDetails.informacionEnvio.direccion }} </td>
                                <td> {{ this.purchaseDetails.informacionEnvio.celular }} </td>
                                <td> {{ this.purchaseDetails.informacionEnvio.email }} </td>
                                <td v-html="estadoEnvio"></td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="table table-dark table-striped table-hover">
                        <thead>
                            <tr>
                                <th><h2>Productos</h2></th>
                            </tr>
                        </thead>
                    </table>

                    <table class="table table-dark table-striped table-hover">
                        <thead>
                            <tr>
                                <th>ID Producto</th>
                                <th>Cantidad</th>
                                <th>Precio unitario</th>
                                <th>Precio total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in this.purchaseDetails.informacionCarrito"
                                      :key="product.id">       
                                    <td>{{product.productoId}}</td>
                                    <td>{{product.productoCantidad}}</td>
                                    <td>$ {{product.productoPrecioUnitario}}</td>
                                    <td>$ {{product.productoPrecioTotal }}</td>  
                            </tr>
                        </tbody>
                    </table>

                    

            </section>

        </div>
 </body>
    

</template>
<script>
import gql from "graphql-tag";

export default {
    name: "ConsultaView",

    data () {
        return {
            purchaseId: null,
            purchaseDetails: null
        }
    },

    methods: {
        async purchaseInfo() {
            await this.$apollo.query({
                query: gql`
                    query ($getPurchaseInfoPurchaseId: String!) {
                        getPurchaseInfo(purchaseId: $getPurchaseInfoPurchaseId) {
                            informacionEnvio {
                                id
                                nombre
                                ciudad
                                departamento
                                direccion
                                celular
                                email
                                fechaEntrega
                                compraId
                            }
                            informacionFacturacion {
                                id
                                tipoDocumento
                                numeroDocumento
                                numeroCelular
                                metodoPago
                                precioTotal
                                compraId
                            }
                            informacionCarrito {
                                id
                                productoId
                                productoCantidad
                                productoPrecioUnitario
                                productoPrecioTotal
                                compraId
                            }
                            informacionCompra {
                                id
                                compraFecha
                                compraEstado
                            }
                        }
                    }
                `,

                variables: {
                    getPurchaseInfoPurchaseId : this.purchaseId
                }

            }).then(result => {
                this.purchaseDetails = result.data.getPurchaseInfo;
            })
            .catch(() => {
                alert('Información de compra no existe')
                this.purchaseDetails = {}
            })
        }
    },
    computed: {
        estadoEnvio(){
            let entregado = this.purchaseDetails.informacionEnvio.fechaEntrega;
            if(entregado)
                return '<i class="fas fa-box-open"></i>'
            else
                return "<i class='fas fa-truck-loading'></i>"
        },

        tipoDeDocumento() {
            let tipoDocumento = this.purchaseDetails.informacionFacturacion.tipoDocumento;
            switch (tipoDocumento) {
                case 1:
                    return "C.C"
                case 2:
                    return "N.I.T"
                case 3: 
                    return "T.I"
                default:
                    return "N.A";
            }
        }
    }


}
</script>


<style>

.search-box{
    max-width: 300px;
    margin: auto;
}


</style>