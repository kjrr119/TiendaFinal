<template>

 <body>
        <div class="container container-md">
            <h1>¡Ingrese el codigo de compra!</h1>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Código de compra" aria-label="Código de compra" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
            </div>

            <section>
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
                                <th>Nombre del producto</th>
                                <th>Cantidad</th>
                                <th>Precio unitario</th>
                                <th>Precio total</th>
                                <th> Acciones </th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartProduct
   
                            />
                        </tbody>
                    </table>

                    

            </section>

        </div>
 </body>
    

</template>
<script>
export default {
    name: "ConsultaView"
}
</script>


<style>




</style>