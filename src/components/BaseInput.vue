<template>
    <div class="mb-3">
      <label v-if="label" :for="id" class="form-label">{{ label }}</label>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="form-control"
        :class="{ 'is-invalid': error }"
        :placeholder="placeholder"
      >
      <div v-if="error" class="invalid-feedback">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  withDefaults(defineProps<{
    id: string
    modelValue: string
    type?: string
    label?: string
    placeholder?: string
    error?: string
  }>(), {
    type: 'text',
    label: '',
    placeholder: '',
    error: ''
  })
  
  defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()
  </script>