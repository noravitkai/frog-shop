<template>
  <div class="bg-ghostwhite min-h-screen flex justify-center items-center">
    <!-- Login Form -->
    <form @submit.prevent="login" class="max-w-md w-full p-4 space-y-4 bg-greygreen shadow-md">
      <div>
        <label for="email" class="block text-sm sm:text-base font-medium text-hovergreen"
          >Email:</label
        >
        <input
          type="email"
          id="email"
          v-model="email"
          required
          class="w-full border py-2 px-3 text-sm sm:text-base focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
        />
      </div>
      <div>
        <label for="password" class="block text-sm sm:text-base font-medium text-hovergreen"
          >Jelszó:</label
        >
        <input
          type="password"
          id="password"
          v-model="password"
          required
          class="w-full border py-2 px-3 text-sm sm:text-base focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
        />
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="bg-shadowgreen shadow-md text-ghostwhite py-2 px-6 text-sm sm:text-base lg:text-base hover:bg-hovergreen transition duration-300"
        >
          Bejelentkezés
        </button>
      </div>
      <p v-if="errorMessage" class="text-hovergreen text-sm">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInAdmin } from '../authService'

let email = ref('') // A reference for storing the email input value
let password = ref('') // A reference for storing the password input value
const router = useRouter() // Vue router for navigation
const errorMessage = ref('') // A reference for displaying error messages

const login = async () => {
  try {
    // Attempt to sign in with the provided email and password
    await signInAdmin(email.value, password.value)
    // Redirect to the 'dashboard' route upon successful login
    router.push({ name: 'dashboard' })
  } catch (error) {
    console.error(error)
    // Display an error message if login fails
    errorMessage.value = 'Sikertelen bejelentkezés. Kérlek, ellenőrizd bejelentkezési adataidat.'
  }
}
</script>
