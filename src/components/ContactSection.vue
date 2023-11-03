<template>
  <div class="bg-ghostwhite">
    <div class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:py-12">
      <h2
        class="text-2xl lg:text-4xl text-center font-bold tracking-tight text-hovergreen pb-3 sm:pb-4 lg:pb-6 relative mb-6 sm:mb-8 lg:mb-12"
      >
        Kapcsolat
        <!-- Line Separator -->
        <span
          class="block w-16 mx-auto h-1 bg-hovergreen absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-1 sm:mb-2"
        ></span>
      </h2>
      <!-- Two-column grid for form and contact information -->
      <div class="grid max-w-2xl grid-cols-1 gap-6 lg:grid-cols-2 lg:max-w-7xl">
        <!-- Contact form -->
        <form action="https://getform.io/f/e9435c3e-d46c-4daa-b986-d0640c3b5d34" method="POST">
          <!-- Form container -->
          <div
            class="max-w-xl border-solid border-[0.075rem] border-hovergreen p-4 lg:max-w-[38rem] shadow-md"
          >
            <!-- Form fields -->
            <div class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label for="name" class="block text-sm font-medium leading-6 text-hovergreen"
                  >Név</label
                >
                <div class="mt-2.5">
                  <input
                    type="text"
                    placeholder="Kérlek, add meg a neved."
                    name="name"
                    id="name"
                    autocomplete="given-name"
                    class="text-shadowgreen shadow-md ring-hovergreen placeholder:text-shadowgreen block w-full border-0 px-3.5 py-2 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-hovergreen sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-medium leading-6 text-hovergreen"
                  >Email</label
                >
                <div class="mt-2.5">
                  <input
                    type="email"
                    placeholder="Kérlek, add meg az email címed."
                    name="email"
                    id="email"
                    autocomplete="email"
                    class="text-shadowgreen shadow-md ring-hovergreen placeholder:text-shadowgreen block w-full border-0 px-3.5 py-2 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-hovergreen sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="phone" class="block text-sm font-medium leading-6 text-hovergreen"
                  >Telefonszám</label
                >
                <div class="mt-2.5">
                  <input
                    type="tel"
                    placeholder="Kérlek, add meg a telefonszámod."
                    name="phone"
                    id="phone"
                    autocomplete="tel"
                    class="text-shadowgreen shadow-md ring-hovergreen placeholder:text-shadowgreen block w-full border-0 px-3.5 py-2 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-hovergreen sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-medium leading-6 text-hovergreen"
                  >Üzenet</label
                >
                <div class="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Írj üzenetet."
                    rows="4"
                    class="text-shadowgreen shadow-md ring-hovergreen placeholder:text-shadowgreen block w-full border-0 px-3.5 py-2 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-hovergreen sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <!-- Submit button -->
            <div class="mt-6 flex justify-center">
              <button
                class="bg-shadowgreen shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-hovergreen transition duration-300"
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
              <h3 class="text-xl lg:text-2xl font-semibold text-hovergreen">Kérdésed van?</h3>
              <p class="mb-6 mt-6 text-base text-shadowgreen">
                Bátran lépj velem kapcsolatba az alábbi elérhetőségeim egyikén, vagy küldj üzenetet
                a kapcsolat űrlapon keresztül. Inspirációért pedig kövess a közösségi média
                oldalaimon!
              </p>
              <!-- Contact details list -->
              <dl class="space-y-4 text-base text-shadowgreen">
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Email</span>
                    <EnvelopeIcon
                      class="h-[1.65rem] w-[1.35rem] text-hovergreen"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <span class="font-medium text-shadowgreen">Email:</span>
                    <br />
                    <a
                      class="group hover:text-shadowgreen relative inline-block"
                      href="mailto:hello@example.com"
                    >
                      frogdealer@gmail.com
                      <!-- Underline Effect -->
                      <span
                        class="absolute inset-x-0 bottom-0 h-0.5 bg-hovergreen transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                      ></span>
                    </a>
                  </dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Instagram</span>
                    <CameraIcon
                      class="h-[1.65rem] w-[1.35rem] text-hovergreen"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <span class="font-medium text-shadowgreen">Instagram:</span>
                    <br />
                    <a
                      class="group hover:text-shadowgreen relative inline-block"
                      href="instagram.com"
                    >
                      @frogdealer
                      <!-- Underline Effect -->
                      <span
                        class="absolute inset-x-0 bottom-0 h-0.5 bg-hovergreen transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                      ></span>
                    </a>
                  </dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Pinterest</span>
                    <ChatBubbleOvalLeftEllipsisIcon
                      class="h-[1.65rem] w-[1.35rem] text-hovergreen"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <span class="font-medium text-shadowgreen">Facebook:</span>
                    <br />
                    <a
                      class="group hover:text-shadowgreen relative inline-block"
                      href="facebook.com"
                    >
                      Frog Dealer
                      <!-- Underline Effect -->
                      <span
                        class="absolute inset-x-0 bottom-0 h-0.5 bg-hovergreen transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                      ></span>
                    </a>
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
