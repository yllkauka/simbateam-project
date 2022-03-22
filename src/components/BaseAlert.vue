<script setup>
import { onMounted, onUnmounted } from '@vue/runtime-core';
const emit = defineEmits(['close', 'leave']);

onMounted(() => {
  document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
  document.body.style.overflow = 'visible';
});

function emitClose() {
  emit('close');
}
</script>

<template>
  <transition name="fade" mode="out-in">
    <section class="base-alert">
      <div class="backdrop">
        <div class="content" v-click-outside="emitClose">
          <h2 class="page-heading !block">
            Are you sure to leave without saving?
          </h2>

          <div class="actions">
            <button class="btn-danger" @click="emit('leave')">Yes</button>
            <button class="btn-secondary-outline" @click="emitClose">No</button>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<style lang="postcss" scoped>
.base-alert {
  @apply fixed top-0 left-0 w-full h-full;
  z-index: 999;
  .backdrop {
    @apply absolute top-0 left-0 w-full h-full flex items-center justify-center;
    background: rgba(35, 35, 35, 0.29);
    z-index: -1;
    .content {
      @apply bg-white py-5 px-5 md:px-12 rounded text-center w-max mx-5;
      h2 {
        @apply mb-5;
      }
      .actions {
        @apply flex items-center justify-between;
        button {
          @apply w-28 md:w-32 rounded py-1.5 font-bold text-lg transition;
          &.btn-danger {
            @apply bg-red-500 text-white hover:bg-red-600;
          }
          &.btn-secondary-outline {
            @apply border border-gray-400  text-gray-600 bg-white hover:bg-gray-400 hover:text-white;
          }
        }
      }
    }
  }
}
</style>
