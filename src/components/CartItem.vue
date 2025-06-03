<template>
    <div class="cart-item p-3 mb-3 rounded slide-in">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h5 class="mb-1">{{ item.name }}</h5>
          <p class="mb-1">${{ item.price.toFixed(2) }} x {{ item.quantity }}</p>
          <p class="mb-0 fw-bold">${{ (item.price * item.quantity).toFixed(2) }}</p>
        </div>
        <div class="d-flex align-items-center">
          <div class="btn-group me-2">
            <button class="btn btn-sm btn-outline-secondary" @click="decreaseQuantity">-</button>
            <button class="btn btn-sm btn-outline-secondary disabled">{{ item.quantity }}</button>
            <button class="btn btn-sm btn-outline-secondary" @click="increaseQuantity">+</button>
          </div>
          <button class="btn btn-remove" @click="removeItem">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { CartItem } from '@/types'
  import { useCartStore } from '@/stores/cart'
  
  const props = defineProps<{
    item: CartItem
  }>()
  
  const cartStore = useCartStore()
  
  const increaseQuantity = () => {
    cartStore.updateQuantity(props.item.id, props.item.quantity + 1)
  }
  
  const decreaseQuantity = () => {
    cartStore.updateQuantity(props.item.id, props.item.quantity - 1)
  }
  
  const removeItem = () => {
    cartStore.removeFromCart(props.item.id)
  }
  </script>