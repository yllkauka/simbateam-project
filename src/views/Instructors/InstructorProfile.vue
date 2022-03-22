<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

import { ChevronLeftIcon } from '@heroicons/vue/outline';

import InstructorWorks from './components/InstructorWorks.vue';
import instructor1Img from '@/assets/images/placeholders/instructor-2.png';

const store = useStore();

const instructor = ref({
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
});

const classes = computed(() => store.state.classes.classes);

const openedLighbox = ref(false);
const windowWidth = computed(() => store.state.windowInnerWidth);
</script>

<template>
  <div class="container">
    <section class="instructor-profile">
      <template v-if="!openedLighbox || windowWidth > 768">
        <router-link to="/instructors" class="go-back-link btn-accent-1">
          <ChevronLeftIcon class="icon" /> Go Back
        </router-link>
        <div class="instructor-info">
          <img :src="instructor.image" :alt="instructor.name + 'Profile pic'" />
          <h1 class="page-heading" v-html="instructor.name"></h1>
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
        </div>
        <div class="instructor-classes">
          <h2 class="page-heading">
            {{ instructor.name.split(' ')[0] }}'s Classes
          </h2>
          <p class="page-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            voluptatum iste vitae optio aperiam? Culpa expedita temporibus
            maiores accusamus numquam, voluptatum dicta quae a! Sapiente beatae
            consequatur quaerat alias eaque?
          </p>

          <div class="classes-box">
            <div
              class="class-card"
              v-for="(classBox, index) in classes.slice(1, 5)"
              :key="index"
            >
              <div class="class-image">
                <img :src="classBox.image" />
                <div class="image-overlay">
                  <h5 v-html="classBox.category"></h5>
                  <span v-html="classBox.type"></span>
                </div>
              </div>

              <h2 class="class-name" v-html="classBox.name"></h2>

              <div class="class-info">
                <p>
                  <Icon icon="ant-design:user-outlined" class="icon" />
                  <span v-html="classBox.instructor.name"></span>
                </p>
                <p>
                  <Icon icon="ci:calendar" class="icon" />
                  <span v-html="classBox.schedule"></span>
                </p>
                <p>
                  <Icon icon="carbon:location" class="icon" />
                  <span v-html="classBox.location"></span>
                </p>
                <p>
                  <Icon icon="carbon:meter-alt" class="icon" />
                  <span v-html="classBox.level"></span>
                </p>

                <div class="class-price">
                  <h3 class="main-price">
                    &dollar;{{ classBox.price.main.toFixed(2) }}
                  </h3>
                  <h4 class="members-price" v-if="classBox.price.members">
                    &dollar;{{ classBox.price.members.toFixed(2) }}
                    <span>(members)</span>
                  </h4>
                </div>

                <router-link
                  :to="'/classes/' + classBox.id"
                  class="btn-accent-1 btn-register"
                >
                  Register
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </template>
      <InstructorWorks
        :instructor="instructor"
        @openLightbox="openedLighbox = true"
        @closeLightbox="openedLighbox = false"
      />
    </section>
  </div>
</template>

<style>
@import url('./index.pcss');
</style>
