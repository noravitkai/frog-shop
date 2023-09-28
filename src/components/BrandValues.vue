<template>
  <div class="bg-spring">
    <div class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:py-12">
      <h2
        class="text-2xl lg:text-4xl text-center font-bold tracking-tight text-gray-900 pb-4 sm:pb-8 lg:pb-12"
      >
        Értékek
      </h2>
      <!-- Grid for displaying values -->
      <dl
        class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-12 lg:max-w-none lg:grid-cols-3 lg:gap-y-16"
      >
        <!-- Loop through each value -->
        <div v-for="value in values" :key="value.heading" class="text-center">
          <!-- Icon container -->
          <div class="flex items-center justify-center pb-4 mx-auto rounded-lg">
            <!-- Display the icon of the value -->
            <component :is="value.icon" class="h-10 w-10 text-serpentine" aria-hidden="true" />
          </div>
          <!-- Value heading -->
          <dt class="mt-2 text-base font-semibold leading-7 text-serpentine">
            {{ value.heading }}
          </dt>
          <!-- Value description -->
          <dd class="mt-2 text-base leading-7 text-gray-900">{{ value.description }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { ScissorsIcon, StarIcon, GlobeEuropeAfricaIcon } from '@heroicons/vue/24/outline'

// Define the values data
const values = [
  {
    heading: 'Kézműves',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: ScissorsIcon
  },
  {
    heading: 'Egyedi',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: StarIcon
  },
  {
    heading: 'Környezetbarát',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: GlobeEuropeAfricaIcon
  }
]
</script>
