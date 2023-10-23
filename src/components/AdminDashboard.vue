<template>
  <div class="bg-ghostwhite">
    <div
      class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:py-12 flex flex-col justify-center items-center"
    >
      <h2
        class="text-2xl lg:text-4xl text-center font-bold tracking-tight text-hovergreen pb-3 sm:pb-4 lg:pb-6 relative mb-6 sm:mb-8 lg:mb-12"
      >
        Szerkesztés
        <!-- Line Separator -->
        <span
          class="block w-16 mx-auto h-1 bg-hovergreen absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-1 sm:mb-2"
        ></span>
      </h2>
      <button
        @click="logout"
        class="bg-shadowgreen shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-hovergreen transition duration-300"
      >
        Kijelentkezés
      </button>
    </div>
  </div>
</template>

<script setup>
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = async () => {
  try {
    const auth = getAuth()
    await signOut(auth)
    router.push({ name: 'admin' })
  } catch (error) {
    console.error(error)
  }
}
</script>
