// Import Vue Router functions for creating and configuring routes
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase'

// Import the components and views used in the routes
import HomePage from '../views/HomePage.vue'
import ProductPage from '../views/ProductPage.vue'
import ProductDetails from '../components/ProductDetails.vue'
import AboutPage from '../views/AboutPage.vue'
import FAQPage from '../views/FAQPage.vue'
import CheckoutPage from '../views/CheckoutPage.vue'
import LoginComponent from '../components/LoginComponent.vue'
import AdminDashboard from '../components/AdminDashboard.vue'

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
    },
    {
      // Route for the about page
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      // Route for the FAQ page
      path: '/faq',
      name: 'faq',
      component: FAQPage
    },
    {
      // Route for the login form
      path: '/admin',
      name: 'admin',
      component: LoginComponent
    },
    {
      // Route for the admin dashboard
      path: '/dashboard',
      name: 'dashboard',
      component: AdminDashboard
    }
  ]
})

// Navigation Guard to check if the user is authenticated
router.beforeEach((to, from, next) => {
  if (to.name === 'dashboard' && !auth.currentUser) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
