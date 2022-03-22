<script setup>
import { ref } from 'vue';

import instructor1Img from '@/assets/images/placeholders/instructor-2.png';
import instructor2Img from '@/assets/images/placeholders/instructor-3.png';
import instructor3Img from '@/assets/images/placeholders/instructor-4.png';
import instructor4Img from '@/assets/images/placeholders/instructor-5.png';

const instructors = ref([
  {
    id: 'DenUCtWH89',
    image: instructor1Img,
    name: 'Clinton Mcclure',
    job: 'Art director',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque autem dolorum dolore amet incidunt quibusdam beatae a quos illum',
    social: {
      twitter: 'https://www.twitter.com',
      facebook: 'https://www.facebook.com',
      dribbble: 'https://www.dribbble.com',
    },
  },
  {
    id: 'hHwMWJ0fxh',
    image: instructor2Img,
    name: 'Daryl Nehls',
    job: 'Instructor',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    social: {
      twitter: 'https://www.twitter.com',
      dribbble: 'https://www.dribbble.com',
    },
  },
  {
    id: 'GD6CdyRNRP',
    image: instructor3Img,
    name: 'Rayford Chenail',
    job: 'Art director',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque autem dolorum dolore amet incidunt quibusdam beatae a quos illum',
    social: {
      twitter: 'https://www.twitter.com',
      facebook: 'https://www.facebook.com',
      dribbble: 'https://www.dribbble.com',
    },
  },
  {
    id: 'VIAFPupaWb',
    image: instructor4Img,
    name: 'Clinton Mcclure',
    job: 'Instructor',
    description: 'Lorem ipsum dolor sit amet.',
    social: {
      dribbble: 'https://www.dribbble.com',
    },
  },
]);
</script>

<template>
  <section class="store-instructors">
    <div class="hero-banner">
      <div class="container">
        <h1>Instructors</h1>
      </div>
    </div>

    <div class="container">
      <div class="page-info">
        <h1 class="page-heading">Instructors at KAC</h1>
        <p class="page-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque autem
          dolorum dolore amet incidunt quibusdam beatae a quos illum, odit
          doloribus qui repudiandae aut veritatis commodi? Magnam, unde
          deleniti! Eius optio consequuntur eos.
        </p>
      </div>

      <div class="instructors-cards">
        <template v-for="i in 3" :key="i">
          <div
            class="instructor-card"
            v-for="(instructor, index) in instructors"
            :key="index"
          >
            <img
              :src="instructor.image"
              :alt="instructor.name + 'Profile Image'"
            />
            <h2 v-html="instructor.name"></h2>
            <span v-html="instructor.job"></span>
            <p v-html="instructor.description"></p>
            <ul>
              <li v-if="instructor.social.twitter">
                <a
                  :href="instructor.social.twitter"
                  class="twitter"
                  target="_blank"
                >
                  <Icon icon="akar-icons:twitter-fill" class="icon" />
                </a>
              </li>
              <li v-if="instructor.social.facebook">
                <a
                  :href="instructor.social.facebook"
                  class="facebook"
                  target="_blank"
                >
                  <Icon icon="brandico:facebook" class="icon" />
                </a>
              </li>
              <li v-if="instructor.social.dribbble">
                <a
                  :href="instructor.social.dribbble"
                  class="dribbble"
                  target="_blank"
                >
                  <Icon icon="akar-icons:dribbble-fill" class="icon" />
                </a>
              </li>
            </ul>
            <router-link
              :to="'/instructors/' + instructor.id"
              class="link btn-accent-1"
            >
              Learn More
            </router-link>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('./index.pcss');
</style>
