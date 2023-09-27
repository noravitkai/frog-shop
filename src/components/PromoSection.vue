<template>
  <!-- Main container for the component -->
  <div class="relative h-[80vh] overflow-hidden">
    <!-- Swiper Slider for the carousel -->
    <swiper
      :modules="modules"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      class="h-full"
    >
      <swiper-slide>
        <img
          src="@/assets/carousel01.jpg"
          alt="Slide 1"
          class="w-full h-full object-cover opacity-60"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="@/assets/carousel02.jpg"
          alt="Slide 2"
          class="w-full h-full object-cover opacity-60"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="@/assets/carousel03.jpg"
          alt="Slide 3"
          class="w-full h-full object-cover opacity-60"
        />
      </swiper-slide>
    </swiper>
    <!-- Overlay content with heading, subheading, and CTA button -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center text-black relative z-10">
        <h1 class="text-4xl lg:text-6xl font-bold tracking-tight mb-4">Békás Műhely</h1>
        <p class="text-lg lg:text-xl mb-6">Kézműves. Vagány. Környezetbarát.</p>
        <button
          class="bg-serpentine text-white py-2 px-6 rounded-full text-sm lg:text-base hover:bg-ivy transition duration-300"
        >
          Termékek
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// Import necessary libraries and components for Swiper
import SwiperClass, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// Import CSS styles for Swiper and its Pagination component
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    // Configure and use Swiper plugins
    SwiperClass.use([Pagination, Autoplay])
    // Define and return the plugins to be used in the Swiper component
    return {
      modules: [Pagination, Autoplay]
    }
  }
}
</script>
