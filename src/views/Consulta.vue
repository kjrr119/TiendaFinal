<template>

 <body>
        <div class="compra">
            <h1>¡Ingrese el codigo de compra!</h1>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Código de compra" aria-label="Código de compra" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
            </div>

            <section>
                <table>
                    <tr>
                        <th> A </th>
                    </tr>
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
.compra {
    width: 700px;
    background-color:black;
    color:whitesmoke;
    top:50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding:10px 30px;
    box-shadow: 7px 17px 37px black;
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

.codigo{
    width: 100%;
    color: black;
    background:whitesmoke;
    border: none;
    padding: 12px;
    margin: 16px -10px;
    font-size: 18px;
    
}
</style>