<template>
  <div class="bg-ghostwhite" v-if="productData">
    <div class="pt-6">
      <!-- Image gallery -->
      <div
        class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"
      >
        <div class="max-h-[550px] aspect-h-4 aspect-w-3 hidden overflow-hidden lg:block">
          <img
            :src="productData.imageURL"
            :alt="`Image of ${productData.name}`"
            class="h-full w-full object-cover object-center shadow-md"
          />
        </div>
        <div class="max-h-[550px] hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-h-2 aspect-w-3 overflow-hidden">
            <img
              :src="productData.imageGallery[0]"
              :alt="`Image of ${productData.name}`"
              class="h-full w-full object-cover object-center shadow-md"
            />
          </div>
          <div class="aspect-h-2 aspect-w-3 overflow-hidden shadow-md">
            <img
              :src="productData.imageGallery[1]"
              :alt="`Image of ${productData.name}`"
              class="h-full w-full object-cover object-center shadow-md"
            />
          </div>
        </div>
        <div
          class="max-h-[550px] aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden"
        >
          <img
            :src="productData.imageGallery[2]"
            :alt="`Image of ${productData.name}`"
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <!-- Product info -->
      <div
        class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-hovergreen lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-hovergreen sm:text-3xl">
            {{ productData.name }}
          </h1>
        </div>

        <!-- Price, options, and cart -->
        <div class="mt-12 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl tracking-tight text-hovergreen">
            {{ productData.price * selectedQuantity }} Ft
          </p>

          <!-- Quantity Selector and Add-to-Cart Button -->
          <div class="mt-4 flex items-center space-x-2 gap-[0.75rem]">
            <input
              v-model="selectedQuantity"
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              class="w-10 h-9 sm:h-10 border border-hovergreen text-center text-shadowgreen bg-ghostwhite"
            />
            <form @submit.prevent="addToCartClicked">
              <button
                type="submit"
                class="flex bg-shadowgreen shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-hovergreen transition duration-300"
              >
                Kosárba
              </button>
            </form>
          </div>
        </div>

        <div
          class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-hovergreen lg:pb-16 lg:pr-8 lg:pt-6"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-shadowgreen">
                {{ productData.description }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium text-hovergreen">Információk</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li class="text-shadowgreen">
                  Jelenlegi mennyiség: {{ productData.stockQuantity }} db
                </li>
                <li class="text-shadowgreen">
                  Elkészítési idő: {{ productData.preparationTime }} munkanap
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { addToCart } from '../cart.js'
import { ref, onMounted, defineProps } from 'vue'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.js'

const { productId } = defineProps(['productId']) // Extract the 'productId' prop from the component's props
const productData = ref(null) // Create a reactive reference to store product data
const productDocRef = doc(db, 'products', productId) // Reference to a specific document in Firestore

// Define selectedQuantity and initialize it with a default value of 1
const selectedQuantity = ref(1)

onMounted(async () => {
  // Execute when the component is mounted
  try {
    const productSnapshot = await getDoc(productDocRef) // Retrieve the product document from Firestore
    if (productSnapshot.exists()) {
      productData.value = productSnapshot.data() // Update productData with the retrieved product data
    } else {
      // Handle the case where the product doesn't exist
    }
  } catch (error) {
    // Handle any errors that may occur during data retrieval
  }
})

const addToCartClicked = () => {
  // Function to add the product to the cart
  addToCart(productData.value, selectedQuantity.value) // Call the addToCart function with the retrieved product data
}
</script>
