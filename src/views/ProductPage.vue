<template>
  <div>
    <NavBar />
  </div>
  <div class="mt-14">
    <ProductDetails :productId="productId" />
  </div>
  <div>
    <FooterComponent />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import ProductDetails from '../components/ProductDetails.vue'
import { ref, onMounted, defineProps } from 'vue'
import { db } from '../firebase.js'
import { doc, getDoc } from 'firebase/firestore'

// Define the props that your component receives
const props = defineProps({
  productId: String // Define the expected type of the prop
})

// Define a reactive variable to store product data
const productData = ref(null)

// Reference to the Firestore document for the specified product
const productDocRef = doc(db, 'products', props.productId)

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
