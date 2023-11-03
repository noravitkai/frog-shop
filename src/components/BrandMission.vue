<template>
  <div class="bg-greygreen">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 sm:grid-cols-2 items-center gap-x-14 gap-y-16 px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-12"
    >
      <div>
        <h2
          class="text-2xl lg:text-4xl text-center font-bold tracking-tight text-hovergreen pb-3 sm:pb-4 lg:pb-6 relative mb-6 sm:mb-8 lg:mb-12"
        >
          Értékeink
          <!-- Line Separator -->
          <span
            class="block w-16 mx-auto h-1 bg-hovergreen absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-1 sm:mb-2"
          ></span>
        </h2>
        <p class="text-left text-shadowgreen">
          <!-- Values Introduction -->
          Nekünk nagyon fontos, hogy a vásárlóink tudják, hogy a termék, amit kézhezkapnak, milyen
          forrásoból származik, hogyan készül, és milyen úton történik a szállítása.
        </p>
        <dl class="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div v-for="value in values" :key="value.heading" class="border-t border-gray-200 pt-4">
            <!-- Value Name -->
            <dt class="font-medium text-base text-hovergreen">{{ value.heading }}</dt>
            <!-- Value Description -->
            <dd class="mt-2 text-base text-shadowgreen">{{ value.description }}</dd>
          </div>
        </dl>
      </div>
      <!-- Image Slider -->
      <div class="relative w-full max-w-xl pt-[100%]">
        <img
          :src="imageSources[currentImageIndex]"
          :alt="`Image ${currentImageIndex + 1}`"
          class="w-full h-full object-cover absolute top-0 left-0"
        />
        <!-- Slider Buttons -->
        <div class="w-full">
          <button
            @click="prevImage"
            class="slider-button left-button absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
          >
            <ChevronLeftIcon
              class="h-8 w-8 text-hovergreen bg-greygreen p-1.5 hover:bg-shadowgreen hover:text-ghostwhite rounded-full ease-in-out duration-500"
            />
          </button>
          <button
            @click="nextImage"
            class="slider-button right-button absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
          >
            <ChevronRightIcon
              class="h-8 w-8 text-hovergreen bg-greygreen p-1.5 hover:bg-shadowgreen hover:text-ghostwhite rounded-full ease-in-out duration-500"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Image slider imports
import { ref, onBeforeUnmount } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import basketImage from '@/assets/basket.jpg'
import yarnImage from '@/assets/yarn.jpg'
import knittingImage from '@/assets/knitting.jpg'
import sewImage from '@/assets/sew.jpg'
import materialsImage from '@/assets/materials.jpg'

const currentImageIndex = ref(0)
const imageSources = ref([basketImage, yarnImage, knittingImage, sewImage, materialsImage]) // Image sources array
const values = ref([
  // Values array with headings and descriptions
  {
    heading: 'Környezettudatosság',
    description: 'Felelős forrásokból származó fonalak és alapanyagok'
  },
  { heading: 'Etikus készítés', description: '100%-ban kézzel készített, egyedi termékek' },
  {
    heading: 'Megbízható szállítás',
    description: 'Megbízható partnereken keresztül, mint például GLS'
  },
  { heading: 'Kis vállalkozás', description: 'Felelősségteljes és megbízható alkalmazottak' }
])

// Function to display next image after click
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % imageSources.value.length
}

// Function to display previous image after click
const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + imageSources.value.length) % imageSources.value.length
}

// Function to start displaying images in a loop with 4 seconds
const startImageSlider = () => {
  const sliderInterval = setInterval(nextImage, 4000)
  onBeforeUnmount(() => {
    clearInterval(sliderInterval)
  })
}

startImageSlider()
</script>
