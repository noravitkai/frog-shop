<template>
  <div class="bg-frost">
    <div class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:py-12">
      <h2
        class="text-2xl lg:text-4xl text-center font-bold tracking-tight text-gray-900 pb-4 sm:pb-8 lg:pb-12"
      >
        Kapcsolat
      </h2>
      <!-- Two-column grid for form and contact information -->
      <div
        class="grid max-w-2xl grid-cols-1 gap-6 px-4 lg:grid-cols-2 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <!-- Contact form -->
        <form action="" method="POST">
          <!-- Form container -->
          <div
            class="mx-auto max-w-xl rounded-lg bg-frost border-solif border-[0.075rem] border-serpentine p-4 lg:max-w-lg"
          >
            <!-- Form fields -->
            <div class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label for="name" class="block text-sm font-medium leading-6 text-black">Név</label>
                <div class="mt-2.5">
                  <input
                    type="text"
                    placeholder="Kérlek, add meg a neved."
                    name="name"
                    id="name"
                    autocomplete="given-name"
                    class="text-gray-400 ring-serpentine bg-frost placeholder:text-gray-400 block w-full rounded-lg border-0 px-3.5 py-2 shadow-inner ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-serpentine sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-medium leading-6 text-black"
                  >Email</label
                >
                <div class="mt-2.5">
                  <input
                    type="email"
                    placeholder="Kérlek, add meg az email címed."
                    name="email"
                    id="email"
                    autocomplete="email"
                    class="text-gray-400 ring-serpentine bg-frost placeholder:text-gray-400 block w-full rounded-lg border-0 px-3.5 py-2 shadow-inner ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-serpentine sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="phone" class="block text-sm font-medium leading-6 text-black"
                  >Telefonszám</label
                >
                <div class="mt-2.5">
                  <input
                    type="tel"
                    placeholder="Kérlek, add meg a telefonszámod."
                    name="phone"
                    id="phone"
                    autocomplete="tel"
                    class="text-gray-400 ring-serpentine bg-frost placeholder:text-gray-400 block w-full rounded-lg border-0 px-3.5 py-2 shadow-inner ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-serpentine sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-medium leading-6 text-black"
                  >Üzenet</label
                >
                <div class="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Írj üzenetet."
                    rows="4"
                    class="text-gray-400 ring-serpentine bg-frost placeholder:text-gray-400 block w-full rounded-lg border-0 px-3.5 py-2 shadow-inner ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-serpentine sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <!-- Submit button -->
            <div class="mt-6 flex justify-center">
              <button
                class="bg-serpentine text-white py-2 px-6 rounded-full text-sm lg:text-base hover:bg-ivy transition duration-300"
              >
                Küldés
              </button>
            </div>
          </div>
        </form>
        <!-- Contact information container -->
        <div class="relative lg:static lg:flex lg:items-start">
          <div class="lg:max-max-w-lg mx-auto flex max-w-xl lg:mx-0">
            <div>
              <h3 class="text-xl lg:text-2xl font-semibold text-black">Kérdésed van?</h3>
              <p class="mb-6 mt-6 text-base text-black">
                Bátran lépj velem kapcsolatba az alábbi elérhetőségeim egyikén, vagy küldj üzenetet
                a kapcsolat űrlapon keresztül. Inspirációért pedig kövess a közösségi média
                oldalaimon!
              </p>
              <!-- Contact details list -->
              <dl class="space-y-4 text-base text-black">
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Email</span>
                    <EnvelopeIcon
                      class="h-[1.65rem] w-[1.35rem] text-serpentine"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <span class="font-medium text-blue">Email:</span>
                    <br />
                    <a class="hover:text-ivy" href="mailto:hello@example.com"
                      >frogdealer@gmail.com</a
                    >
                  </dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Instagram</span>
                    <CameraIcon class="h-[1.65rem] w-[1.35rem] text-blue" aria-hidden="true" />
                  </dt>
                  <dd>
                    <span class="font-medium text-blue">Instagram:</span>
                    <br />
                    <a class="hover:text-ivy" href="instagram.com">@frogdealer</a>
                  </dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Pinterest</span>
                    <ChatBubbleOvalLeftEllipsisIcon
                      class="h-[1.65rem] w-[1.35rem] text-blue"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <span class="font-medium text-blue">Facebook:</span>
                    <br />
                    <a class="hover:text-ivy" href="facebook.com">Frog Dealer</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon, CameraIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/vue/24/outline'
</script>
