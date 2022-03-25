<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

import StoreHeader from './components/StoreHeader/index.vue';
import StoreFooter from './components/StoreFooter.vue';

import AltFooter from './components/AltFooter.vue';

const removeDefaultHeader = computed(() => {
  if (route.matched && route.matched.length) {
    if (
      // route.matched[0].name === 'Create: index' ||
      route.matched[0].name === 'Checkout: index'
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});

onMounted(() => {
  store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth);
  window.addEventListener('resize', () => {
    store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth);
  });
});
</script>

<template>
  <StoreHeader v-if="!removeDefaultHeader" />

  <RouterView />

  <StoreFooter v-if="!removeDefaultHeader" />
  <AltFooter v-else />
</template>

<style lang="postcss">
#app {
  @apply min-h-screen;
}
</style>
