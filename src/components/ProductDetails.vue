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
          <p class="text-3xl tracking-tight text-hovergreen">{{ productData.price }} Ft</p>

          <form class="mt-10">
            <button
              type="submit"
              class="mt-10 flex bg-shadowgreen shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-hovergreen transition duration-300"
            >
              Kosárba
            </button>
          </form>
        </div>

        <div
          class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-hovergreen lg:pb-16 lg:pr-8 lg:pt-6"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-shadowgreen">{{ productData.description }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium text-hovergreen">Információk</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li class="text-shadowgreen">Category: {{ productData.category }}</li>
                <li class="text-shadowgreen">Stock Quantity: {{ productData.stockQuantity }} db</li>
                <li class="text-shadowgreen">
                  Preparation Time: {{ productData.preparationTime }} munkanap
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
import { ref, onMounted, defineProps } from 'vue'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.js' // Import the 'db' variable from the Firebase setup

const { productId } = defineProps(['productId']) // Received from the router via props

// Define a reactive variable to store product data
const productData = ref(null)

// Reference to the Firestore document for the specified product
const productDocRef = doc(db, 'products', productId)

// Fetch and populate product data when the component is mounted
onMounted(async () => {
  try {
    // Get a snapshot of the product document from Firestore
    const productSnapshot = await getDoc(productDocRef)

    // Check if the product document exists
    if (productSnapshot.exists()) {
      // Map Firestore document data to the productData variable
      productData.value = productSnapshot.data()
    } else {
      // Handle the case where the product doesn't exist
    }
  } catch (error) {
    // Handle any errors that may occur during data retrieval
  }
})
</script>
