<template>
     <body>
        <div class="formulario">
            <h1>▲¡Por favor ingrese los datos de compra!▲</h1>
            <form action="Compra">
                <label for="nombreS"></label>
                <input class="datos" id="nombres" name="nombres" type="text" placeholder="nombres"
                required/> 
                <label for="apellidos"></label>     
                <input class="datos" id="apellidos" name="apellidos" type="text" placeholder="apellidos"
                required/> 
                <label for="correo"></label>
                <input class="datos" id="correo" name="correo" type="email" placeholder="correo"
                required/>
                <label for="numero"></label>
                <input class="datos" id="numero" name="numero" type="tel" placeholder="numero de contacto"
                required/>       
                <label for="ciudad"></label>
                <input class="datos" id="ciudad" name="ciudad" type="text" placeholder="ciudad"
                required/>
                <label for="direccion"></label>
                <input class="datos" id="direccion" name="direccion" type="text" placeholder="direccion"
                required/> 
                <input class="boton1" type="submit" value="Confirmar compra">
            </form>
            <form action="Inicio">
                <input class="boton2" type="submit" value="Regresar al inicio">
            </form>
        </div>
    </body>
</template>

<script>
export default {
    name: 'Formularioview'
}
</script>


<style>
.formulario  {
    width: 450px;
    height: 600px;
    background-color:black;
    color:whitesmoke;
    top:65%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding:30px 30px;
}

.datos {
    width:95%;
    background: whitesmoke;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 10px;
    border: 1px solid #1f53c5;
    font-size: 18px;
}

.formulario .boton1{
    width: 100%;
    color: black;
    background:whitesmoke;
    border: none;
    padding: 10px;
    margin: 16px 0px;
    font-size: 16px;

}

.formulario .boton2{
    width: 100%;
    color: black;
    background:whitesmoke;
    border: none;
    padding: 10px;
    font-size: 16px;
    margin-top: 5px;

}

</style>