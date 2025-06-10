<template>
    <div class="container my-5">
      <h1 class="mb-4">НАШЕ МЕНЮ</h1>

      <CategoryFilter 
        :categories="categories" 
        @update:category="setActiveCategory"
      />

      <div v-if="filteredItems.length === 0" class="alert alert-info">
        Нет таких товаров
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
      name: 'Пицца Маргарита',
      description: 'Классическая пицца с томатным соусом, моцареллой и базиликом',
      price: 12.99,
      category: 'Pizza', // Категории обычно остаются на английском, так как это часть логики фильтрации. Если нужно, их тоже можно перевести в компоненте CategoryFilter или использовать маппинг.
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002'
    },
    {
      id: 2,
      name: 'Пицца Пепперони',
      description: 'Пицца с томатным соусом, моцареллой и колбасой пепперони',
      price: 14.99,
      category: 'Pizza',
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3'
    },
    {
      id: 3,
      name: 'Салат Цезарь',
      description: 'Салат Ромэн, гренки, пармезан и соус Цезарь',
      price: 8.99,
      category: 'Salad',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1'
    },
    {
      id: 4,
      name: 'Шоколадный лавовый торт',
      description: 'Теплый шоколадный торт с жидким центром, подается с ванильным мороженым',
      price: 6.99,
      category: 'Dessert',
      image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e'
    },
    {
      id: 5,
      name: 'Холодный чай',
      description: 'Освежающий холодный чай с лимоном',
      price: 2.99,
      category: 'Drink',
      image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256'
    },
    {
      id: 6,
      name: 'Паста Карбонара',
      description: 'Спагетти с сливочным яичным соусом, панчеттой и пармезаном',
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
