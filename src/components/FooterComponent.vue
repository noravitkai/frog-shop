<template>
  <footer class="bg-greygreen">
    <!-- Container for the footer content -->
    <div class="mx-auto w-full max-w-7xl p-6 md:py-8">
      <!-- Flex container for alignment and spacing -->
      <div
        class="flex flex-col items-center justify-center gap-0 sm:justify-between sm:gap-4 md:flex-row md:gap-0"
      >
        <!-- Logo or site branding linked to the navbar -->
        <router-link to="/" class="mb-4 flex items-center sm:mb-0">
          <img src="../assets/happy-frog.svg" class="mr-3 h-10" alt="Békás Műhely" />
        </router-link>
        <!-- Sitemap with navigation links -->
        <ul class="mb-6 flex flex-wrap items-center text-sm font-medium text-hovergreen sm:mb-0">
          <li>
            <router-link to="/" class="mr-4 md:mr-6 group relative py-1">
              Főoldal
              <span
                class="absolute inset-x-0 bottom-0 h-0.5 bg-hovergreen transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              ></span>
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="mr-4 md:mr-6 group relative py-1">
              Rólunk
              <span
                class="absolute inset-x-0 bottom-0 h-0.5 bg-hovergreen transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              ></span>
            </router-link>
          </li>
          <li>
            <router-link to="/faq" class="mr-4 md:mr-6 group relative py-1">
              GYIK
              <span
                class="absolute inset-x-0 bottom-0 h-0.5 bg-hovergreen transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              ></span>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- Horizontal line separator -->
      <hr class="my-6 border-hovergreen sm:mx-auto lg:my-8" />
      <span class="block text-center text-sm text-hovergreen">© 2023 Minden jog fenntartva.</span>
    </div>
  </footer>
</template>
