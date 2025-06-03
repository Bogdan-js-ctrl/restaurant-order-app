<template>
  <NavBar />
  <router-view />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/styles/main.scss'
</script>