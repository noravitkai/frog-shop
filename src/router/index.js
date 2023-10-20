// Import Vue Router functions for creating and configuring routes
import { createRouter, createWebHistory } from 'vue-router'

// Import the components and views used in the routes
import HomePage from '../views/HomePage.vue'
import ProductPage from '../views/ProductPage.vue'
import ProductDetails from '../components/ProductDetails.vue'
import CheckoutPage from '../views/CheckoutPage.vue'

// Create a Vue Router instance and define the routes
const router = createRouter({
  // Configure the router to use web history mode with the base URL
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Route for the home page
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      // Dynamic route for displaying a product page
      path: '/product/:productId',
      name: 'product-page',
      component: ProductPage,
      props: (route) => ({ productId: route.params.productId }),
      children: [
        {
          path: '',
          name: 'product-details',
          component: ProductDetails,
          props: true
        }
      ]
    },
    {
      // Route for the checkout page
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPage
    }
  ]
})

export default router // Export the configured Vue Router instance
