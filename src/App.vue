<template>
    <header>   
        <h1>▲SIGNATURE▲</h1>
    </header>
    <div class="img-logo">
        <hi><img class="logo" src="./assets/logo.jpg" alt="logo de signature"></hi>
    </div>
    <div v-if="isAuth" id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/compra">Compra</router-link> |
      <router-link to="/formulario">Compra</router-link> |
      <router-link to="/carrito">Compra</router-link> |
      

    </div>
    <router-view/>

    
</template>

<script>

</script>



<style>
body{
  margin: 0;
  padding: 0;
  background-image: url("../src/assets/back\ 2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  }

  .img-logo .logo{
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0%;
  border-radius: 100px;
  left: calc(50% - 50px);

}
header{
    background: black;
    color: #fff;
    padding: 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

</style>