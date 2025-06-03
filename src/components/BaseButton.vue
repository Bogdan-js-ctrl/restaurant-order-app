<template>
    <button 
      class="btn"
      :class="[`btn-${variant}`, { 'btn-sm': small, 'btn-lg': large }]"
      :type="type"
      @click="$emit('click')"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup lang="ts">
  withDefaults(defineProps<{
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
    type?: 'button' | 'submit' | 'reset'
    small?: boolean
    large?: boolean
  }>(), {
    variant: 'primary',
    type: 'button',
    small: false,
    large: false
  })
  </script>