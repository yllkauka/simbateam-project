<script setup>
import { ref, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import {
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from '@heroicons/vue/outline';

import preview1 from '@/assets/images/masonry/1.jpg';
import preview2 from '@/assets/images/masonry/2.jpg';
import preview3 from '@/assets/images/masonry/3.jpg';
import preview4 from '@/assets/images/masonry/4.jpg';
import preview5 from '@/assets/images/masonry/5.jpg';
import preview6 from '@/assets/images/masonry/6.jpg';
import preview7 from '@/assets/images/masonry/7.jpg';
import preview8 from '@/assets/images/masonry/8.jpg';
import preview9 from '@/assets/images/masonry/9.jpg';
import preview10 from '@/assets/images/masonry/10.jpg';
import preview11 from '@/assets/images/masonry/11.jpg';

defineProps(['instructor']);
const store = useStore();

const emit = defineEmits(['openLightbox', 'closeLightbox']);

const artworks = ref([
  {
    image: preview5,
    art: 'The Starry Night',
    artist: 'Abdullah 😎',
  },
  {
    image: preview2,
    art: 'The Starry Night',
    artist: 'Abdullah 😎',
  },
  {
    image: preview4,
    art: 'The Starry Night',
    artist: 'Abdullah 😎',
  },
  {
    image: preview7,
    art: 'The Starry Night',
    artist: 'Abdullah 😎',
  },
  {
    image: preview6,
    art: 'The Starry Night',
    artist: 'Abdullah 😎',
  },
  {
    image: preview11,
    art: 'The Starry Night',
    artist: 'Abdullah 😎',
  },
  {
    image: preview1,
    art: 'The Starry Night',
    artist: 'Abdullah 😎',
  },
  {
    image: preview8,
    art: 'The Starry Night',
    artist: 'Abdullah 😎',
  },
  {
    image: preview9,
    art: 'The Starry Night',
    artist: 'Abdullah 😎',
  },
  {
    image: preview10,
    art: 'The Starry Night',
    artist: 'Abdullah 😎',
  },
  {
    image: preview3,
    art: 'The Starry Night',
    artist: 'Abdullah 😎',
  },
]);

const artworkLightbox = ref({
  modal: false,
  activeItem: {},
  items: [],
});
const windowWidth = computed(() => store.state.windowInnerWidth);

const openLightbox = (work, index) => {
  artworkLightbox.value.modal = true;
  artworkLightbox.value.activeItem = work;
  artworkLightbox.value.activeItem.index = index;
  artworkLightbox.value.items = artworks.value;
  emit('openLightbox');
};

const closeLightbox = () => {
  artworkLightbox.value.modal = false;
  artworkLightbox.value.activeItem = {};
  artworkLightbox.value.items = [];
  emit('closeLightbox');
};

const previousWork = () => {
  let activeIndex = artworkLightbox.value.activeItem.index;
  artworkLightbox.value.activeItem =
    artworkLightbox.value.items[activeIndex - 1];
  artworkLightbox.value.activeItem.index = activeIndex - 1;
};

const nextWork = () => {
  let activeIndex = artworkLightbox.value.activeItem.index;
  artworkLightbox.value.activeItem =
    artworkLightbox.value.items[activeIndex + 1];
  artworkLightbox.value.activeItem.index = activeIndex + 1;
};
</script>

<template>
  <section class="artwork-preview">
    <template v-if="!artworkLightbox.modal || windowWidth > 768">
      <h2 class="page-heading">
        {{ instructor.name.split(' ')[0] }}'s Work
        <button class="view-lightbox" @click="openLightbox(artworks[0], 0)">
          View Fullscreen
          <ArrowRightIcon class="icon" />
        </button>
      </h2>
      <p class="page-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptatum iste vitae optio aperiam? Culpa expedita temporibus maiores
        accusamus numquam, voluptatum dicta quae a! Sapiente beatae consequatur
        quaerat alias eaque?
      </p>

      <div
        v-masonry
        transition-duration="0.3s"
        item-selector=".artwork-block"
        class="masonry-wrapper"
      >
        <div
          v-masonry-tile
          class="artwork-block"
          v-for="(work, index) in artworks"
          :key="index"
          @click="openLightbox(work, index)"
        >
          <img class="w-full" :src="work.image" alt="Sunset in the mountains" />
          <div class="overlay">
            <p>&ldquo;{{ work.art }}&rdquo; by {{ work.artist }}</p>
          </div>
        </div>
      </div>
    </template>

    <BaseModal v-if="artworkLightbox.modal">
      <div class="artwork-modal">
        <header class="modal-header">
          <div class="column">
            <div class="pagination">
              <button
                class="btn-prev"
                :disabled="artworkLightbox.activeItem.index === 0"
                @click="previousWork"
              >
                <ChevronLeftIcon class="icon" />
              </button>
              <button
                class="btn-next"
                :disabled="
                  artworkLightbox.activeItem.index ===
                  artworkLightbox.items.length - 1
                "
                @click="nextWork"
              >
                <ChevronRightIcon class="icon" />
              </button>
            </div>
            <p class="current-item">
              {{ artworkLightbox.activeItem.index + 1 }} of
              {{ artworkLightbox.items.length }}
            </p>
          </div>
          <button class="btn-close" @click="closeLightbox">
            <XIcon class="icon" />
          </button>
        </header>

        <div class="item-details">
          <div class="item-pic">
            <img :src="artworkLightbox.activeItem.image" />
          </div>

          <div class="item-info">
            <h2
              class="page-heading"
              v-html="artworkLightbox.activeItem.art"
            ></h2>
            <h4
              class="item-artist"
              v-html="artworkLightbox.activeItem.artist"
            ></h4>
            <p class="item-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              voluptas vitae quae perspiciatis consequuntur? Nulla blanditiis
              aspernatur numquam molestiae harum, velit laborum illo iure
              quisquam saepe vitae voluptatem. Suscipit iste, delectus
              temporibus necessitatibus odit corrupti cumque nam eligendi?
              Facilis, asperiores ad! Fugiat, harum. Quo commodi fugit inventore
              culpa. Accusantium, distinctio.
            </p>
          </div>
        </div>
      </div>
    </BaseModal>
  </section>
</template>
