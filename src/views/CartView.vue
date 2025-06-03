<template>
    <div class="container my-5">
      <h1 class="mb-4">Your Cart</h1>
      
      <div v-if="cartItems.length === 0" class="alert alert-info">
        Your cart is empty. <router-link to="/menu">Browse our menu</router-link> to add items.
      </div>
      
      <div v-else>
        <div class="mb-4">
          <div v-for="item in cartItems" :key="item.id">
            <CartItem :item="item" />
          </div>
        </div>
        
        <div class="card mb-4">
          <div class="card-body">
            <h4 class="card-title">Order Summary</h4>
            <div class="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>${{ total.toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-content-between mb-3">
              <span>Delivery Fee:</span>
              <span>$2.00</span>
            </div>
            <hr>
            <div class="d-flex justify-content-between fw-bold fs-5">
              <span>Total:</span>
              <span>${{ (total + 2).toFixed(2) }}</span>
            </div>
          </div>
        </div>
        
        <div class="d-flex justify-content-end">
          <router-link to="/checkout" class="btn btn-success btn-lg">
            Proceed to Checkout
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useCartStore } from '@/stores/cart'
  import CartItem from '@/components/CartItem.vue'
  
  const cartStore = useCartStore()
  const { cartItems, total } = storeToRefs(cartStore)
  
  // Initialize cart if not already initialized
  cartStore.initialize()
  </script>