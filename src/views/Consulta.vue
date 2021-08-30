<template>

 <body>
        <div class="compra">
            <img class="avatar" src="assets/logo.jpg" alt="logo ▲SIGNATURE▲">
            <h1>▲¡Ingrese el codigo de compra!▲</h1>
            <form >
                <input class="codigo" type="text" value="Ingrese codigo">

            </form>

            <form action="">
                <input class="boton" type="submit" value="Consultar">

            </form>
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
    width: 400px;
    height: 250px;
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
.compra .avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: calc(50%  - 50px);

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