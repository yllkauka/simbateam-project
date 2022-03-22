<script setup>
import { ref } from 'vue';

import AltHeader from '@/components/AltHeader.vue';

const creationSteps = ref([
  {
    text: '1. Account <span class="hidden sm:inline">Info</span>',
    routeActive: 'Create: Account Info',
  },
  {
    text: '2. Attendee <span class="hidden sm:inline">Profiles</span>',
    routeActive: 'Create: Attendee Profiles',
  },
  {
    text: '3. Payment <span class="hidden sm:inline">Methods</span>',
    routeActive: 'Create: Payment Methods',
  },
]);
</script>

<template>
  <section class="create-new-account">
    <AltHeader :steps="creationSteps" />

    <div class="container">
      <RouterView />
    </div>
  </section>
</template>

<style>
@import url('./index.pcss');
</style>
