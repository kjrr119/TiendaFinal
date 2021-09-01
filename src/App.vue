<template>
    <header>   
        <h1>SIGNATURE</h1>
    </header>
    <div class="img-logo">
        <img class="logo" src="./assets/logo.jpg" alt="logo de signature">
    </div>

    <nav class="nav nav-pills justify-content-center mx-auto">
        <router-link to="/">
           <a class="nav-link active" aria-current="page" href="#">Productos</a>
        </router-link>

        <router-link to="/carrito">
          <a class="nav-link active" href="#">Carrito</a>
        </router-link>

        <router-link to="/consulta">
          <a class="nav-link active" href="#">Consulta</a>
        </router-link>  
    </nav>

    <a href="/carrito">
      <label v-if="cartNumber"> <h2>{{cartNumber}} </h2> </label>
      <img class="carrito" src="./assets/carrito.png" alt="carrito">
    </a>

    <router-view/>

    <footer></footer>

</template>

<script>

export default {
  name: "App",

  data () {
    return {
      cartNumber: null
    }
  },

  created() {

  }
}

</script>



<style>
body{
  margin: 0;
  padding: 0;
  background-image: url("../src/assets/back\ 2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
    height: 80px;
}

.carrito{
  width: 70px;
  height: 70px;
  position: absolute;
  top: 9px;
  left: calc(100% - 100px);
}

.nav {
  max-width: 600px;  
  padding: 50px;
}

.nav-link {
  margin: 10px;
  background-color: #000000!important;
}

a {
  text-decoration: none;
}

.container{
  background-color:rgba(0, 0, 0, 0.884);
  color:whitesmoke;
  padding:10px 30px;
  box-shadow: 7px 17px 37px black;
  text-align: center;
}

.container-md {
    max-width: 700px;
}

.container-md h1{
    margin: 0;
    padding: 0 0 20px;
    text-align: center;

}

.table thead{
  vertical-align: middle;
}

footer {
  height: 100px;
}

</style>