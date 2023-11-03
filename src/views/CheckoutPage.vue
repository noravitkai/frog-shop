<template>
  <div>
    <NavBar />
  </div>
  <div class="mt-14">
    <CheckoutComponent />
  </div>
  <div>
    <FooterComponent />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import CheckoutComponent from '../components/CheckoutComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>
