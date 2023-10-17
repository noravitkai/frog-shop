import { ref } from 'vue'

// Create a reactive reference to store the cart items
const cart = ref([])

// Function to add a product to the cart
const addToCart = (product) => {
  // Create a new cart item based on the product with an initial quantity of 1
  const item = { ...product, quantity: 1 }
  // Add the item to the cart
  cart.value.push(item)
}

// Function to remove a product from the cart
const removeFromCart = (product) => {
  // Find the index of the product in the cart based on its ID
  const index = cart.value.findIndex((item) => item.id === product.id)
  // If the product is found in the cart, remove it
  if (index !== -1) {
    cart.value.splice(index, 1)
  }
}

// Export the cart, addToCart, and removeFromCart functions for use in other components
export { cart, addToCart, removeFromCart }
