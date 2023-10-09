<template>
  <div class="bg-greygreen" id="products">
    <div class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:py-12">
      <h2
        class="text-2xl lg:text-4xl text-center font-bold tracking-tight text-hovergreen pb-3 sm:pb-4 lg:pb-6 relative mb-6 sm:mb-8 lg:mb-12"
      >
        Termékek
        <!-- Line Separator -->
        <span
          class="block w-16 mx-auto h-1 bg-hovergreen absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-1 sm:mb-2"
        ></span>
      </h2>
      <!-- Grid for displaying products -->
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <!-- Loop through products and display each product -->
        <div v-for="product in products" :key="product.id" class="group relative">
          <!-- Clickable product images with a link to the product page -->
          <a :href="getProductPageUrl(product.id)">
            <div
              class="aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 shadow-md"
            >
              <!-- Display the image of the product -->
              <img
                :src="product.imageSrc"
                :alt="product.imageAlt"
                class="object-cover object-center w-full h-full"
              />
            </div>
          </a>
          <div class="mt-4 flex justify-between">
            <div>
              <!-- Clickable product names with a link to the product page -->
              <h3 class="text-sm text-shadowgreen">
                <a :href="getProductPageUrl(product.id)">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
            </div>
            <!-- Display the product price -->
            <p class="text-sm font-medium text-hovergreen">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db } from '../firebase.js'
import { collection, onSnapshot } from 'firebase/firestore'

// Define a reactive variable to store product data
const products = ref([])

// Reference to the "products" collection in Firestore
const productDataRef = collection(db, 'products')

// Function to fetch and populate product data
const getProductsData = () => {
  // Set up a listener to react to changes in the "products" collection
  onSnapshot(productDataRef, (snapshot) => {
    products.value = snapshot.docs.map((doc) => {
      // Map Firestore document data to the desired format
      return {
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        price: doc.data().price,
        imageURL: doc.data().imageURL,
        category: doc.data().category,
        stockQuantity: doc.data().stockQuantity,
        preparationTime: doc.data().preparationTime
      }
    })
  })
}

// Function to generate the URL of the ProductPage for a specific product
const getProductPageUrl = (productId) => {
  // Return the URL of the ProductPage with the product's ID as a parameter
  return `/product/${productId}`
}

// Fetch products data when the component is mounted
onMounted(() => {
  getProductsData()
})
</script>
