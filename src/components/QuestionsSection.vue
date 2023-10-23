<template>
  <div class="bg-ghostwhite">
    <div class="mx-auto max-w-2xl px-4 pt-4 sm:px-6 sm:pt-8 lg:max-w-7xl lg:px-8 lg:pt-12 pb-0.5">
      <h2
        class="text-2xl lg:text-4xl text-center font-bold tracking-tight text-hovergreen pb-3 sm:pb-4 lg:pb-6 relative mb-6 sm:mb-8 lg:mb-12"
      >
        Kérdésed van?
        <!-- Line Separator -->
        <span
          class="block w-16 mx-auto h-1 bg-hovergreen absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-1 sm:mb-2"
        ></span>
      </h2>
      <p class="mt-2 text-base leading-7 text-hovergreen font-medium">
        Olvasd el az alábbi gyakran felmerülő kérdéseket, hátha kérdésedre azonnal választ kapsz. Ha
        mégsem, bátran vedd fel velem a kapcsolatot a kapcsolati űrlapon keresztül, vagy keress
        elérhetőségeim egyikén.
      </p>

      <div v-for="(faq, index) in faqs" :key="index" class="my-4">
        <button
          @click="toggleAnswer(index)"
          class="w-full bg-shadowgreen shadow-md text-ghostwhite py-2 px-6 text-sm flex justify-between items-center hover:bg-hovergreen transition duration-300 drop-shadow-2xl"
        >
          <span class="text-left">{{ faq.question }}</span>
          <ChevronUpIcon v-if="faq.open" class="h-[1.65rem] w-[1.35rem] text-ghostwhite" />
          <ChevronDownIcon v-else class="h-[1.65rem] w-[1.35rem] text-ghostwhite" />
        </button>
        <div v-if="faq.open" class="bg-greygreen shadow-md text-hovergreen text-sm py-2 px-6">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const faqs = ref([
  {
    question: 'Mennyi idő kell egy termék elkészítéséhez?',
    answer:
      'Ez függ a terméktől, de egy kulcstartó elkészítése legalább egy nap, míg egy horgolt táska elkészítése akár 4-5 napot is igénybe vehet.'
  },
  {
    question: 'Meddig tart, mire kézhez kapom a rendelésemet?',
    answer:
      'Amennyiben a rendelésed csak egy-két kisebb termékből áll, valószínűleg 5-6 munkanapon belül megérkezik; ha a rendelésed azonban több terméket tartalmaz, ez az idő 10-15 nap is lehet, mivel a termékek 100%-ban kézzel készülnek.'
  },
  {
    question: 'Mit tegyek, ha a termék sérült, vagy nem olyan, mint amit rendeltem?',
    answer:
      'Amennyiben a termék nem felel meg az igényeidnek, kérünk, lépj velünk kapcsolatba a frogdealer@gmail.com email címen vagy küldj üzenetet lejjebb, és mi minél hamarabb válaszolunk!'
  },
  {
    question: 'Hogyan fizethetek?',
    answer: 'Jelenleg banki átutalással fizethetsz, de dolgozunk az online fizetési módokon is!'
  }
])

const toggleAnswer = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}
</script>
