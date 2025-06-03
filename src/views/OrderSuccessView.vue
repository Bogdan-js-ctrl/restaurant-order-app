<template>
    <div class="container my-5 text-center">
      <div class="order-success">
        <div class="success-icon mb-4">
          <i class="bi bi-check-circle-fill"></i>
        </div>
        <h1 class="display-4 mb-4">Order Placed Successfully!</h1>
        <p class="lead mb-4">Thank you for your order. We've received it and will start preparing your food shortly.</p>
        <p class="mb-4">Your order number is: <strong>#{{ orderId }}</strong></p>
        <p class="mb-4">Estimated delivery time: <strong>30-45 minutes</strong></p>
        <router-link to="/" class="btn btn-primary btn-lg">
          Back to Home
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  const orderId = ref('')
  
  onMounted(() => {
    // Generate a random order ID or retrieve from localStorage
    const lastOrder = localStorage.getItem('lastOrder')
    if (lastOrder) {
      const order = JSON.parse(lastOrder)
      orderId.value = `ORD-${Math.floor(100000 + Math.random() * 900000)}`
    } else {
      // If no order found, redirect to home
      // In a real app, you might want to handle this differently
      window.location.href = '/'
    }
  })
  </script>