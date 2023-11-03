<template>
  <div class="bg-ghostwhite">
    <div class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:py-12">
      <h2
        class="text-2xl lg:text-4xl text-center font-bold tracking-tight text-hovergreen pb-3 sm:pb-4 lg:pb-6 relative mb-6 sm:mb-8 lg:mb-12"
      >
        Értékek
        <!-- Line Separator -->
        <span
          class="block w-16 mx-auto h-1 bg-hovergreen absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-1 sm:mb-2"
        ></span>
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
            <component :is="value.icon" class="h-10 w-10 text-hovergreen" aria-hidden="true" />
          </div>
          <!-- Value heading -->
          <dt class="mt-2 text-base font-semibold leading-7 text-hovergreen">
            {{ value.heading }}
          </dt>
          <!-- Value description -->
          <dd class="mt-2 text-base leading-7 text-shadowgreen">
            {{ value.description }}
          </dd>
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
      'Minden termékünk kézzel készül, így garantáljuk a minőséget és a tartósságot vásárlóink számára, hogy termékeinket ne kelljen évente cserélni!',
    icon: ScissorsIcon
  },
  {
    heading: 'Egyedi',
    description:
      'A különböző színek és méretek széles választékával biztosítjuk, hogy mindenki megtalálja a számára legmegfelelőbb terméket.',
    icon: StarIcon
  },
  {
    heading: 'Környezetbarát',
    description:
      'Odafigyelünk, hogy az alapanyagok honnan származnak, és hogy a termékeinket újra lehessen hasznosítani.',
    icon: GlobeEuropeAfricaIcon
  }
]
</script>
