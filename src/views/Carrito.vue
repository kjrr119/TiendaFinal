<template>
<body>
        <div class="CarritoCompra">
            <h1>▲¡Carrito!▲</h1>
            <form action="Formulario">
                <input class="boton" type="submit" value="Comprar">

            </form>
        </div>
 </body>
    
</template>





<script>
export default {
    name: 'CarritoView'
}
</script>



<style>
.CarritoCompra {
    width: 700px;
    height: 400px;
    background-color:black;
    color:whitesmoke;
    top: 60%;
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
</style>