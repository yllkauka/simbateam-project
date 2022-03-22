<script setup>
defineProps(['steps']);
</script>

<template>
  <header>
    <div class="container">
      <div class="header-content">
        <div class="store-logo">
          <router-link :to="{ name: 'Store Classes' }">
            <img
              src="@/assets/images/canvas-logo.svg"
              alt="Kirkland arts center logo"
            />
          </router-link>
        </div>

        <ul class="creation-steps">
          <li
            :class="{
              'current-step': $route.name === step.routeActive,
            }"
            v-for="(step, index) in steps"
            :key="index"
            v-html="step.text"
          ></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
header {
  @apply border-b border-gray-200;
  .header-content {
    @apply flex flex-col gap-y-5 sm:flex-row md:items-center justify-between py-4 sm:py-5;
    .store-logo {
      img {
        @apply w-32 md:w-44 xl:w-[200px];
      }
    }
    .creation-steps {
      @apply flex items-center gap-x-10 justify-between sm:justify-start;
      li {
        @apply text-gray-400 transition xl:text-lg;
        &.current-step {
          @apply font-bold text-accent-2;
        }
      }
    }
  }
}
</style>
