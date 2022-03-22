<script setup>
import { ref } from 'vue';

import { SearchIcon } from '@heroicons/vue/outline';

const searchStore = ref(null);
</script>

<template>
  <footer class="storefront-footer">
    <div class="container">
      <div class="footer-row">
        <div class="column">
          <div class="store-address">
            <address>620 Market Street</address>
            <address>Kirkland, WA 98033</address>
          </div>

          <div class="store-contact-info">
            <a class="link" href="tel:822-7161">(425) 822-7161</a> <br />
            <a class="link" href="mail:info@kirklandartscenter.org">
              info@kirklandartscenter.org
            </a>
          </div>

          <p class="tax-id">501(c)3 Tax ID Number: 91-6059395</p>
        </div>

        <div class="column">
          <div class="gallery-hours">
            <h5>Gallery Hours:</h5>
            <span>Wednesday – Friday 12 pm – 6 pm </span> <br />
            <span>Saturday 12 pm – 4 pm </span>
          </div>

          <div class="office-hours">
            <h5>Office Hours:</h5>
            <span>Monday – Friday 10 am – 6pm</span>
          </div>
        </div>

        <div class="column">
          <p class="copyrights">
            © 2022 Kirkland Arts Center. All rights reserved.
          </p>

          <div class="search-store">
            <input
              type="search"
              placeholder="Search Kirkland"
              v-model="searchStore"
            />
            <button>
              <SearchIcon class="icon" />
            </button>
          </div>

          <p>
            Made with Art Center Canvas
            <a href="#" class="link ml-5"><strong>Learn More</strong></a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.storefront-footer {
  @apply sticky top-full left-0 bg-gray-800 text-white py-8
  sm:pt-10 sm:pb-12 lg:py-14 text-sm sm:text-[17px];
  .footer-row {
    @apply flex justify-between gap-y-8 sm:gap-y-10 xl:gap-12 flex-wrap;
    .column {
      @apply flex flex-col gap-y-4 sm:gap-y-5 text-center sm:text-left w-full sm:w-auto;
      &:last-of-type {
        @apply lg:gap-y-[30px];
      }
      address {
        @apply not-italic;
      }
      .search-store {
        @apply relative rounded overflow-hidden;
        input {
          @apply bg-white inline-block w-full h-8 px-3 outline-none
          text-gray-800 text-sm;
        }
        button {
          @apply absolute top-0 right-0 w-8 h-8 bg-accent-2 flex
          items-center justify-center;
          .icon {
            @apply w-6 h-6 text-white;
          }
        }
      }
    }
  }
  .link {
    @apply transition hover:opacity-70;
  }
}
</style>
