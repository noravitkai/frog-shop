<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-greygreen shadow-md">
    <nav class="flex items-center justify-between p-3 lg:px-5" aria-label="Global">
      <!-- Logo -->
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Frog Shop</span>
          <img class="h-8 w-auto" src="src/assets/happy-frog.svg" alt="" />
        </a>
      </div>

      <!-- Mobile Navigation Button -->
      <div class="flex lg:hidden">
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

      <!-- Log in Button on Desktop -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-hovergreen group relative">
          Bejelentkezés
          <!-- Underline Effect -->
          <span
            class="absolute inset-x-0 bottom-0 h-0.5 bg-hovergreen transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 lg:group-hover:w-full"
          ></span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>

    <!-- Mobile Navigation Dialog -->
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="bg-greygreen fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Frog Shop</span>
            <img class="h-8 w-auto" src="src/assets/happy-frog.svg" alt="" />
          </a>
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
          <div class="py-6">
            <!-- Log in Button on Mobile -->
            <a
              href="#"
              class="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-semibold leading-7 text-hovergreen group relative"
            >
              Bejelentkezés
              <!-- Underline Effect -->
              <span
                class="absolute inset-x-0 bottom-0 h-0.5 bg-hovergreen transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 lg:group-hover:w-full"
              ></span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Főoldal', href: '/', hover: false },
  { name: 'Rólunk', href: '/about', hover: false },
  { name: 'GYIK', href: '/faq', hover: false }
]

const mobileMenuOpen = ref(false)
</script>
