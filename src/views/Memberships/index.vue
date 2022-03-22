<script setup>
import { ref } from 'vue';

import { CheckIcon } from '@heroicons/vue/solid';

import membership1Image from '@/assets/images/memberships/1.jpg';
import membership4Image from '@/assets/images/memberships/4.jpg';

const storefrontMemberships = ref([
  {
    title: 'Education + Exhibiting Artist Gallery Membership',
    price: 210,
    image: membership1Image,
    benefitsHeading: `Enjoy these membership benefits for <strong>one adult</strong> in  <strong>one year</strong>:`,
    benefits: [
      'Early registration status',
      '10% off all classes and workshops',
      'A piece in the Members Small Works Gallery year round',
      'Discount on submission fees for juried exhibitions',
    ],
    hasGalleryNote: true,
  },
  {
    title: 'Education Membership - Household',
    price: 200,
    image: membership1Image,
    benefitsHeading: `Enjoy these membership benefits for <strong>up to two adults</strong> and <strong>all children in the household</strong> in <strong>one year</strong>:`,
    benefits: [
      'Early registration status',
      '10% off all classes and workshops',
    ],
  },
  {
    title: 'Education Membership - Individual',
    price: 110,
    image: membership4Image,
    benefitsHeading: `Enjoy these membership benefits for <strong>one adult or child</strong> in  <strong>one year</strong>:`,
    benefits: [
      'Early registration status',
      '10% off all classes and workshops',
    ],
  },
  {
    title: 'Exhibiting Artist Gallery Membership',
    benefitsHeading: `Enjoy these membership benefits for <strong>one adult</strong> in  <strong>one year</strong>:`,
    price: 150,
    image: membership4Image,
    benefits: [
      'A piece in the Members Small Works Gallery year round ',
      'Discount on submission fees for juried exhibitions ',
      'This membership features exclusively gallery exhibition benefits. If you are also interested in education benefits, please purchase "Education + Exhibiting Artist Gallery Membership" combination',
    ],
    hasGalleryNote: true,
  },
]);
</script>

<template>
  <section class="storefront-memberships">
    <div class="hero-banner">
      <div class="container">
        <h1>Memberships</h1>
      </div>
    </div>

    <div class="container">
      <div
        class="membership-box"
        v-for="(membership, index) in storefrontMemberships"
        :key="index"
      >
        <header>
          <h2 v-html="membership.title"></h2>

          <strong> &dollar;{{ membership.price.toFixed(2) }} </strong>
        </header>

        <div class="content">
          <img :src="membership.image" />
          <div class="benefits">
            <p v-html="membership.benefitsHeading"></p>

            <ul :class="{ 'mb-5 xl:mb-0': membership.hasGalleryNote }">
              <li v-for="benefit in membership.benefits" :key="benefit">
                <CheckIcon class="icon" />
                {{ benefit }}
              </li>
            </ul>

            <p class="gallery-note" v-if="membership.hasGalleryNote">
              Please
              <a class="link" href="mailto:exhibitions@kirklandartscenter.org">
                email us
              </a>
              after becoming a member to finalize the gallery membership
              process.
              <a
                class="link"
                href="http://kirklandartscenter.org/gallerymembership/"
              >
                See FAQ
              </a>
            </p>

            <button class="btn-cart btn-accent-1">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.storefront-memberships {
  .hero-banner {
    @apply bg-[url('@/assets/images/memberships-banner.jpg')] mb-10;
  }

  .membership-box {
    @apply mb-8 xl:mb-10;
    header {
      @apply md:flex items-center justify-between bg-gray-100 px-3 xl:px-4 py-2.5
      font-bold text-xl xl:text-2xl mb-5;
      strong {
        @apply text-accent-2 inline-block mt-1.5 md:mt-0;
      }
    }

    .content {
      @apply md:flex gap-x-5;
      img {
        @apply w-full md:w-60 xl:w-64 h-56 md:h-40 xl:h-44 object-cover flex-none
        mb-4 md:mb-0;
      }

      .benefits {
        @apply text-sm relative flex-1;
        ul {
          @apply mt-2.5;
          li {
            @apply mb-2.5 flex items-center gap-x-2 xl:w-2/3;
            .icon {
              @apply w-4 h-4 text-accent-1 flex-none;
            }
          }
        }

        .gallery-note {
          @apply xl:mt-auto;
          .link {
            @apply font-bold text-accent-1 transition hover:text-accent-2;
          }
        }

        .btn-cart {
          @apply xl:absolute bottom-0 right-0 text-lg py-2 w-full mt-5 xl:mt-0 xl:w-52;
        }
      }
    }
  }
}
</style>
