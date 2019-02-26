<template>
  <div>
    <div class="user-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="user-menu">
            <li><router-link to="/user/orders">Orders</router-link></li>
            <li><router-link to="/user/edit">Edit info</router-link></li>
            <li><router-link to="/user/wishlist">Wishlist</router-link></li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
  .user-menu a {
    display: block;
    background: #EFDB06;
    border: 1px solid #F9E610;
    color: #3D3D3D;
    padding: 10px 15px;
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    transform: scaleX(1);
    transition: transform 200ms ease-in;
  }

  .user-menu a:hover {
    text-decoration: none;
    transform: scaleX(1.02);
  }

  .user-new, .user-products {
    border-bottom: 2px solid #F5F5F5;
    padding: 30px 0;
  }
</style>