import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import MenuView from './views/MenuView.vue'
import CartView from './views/CartView.vue'
import CheckoutView from './views/CheckoutView.vue'
import OrderSuccessView from './views/OrderSuccessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/order-success',
      name: 'order-success',
      component: OrderSuccessView
    }
  ]
})

export default router