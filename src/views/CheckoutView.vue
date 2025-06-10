<template>
    <div class="container my-5">
      <h1 class="mb-4">Checkout</h1>
      
      <div class="row">
        <div class="col-lg-6">
          <div class="card mb-4">
            <div class="card-body">
              <h4 class="card-title mb-4">Информация о доставке</h4>
              
              <form @submit.prevent="submitOrder">
                <BaseInput
                  id="name"
                  label="Полное Имя"
                  v-model="form.name"
                  :error="errors.name"
                  placeholder="Богдан"
                />
                
                <BaseInput
                  id="phone"
                  label="Телефон"
                  v-model="form.phone"
                  :error="errors.phone"
                  placeholder="+7999-999-99-99"
                />
                
                <BaseInput
                  id="address"
                  label="Delivery Address"
                  v-model="form.address"
                  :error="errors.address"
                  placeholder="123 Main St, City, Country"
                />
                
                <div class="mt-4">
                  <button type="submit" class="btn btn-submit btn-lg w-100" :disabled="isSubmitting">
                    <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status"></span>
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">Order Summary</h4>
              
              <div v-for="item in cartItems" :key="item.id" class="mb-2">
                <div class="d-flex justify-content-between">
                  <span>{{ item.name }} x {{ item.quantity }}</span>
                  <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
                </div>
              </div>
              
              <hr>
              
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
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useCartStore } from '@/stores/cart'
  import BaseInput from '@/components/BaseInput.vue'
  
  const router = useRouter()
  const cartStore = useCartStore()
  const { cartItems, total, clearCart } = cartStore
  const { cartItems: cartItemsRef } = storeToRefs(cartStore)
  
  const form = ref({
    name: '',
    phone: '',
    address: ''
  })
  
  const errors = ref({
    name: '',
    phone: '',
    address: ''
  })
  
  const isSubmitting = ref(false)
  
  const validateForm = () => {
    let isValid = true
    errors.value = { name: '', phone: '', address: '' }
    
    if (!form.value.name.trim()) {
      errors.value.name = 'Name is required'
      isValid = false
    }
    
    if (!form.value.phone.trim()) {
      errors.value.phone = 'Phone is required'
      isValid = false
    } else if (!/^[\d\s+\-()]{10,}$/.test(form.value.phone)) {
      errors.value.phone = 'Please enter a valid phone number'
      isValid = false
    }
    
    if (!form.value.address.trim()) {
      errors.value.address = 'Address is required'
      isValid = false
    }
    
    return isValid
  }
  
  const submitOrder = () => {
    if (!validateForm()) return
    
    isSubmitting.value = true
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would send the order to your backend here
      const order = {
        ...form.value,
        items: cartItemsRef.value,
        total: total.value + 2, // Including delivery fee
        status: 'pending',
        createdAt: new Date()
      }
      
      // Save order to localStorage (simulating database)
      localStorage.setItem('lastOrder', JSON.stringify(order))
      
      // Clear cart
      clearCart()
      
      // Redirect to success page
      router.push('/order-success')
      
      isSubmitting.value = false
    }, 1500)
  }
  </script>