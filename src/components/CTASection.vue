<template>
  <!-- Main container with flex layout -->
  <div class="flex flex-col lg:flex-row items-center justify-center bg-greygreen">
    <!-- Column with an image -->
    <div class="w-full lg:w-1/2 order-2 lg:order-1">
      <img
        src="src/assets/carousel01.jpg"
        alt="Frog Shop"
        class="w-full h-auto shadow-md"
        ref="imageRef"
      />
    </div>

    <!-- Column with textual content -->
    <div
      class="w-full lg:w-1/2 px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:py-12 flex items-center order-1 lg:order-2"
    >
      <div class="text-center">
        <h2
          class="text-2xl lg:text-4xl font-bold tracking-tight text-hovergreen pb-2 sm:pb-4 lg:pb-6 relative mb-3 sm:mb-4 lg:mb-6"
        >
          Történetünk
          <span
            class="block w-16 mx-auto h-1 bg-hovergreen absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-1 sm:mb-2"
          ></span>
        </h2>
        <p class="text-center text-shadowgreen">
          Kis családi vállalkozásunkat 2022-ben alapítottuk, és azóta is folyamatosan fejlődünk. A
          termékeinket a saját otthonunkban készítjük, így garantáljuk a minőséget és a tartósságot.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const imageRef = ref(null) // Reference to the image element
const imageHeight = ref(0) // Initialize image height to 0

onMounted(() => {
  if (imageRef.value) {
    // Calculate and update the image height when the component is mounted
    imageHeight.value = imageRef.value.clientHeight
  }
})
</script>
