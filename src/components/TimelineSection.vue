<template>
  <div class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:py-12">
    <h2
      class="text-2xl lg:text-4xl text-center font-bold tracking-tight text-hovergreen pb-3 sm:pb-4 lg:pb-6 relative mb-6 sm:mb-8 lg:mb-12"
    >
      Időtálló termékek
      <!-- Line Separator -->
      <span
        class="block w-16 mx-auto h-1 bg-hovergreen absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-1 sm:mb-2"
      ></span>
    </h2>
    <p class="text-left sm:text-center text-shadowgreen pb-12">
      Számunkra mindig fontos, hogy a termékeink ne csak a polc alján porosodjanak, hanem a
      mindennapjaidban hasznos szerepet töltsenekbe! Szeretnénk, ha mindig mosolyt és boldogságot
      hoznának az életedbe és veled maradnának minél tovább!
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-6 sm:gap-y-0 gap-y-6">
      <div class="col-span-1 relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="bg-hovergreen p-2 rounded-full">
            <LightBulbIcon class="h-6 w-6 text-ghostwhite" />
          </div>
          <div class="hidden sm:flex w-full bg-hovergreen h-0.5"></div>
        </div>
        <div class="mt-3 sm:pr-8">
          <h3 class="text-base font-semibold text-hovergreen">Tudatos készítés</h3>
          <p class="text-base text-shadowgreen mt-2">
            Minden termék, amit nálunk vásárolhatsz hosszú és átfogó tervezési folyamat után kerül
            megvalósításra mind a minőséget mind az alapanyagokat figyelembevéve.
          </p>
        </div>
      </div>
      <div class="col-span-1 relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="bg-hovergreen p-2 rounded-full">
            <TruckIcon class="h-6 w-6 text-ghostwhite" />
          </div>
          <div class="hidden sm:flex w-full bg-hovergreen h-0.5"></div>
        </div>
        <div class="mt-3 sm:pr-8">
          <h3 class="text-base font-semibold text-hovergreen">Gyors és megbízható szállítás</h3>
          <p class="text-base text-shadowgreen mt-2">
            A rendelésed külső partnereken keresztül kerülnek kiszállításra, hogy gyorsan és
            biztonságosan eljussanak hozzád, a lehető legkörnyezetbarátabb módon.
          </p>
        </div>
      </div>
      <div class="col-span-1 relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="bg-hovergreen p-2 rounded-full">
            <FaceSmileIcon class="h-6 w-6 text-ghostwhite" />
          </div>
          <div class="hidden sm:flex w-full bg-hovergreen h-0.5"></div>
        </div>
        <div class="mt-3 sm:pr-8">
          <h3 class="text-base font-semibold text-hovergreen">Időtlen design</h3>
          <p class="text-base text-shadowgreen mt-2">
            A termékeinket úgy terveztük és készítjük, hogy minél több ideig veled maradhassanak jó
            állapotban, vigyázva rád és a természetre is!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { TruckIcon, LightBulbIcon, FaceSmileIcon } from '@heroicons/vue/24/outline'
</script>
