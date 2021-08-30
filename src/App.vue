<template>
    <header>   
        <h1>▲SIGNATURE▲</h1>
    </header>
    <div class="img-logo">
        <hi><img class="logo" src="./assets/logo.jpg" alt="logo de signature"></hi>
    </div>

    <div id="nav">
      <router-link to="/">Productos</router-link> |
      <router-link to="/carrito">Carrito</router-link> |
      <router-link to="/consulta">Consulta</router-link> |
    </div>

    <a href="/carrito">
      <img class="carrito" src="./assets/carrito.png" alt="carrito">
    </a>

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
  height: 550vh;
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

.carrito{
  width: 70px;
  height: 70px;
  position: absolute;
  top: 9px;
  left: calc(100% - 100px);
}

#nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  font-size: 25px;
  background:whitesmoke;
  padding: 5px;
  
}


</style>