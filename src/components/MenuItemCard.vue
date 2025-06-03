<template>
    <div class="card menu-item-card h-100">
      <img :src="item.image" class="card-img-top" :alt="item.name">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ item.name }}</h5>
        <p class="card-text">{{ item.description }}</p>
        <div class="mt-auto d-flex justify-content-between align-items-center">
          <span class="fw-bold">${{ item.price.toFixed(2) }}</span>
          <button 
            class="btn btn-add-to-cart text-white" 
            @click="addToCart"
            :class="{ 'add-to-cart-animation': isAnimating }"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import type { MenuItem } from '@/types'
  import { useCartStore } from '@/stores/cart'
  
  const props = defineProps<{
    item: MenuItem
  }>()
  
  const cartStore = useCartStore()
  const isAnimating = ref(false)
  
  const addToCart = () => {
    cartStore.addToCart(props.item)
    isAnimating.value = true
    setTimeout(() => {
      isAnimating.value = false
    }, 500)
  }
  </script>