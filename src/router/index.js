import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutes from './home'
import ContactRoutes from './contact'
import CartRoutes from './cart'
import AboutRoutes from './about'
import ProductRoutes from './products'
import AdminRoutes from './admin'
import UserRoutes from './user'

Vue.use(Router)

export default new Router({
  routes: [
    UserRoutes,
    AdminRoutes,
    HomeRoutes,
    ContactRoutes,
    CartRoutes,
    AboutRoutes,
    ProductRoutes
  ]
})
