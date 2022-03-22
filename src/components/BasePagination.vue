<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/outline';
</script>

<template>
  <section class="base-pagination">
    <div class="row">
      <p class="showing-classes">
        Showing
        <strong>1</strong>
        to
        <strong>7</strong>
        of 100 Classes
      </p>

      <ul class="pagination-items">
        <li class="page-item rounded-l-lg flex-1">
          <ChevronLeftIcon class="icon" />
        </li>
        <li class="page-item selected">1</li>
        <li class="page-item">2</li>
        <li class="page-item">3</li>
        <li class="page-item">...</li>
        <li class="page-item">12</li>
        <li class="page-item rounded-r-lg flex-1">
          <ChevronRightIcon class="icon" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.base-pagination {
  .row {
    @apply md:flex items-center justify-between text-sm text-center md:text-left;
    .showing-classes {
      @apply text-gray-600 mb-3 md:mb-0;
    }
    .pagination-items {
      @apply inline-flex items-stretch rounded-lg border border-gray-200;
      .page-item {
        @apply px-3 py-1.5 transition text-gray-600 md:hover:bg-accent-1
        md:hover:bg-opacity-5 cursor-pointer font-medium flex items-center
        justify-center;
        &:not(:last-of-type) {
          @apply border-r;
        }
        &.selected {
          @apply text-accent-1 bg-accent-1 bg-opacity-5;
        }
        .icon {
          @apply w-4 h-4;
        }
      }
    }
  }
}
</style>
