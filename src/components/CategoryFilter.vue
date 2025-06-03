<template>
    <div class="mb-4">
      <div class="btn-group" role="group">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          class="btn"
          :class="activeCategory === category ? 'btn-primary' : 'btn-outline-primary'"
          @click="setActiveCategory(category)"
        >
          {{ category }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const props = defineProps<{
    categories: string[]
  }>()
  
  const emit = defineEmits<{
    (e: 'update:category', category: string): void
  }>()
  
  const activeCategory = ref('All')
  
  const setActiveCategory = (category: string) => {
    activeCategory.value = category
    emit('update:category', category)
  }
  </script>