<script setup>
import { ref } from 'vue';

import AltHeader from '@/components/AltHeader.vue';

const confirmSteps = ref([
  {
    text: '1. <span class="hidden sm:inline">Review </span>Cart',
    routeActive: 'Checkout: Review Cart',
  },
  {
    text: '2. <span class="hidden sm:inline">Add</span> Payment <span class="hidden sm:inline">Info</span>',
    routeActive: 'Checkout: Payment Info',
  },
  {
    text: '3. Confirmation',
    routeActive: 'Checkout: Confirmation',
  },
]);
</script>

<template>
  <div class="order-checkout">
    <AltHeader :steps="confirmSteps" />

    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style>
@import url('./index.pcss');
</style>
