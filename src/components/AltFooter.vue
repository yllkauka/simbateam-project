<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <router-link :to="{ name: 'Store Classes' }" class="exit-link">
          Exit and Go Back
        </router-link>

        <p class="copyrights">
          &copy; 2022 Kirkland Arts Center. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  @apply sticky top-full left-0 w-full bg-gray-800 text-white py-8 sm:py-10;
  .footer-content {
    @apply flex flex-col sm:flex-row items-center justify-between gap-y-4;
    .exit-link {
      @apply font-bold text-lg transition hover:opacity-70;
    }
    .copyrights {
      @apply text-sm;
    }
  }
}
</style>
