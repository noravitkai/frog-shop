<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-greygreen shadow-md">
    <nav class="flex items-center justify-between p-3 lg:px-5" aria-label="Global">
      <!-- Logo -->
      <div class="flex lg:flex-1">
        <router-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Frog Shop</span>
          <img class="h-8 w-auto" :src="HappyFrog" alt="Frog Shop" />
        </router-link>
      </div>

      <!-- Shopping Bag and Navigation Button on Mobile -->
      <div class="flex lg:hidden">
        <!-- Shopping Bag on Mobile -->
        <button
          type="button"
          class="inline-flex items-center justify-center relative p-2.5 text-hovergreen mr-4"
          @click="toggleCart"
        >
          <span class="sr-only">Open shopping cart</span>
          <ShoppingBagIcon class="h-5 w-5" aria-hidden="true" />
          <!-- Display badge if the cart is not empty -->
          <span
            v-if="cart.length"
            class="absolute top-0 right-0 -mt-1 -mr-1 inline-flex items-center justify-center bg-hovergreen rounded-full h-4 w-4 text-sm text-ghostwhite"
          >
            {{ totalCartQuantity }}
          </span>
        </button>
        <!-- Mobile Navigation Button -->
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-hovergreen"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <!-- Desktop Navigation Menu -->
      <div class="hidden lg:flex lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm font-semibold leading-6 text-hovergreen group relative"
        >
          {{ item.name }}
          <!-- Underline Effect -->
          <span
            class="absolute inset-x-0 bottom-0 h-0.5 bg-hovergreen transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 lg:group-hover:w-full"
          ></span>
        </a>
      </div>

      <!-- Shopping Bag and Log in Button on Desktop -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <!-- Shopping Bag on Desktop -->
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center relative p-2.5 text-hovergreen"
          @click="toggleCart"
        >
          <span class="sr-only">Open shopping cart</span>
          <ShoppingBagIcon class="h-5 w-5" aria-hidden="true" />
          <!-- Display badge if the cart is not empty -->
          <span
            v-if="cart.length"
            class="absolute top-0 right-0 -mt-1 -mr-1 inline-flex items-center justify-center bg-hovergreen rounded-full h-4 w-4 text-sm text-ghostwhite"
          >
            {{ totalCartQuantity }}
          </span>
        </button>
      </div>
    </nav>

    <!-- Mobile Navigation Dialog -->
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="bg-greygreen fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm"
      >
        <div class="flex items-center justify-between">
          <router-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Frog Shop</span>
            <img class="h-8 w-auto" src="@/assets/happy-frog.svg" alt="" />
          </router-link>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-hovergreen"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="space-y-2 py-6">
            <!-- Mobile Navigation Menu -->
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-hovergreen group relative"
            >
              {{ item.name }}
              <!-- Underline Effect -->
              <span
                class="absolute inset-x-0 bottom-0 h-0.5 bg-hovergreen transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 lg:group-hover:w-full"
              ></span>
            </a>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  <!-- Conditionally render the ShoppingCart component based on showCart value -->
  <ShoppingCart v-if="showCart" @closeCart="toggleCart" />
</template>

<script setup>
import HappyFrog from '../assets/happy-frog.svg'
import { ref, computed } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/vue/24/outline'
import { cart } from '../cart.js'

const navigation = [
  { name: 'Főoldal', href: '/', hover: false },
  { name: 'Rólunk', href: '/about', hover: false },
  { name: 'GYIK', href: '/faq', hover: false }
]

const mobileMenuOpen = ref(false)
const showCart = ref(false)

const toggleCart = () => {
  showCart.value = !showCart.value
}

// Computed property to calculate the total quantity in the cart for the badge
const totalCartQuantity = computed(() => {
  return cart.value.reduce((total, item) => total + item.quantity, 0)
})
</script>
