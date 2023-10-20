<template>
  <div class="bg-ghostwhite">
    <div class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:py-12">
      <!-- Page Title with Separator -->
      <h2
        class="text-2xl lg:text-4xl text-center font-bold tracking-tight text-hovergreen pb-3 sm:pb-4 lg:pb-6 relative mb-6 sm:mb-8 lg:mb-12"
      >
        Rendelés
        <!-- Line Separator -->
        <span
          class="block w-16 mx-auto h-1 bg-hovergreen absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-1 sm:mb-2"
        ></span>
      </h2>

      <!-- Cart Items -->
      <div class="px-4 py-4 sm:px-6">
        <h3 class="text-xl font-bold tracking-tight pb-4 text-hovergreen sm:text-2xl">
          Kosár tartalma
        </h3>
        <ul class="mt-4 space-y-4">
          <!-- Iterate through cart items -->
          <li v-for="product in cart" :key="product.id" class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                :src="product.imageURL"
                :alt="`Image of ${product.name}`"
                class="h-12 w-12 object-cover object-center shadow-md"
              />
              <div class="text-shadowgreen">
                <h2 class="text-base font-medium">{{ product.name }}</h2>
                <p class="text-sm">{{ product.price }} Ft</p>
              </div>
            </div>
            <div class="flex items-center space-x-6 sm:space-x-12">
              <p class="text-base font-medium">{{ product.quantity }} db</p>
              <p class="text-base font-medium">{{ product.quantity * product.price }} Ft</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Separator Border -->
      <div class="border-t border-hovergreen px-4 sm:px-6 mt-4"></div>

      <!-- Shipping Cost -->
      <div class="px-4 py-4 sm:px-6">
        <div class="flex justify-between text-base font-medium">
          <p>Szállítási költség</p>
          <p>{{ shippingCost }} Ft</p>
        </div>
      </div>

      <!-- Total Price -->
      <div class="border-t border-hovergreen px-4 py-4 sm:px-6">
        <div class="flex justify-between text-base font-medium text-hovergreen mt-4">
          <p>Összesen</p>
          <p>{{ calculateTotal() + shippingCost }} Ft</p>
        </div>
      </div>

      <!-- Bank Account & Payment Instructions -->
      <div class="px-4 py-4 sm:px-6 text-hovergreen">
        <h3 class="text-xl font-bold tracking-tight pb-4 sm:text-2xl">Fizetés</h3>
        <p class="mt-4 text-base text- font-medium">
          Kérlek, utald át a fenti összeget a következő számlaszámra:
        </p>
        <p class="mt-2 text-base">
          <span class="underline underline-offset-4 font-medium">Számlaszám:</span>
          <span class=""> 12345678-12345678</span>
        </p>
        <p class="mt-2 text-base">
          <span class="underline underline-offset-4 font-medium">Név:</span>
          <span class=""> Jobbágy Zorka</span>
        </p>
        <p class="mt-2 text-base">
          <span class="underline underline-offset-4 font-medium">Közlemény:</span>
          <span class=""> Webshop rendelés</span>
        </p>
        <p class="mt-4 text-base">A termék(ek)et a befizetés beérkezése után fogom elküldeni.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { cart } from '../cart.js'

const shippingCost = 750

const calculateTotal = () => {
  return cart.value.reduce(
    (total, product) => total + parseFloat(product.price) * parseInt(product.quantity),
    0
  )
}
</script>
