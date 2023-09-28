<template>
  <div>
    <!-- Render the ProductDetails component with productData as a prop -->
    <ProductDetails :productData="productData" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { db } from '../firebase.js'
import { doc, getDoc } from 'firebase/firestore'
import ProductDetails from '../components/ProductDetails.vue'

export default {
  props: {
    productId: String // Define productId as a prop
  },
  components: {
    ProductDetails // Register the ProductDetails component
  },
  setup(props) {
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

    return {
      productData
    }
  }
}
</script>
