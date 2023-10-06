<template>
  <footer class="bg-spring">
    <!-- Container for the footer content -->
    <div class="mx-auto w-full max-w-7xl p-6 md:py-8">
      <!-- Flex container for alignment and spacing -->
      <div
        class="flex flex-col items-center justify-center gap-0 sm:justify-between sm:gap-4 md:flex-row md:gap-0"
      >
        <!-- Logo or site branding linked to the navbar -->
        <a href="#navbar" class="mb-4 flex items-center sm:mb-0">
          <img src="../assets/happy-frog.svg" class="mr-3 h-10" alt="Békás Műhely" />
        </a>
        <!-- Sitemap with navigation links -->
        <ul class="mb-6 flex flex-wrap items-center text-sm font-medium text-black sm:mb-0">
          <li>
            <a href="#home" class="mr-4 hover:text-ivy md:mr-6">Home</a>
          </li>
          <li>
            <a href="#about" class="mr-4 hover:text-ivy md:mr-6">About</a>
          </li>
          <li>
            <a href="#faq" class="mr-4 hover:text-ivy md:mr-6">FAQ</a>
          </li>
        </ul>
      </div>
      <!-- Horizontal line separator -->
      <hr class="my-6 border-ivy sm:mx-auto lg:my-8" />
      <span class="block text-center text-sm text-black">© 2023 All Rights Reserved.</span>
    </div>
  </footer>
</template>
