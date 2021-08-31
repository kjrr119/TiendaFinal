<template>

 <body>
        <div class="container container-md">
            <img class="avatar" src="assets/logo.jpg" alt="logo SIGNATURE">
            <h1>¡MUCHAS GRACIAS POR SU COMPRA!</h1>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    <i class="fas fa-fingerprint"></i>
                </span>
                <input type="text" class="form-control" disabled aria-label="Username" aria-describedby="basic-addon1" :value="GetPurchaseId">
            </div>

            <form action="/">
                <button class="btn btn-primary btn-success"> Regresar </button>
            </form>
        </div>
 </body>
    

</template>
<script>
export default {
    name: "CompraView",
    data () {
        return {
            idCompra: 1
        }
    },
     computed: {
         GetPurchaseId() {
             return "00" + this.idCompra;
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


</style>

