<template>
  <RouterView />
  <!-- This is where the router will render the components -->
</template>

<script setup>
import { RouterView } from 'vue-router'
import { cart } from './cart'
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  // Load cart data from localStorage when the component mounts
  const savedCart = localStorage.getItem('cart')
  if (savedCart) {
    cart.value = JSON.parse(savedCart)
  }
})

onBeforeUnmount(() => {
  // Save cart data to localStorage when the component is about to be unmounted
  localStorage.setItem('cart', JSON.stringify(cart.value))
})
</script>
