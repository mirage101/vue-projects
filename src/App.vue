<template>
  <div id="app">
    <header class="container">
      <div class="store-logo left">
        <router-link to="/">
        <h1>Beer Shop</h1>
        <h5>The best place to buy a beer</h5>
        </router-link>
      </div>
       <div class="welcome-msg">
        Hello, ....
      </div>
       <nav>
      <div>
        <ul class="nav__left">
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contacts</router-link></li>
          <li><router-link to="/user">User Acount</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
        </ul>
        <ul class="nav__right">
          <li><i class="fa fa-shopping-cart"></i> Cart </li>
        </ul>
      </div>
    </nav>
    </header>
    
   
    <router-view></router-view>
      <footer>Footer content here</footer>
    </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
