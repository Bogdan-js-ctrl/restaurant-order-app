<template>
    <nav class="navbar navbar-expand-lg navbar-dark mb-4">
      <div class="container">
        <router-link class="navbar-brand" to="/">Restaurant App</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/menu">Menu</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link position-relative" to="/cart">
                Cart
                <span v-if="itemCount > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {{ itemCount }}
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { useCartStore } from '@/stores/cart'
  import { storeToRefs } from 'pinia'
  
  const cartStore = useCartStore()
  const { itemCount } = storeToRefs(cartStore)
  
  // Initialize cart on component mount
  cartStore.initialize()
  </script>