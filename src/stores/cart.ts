import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CartItem, MenuItem } from '../types/index'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([])
  const isInitialized = ref(false)

  const initialize = () => {
    if (isInitialized.value) return
    
    const savedCart = localStorage.getItem('restaurantCart')
    if (savedCart) {
      cartItems.value = JSON.parse(savedCart)
    }
    isInitialized.value = true
  }

  const saveToLocalStorage = () => {
    localStorage.setItem('restaurantCart', JSON.stringify(cartItems.value))
  }

  const addToCart = (item: MenuItem) => {
    initialize()
    
    const existingItem = cartItems.value.find(i => i.id === item.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cartItems.value.push({ ...item, quantity: 1 })
    }
    saveToLocalStorage()
  }

  const removeFromCart = (itemId: number) => {
    initialize()
    
    const index = cartItems.value.findIndex(i => i.id === itemId)
    if (index !== -1) {
      cartItems.value.splice(index, 1)
      saveToLocalStorage()
    }
  }

  const updateQuantity = (itemId: number, newQuantity: number) => {
    initialize()
    
    const item = cartItems.value.find(i => i.id === itemId)
    if (item) {
      if (newQuantity <= 0) {
        removeFromCart(itemId)
      } else {
        item.quantity = newQuantity
        saveToLocalStorage()
      }
    }
  }

  const clearCart = () => {
    cartItems.value = []
    saveToLocalStorage()
  }

  const total = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  })

  const itemCount = computed(() => {
    return cartItems.value.reduce((count, item) => count + item.quantity, 0)
  })

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
    itemCount,
    initialize
  }
})