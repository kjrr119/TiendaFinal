<template>

 <body>
        <div class="container container-md" v-if="infoCompra">
            <h1>¡MUCHAS GRACIAS POR SU COMPRA!</h1>
            <hr>
                Por favor copie el identificador de su compra para hacer el seguido de su pedido
            <hr>
            <div class="input-group mb-3 purchase-id">
                <span class="input-group-text">
                    <i class="fas fa-fingerprint"></i>
                </span>
                <input type="text" class="form-control" disabled aria-label="ID" aria-describedby="basic-addon1" :value="GetPurchaseId">
            </div>
            <hr>
            <form action="/">
                <button class="btn btn-primary btn-success">Regresar</button>
            </form>
        </div>
 </body>
    

</template>
<script>
export default {
    name: "CompraView",
    data () {
        return {
            infoCompra: null
        }
    },
    created () {
        this.infoCompra = JSON.parse(localStorage.getItem('infoCompra'));
        if(!this.infoCompra){
            this.$router.push({ name: 'ProductosView' })
        }
    },
    computed: {
        GetPurchaseId(){
            return this.infoCompra.id
        }    
    }

}
</script>


<style scoped>

.container-md .avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: calc(50%  - 50px);
}

.purchase-id {
    max-width: 200px;
    margin: auto;
}

</style>

