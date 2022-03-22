<script setup>
import { computed, onMounted, onUnmounted, watchEffect } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const windowWidth = computed(() => store.state.windowInnerWidth);

onMounted(() => {
  watchEffect(() => {
    if (windowWidth.value < 768) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  });
});

onUnmounted(() => {
  document.body.style.overflow = 'visible';
});
</script>

<template>
  <section class="base-modal">
    <div class="backdrop">
      <div class="container">
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.base-modal {
  @apply md:fixed top-0 left-0 w-full md:h-full z-50 bg-white md:bg-transparent overflow-y-auto;
  .backdrop {
    @apply flex h-full items-center justify-center md:bg-black md:bg-opacity-40;
    .container {
      @apply px-0;
      .modal-body {
        @apply md:bg-white relative md:max-h-[80vh] xl:max-h-[90vh] md:overflow-y-auto rounded-lg mx-auto md:w-max;
      }
    }
  }
}
</style>
