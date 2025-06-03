<template>
    <div class="container my-5">
      <h1 class="mb-4">Our Menu</h1>
      
      <CategoryFilter 
        :categories="categories" 
        @update:category="setActiveCategory"
      />
      
      <div v-if="filteredItems.length === 0" class="alert alert-info">
        No items found in this category.
      </div>
      
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col" v-for="item in filteredItems" :key="item.id">
          <MenuItemCard :item="item" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import MenuItemCard from '@/components/MenuItemCard.vue'
  import CategoryFilter from '@/components/CategoryFilter.vue'
  import type { MenuItem } from '@/types'
  
  const activeCategory = ref('All')
  
  const menuItems = ref<MenuItem[]>([
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato sauce, mozzarella, and basil',
      price: 12.99,
      category: 'Pizza',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002'
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      description: 'Pizza with tomato sauce, mozzarella, and pepperoni',
      price: 14.99,
      category: 'Pizza',
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3'
    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Romaine lettuce, croutons, parmesan, and Caesar dressing',
      price: 8.99,
      category: 'Salad',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1'
    },
    {
      id: 4,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
      price: 6.99,
      category: 'Dessert',
      image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e'
    },
    {
      id: 5,
      name: 'Iced Tea',
      description: 'Refreshing iced tea with lemon',
      price: 2.99,
      category: 'Drink',
      image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256'
    },
    {
      id: 6,
      name: 'Pasta Carbonara',
      description: 'Spaghetti with creamy egg sauce, pancetta, and parmesan',
      price: 13.99,
      category: 'Pasta',
      image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb'
    }
  ])
  
  const categories = computed(() => {
    const allCategories = ['All', ...new Set(menuItems.value.map(item => item.category))]
    return allCategories
  })
  
  const filteredItems = computed(() => {
    if (activeCategory.value === 'All') {
      return menuItems.value
    }
    return menuItems.value.filter(item => item.category === activeCategory.value)
  })
  
  const setActiveCategory = (category: string) => {
    activeCategory.value = category
  }
  </script>