<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

import { beforeEnter, enter, beforeLeave, leave } from '@/helpers/slideUp.js';
import { ExclamationCircleIcon } from '@heroicons/vue/outline';
import { PlusIcon, MinusSmIcon } from '@heroicons/vue/solid';

const store = useStore();

const selectedType = ref('All Classes');

const classTypes = ref({
  options: [
    'All Classes',
    'Youth & Family',
    'Teen',
    'Painting & Mix Media',
    'Drawing',
    'Printmaking',
    'Online Classes',
    'Workshops',
    'Ceramics',
  ],
});

const windowInnerWidth = computed(() => store.state.windowInnerWidth);
const showClassFilters = ref(false);
const mediumsDropdown = ref({
  options: [
    'Any medium',
    'Medium 1',
    'Medium 2',
    'Medium 3',
    'Medium 4',
    'Medium 5',
  ],
});
const levelsDropdown = ref({
  options: ['Any level', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],
});
const dayTimeDropdown = ref({
  options: [
    'Any day',
    'Friday',
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
  ],
});
const instructorsDropdown = ref({
  options: [
    'Any instructor',
    'Instructor 1',
    'Instructor 2',
    'Instructor 3',
    'Instructor 4',
    'Instructor 5',
  ],
});

const classes = computed(() => store.state.classes.classes);
</script>

<template>
  <section class="storefront-classes">
    <div class="hero-banner">
      <div class="container">
        <h1>Classes</h1>
      </div>
    </div>

    <div class="container">
      <div class="classes-grid">
        <div class="class-type">
          <h4>Class type</h4>
          <ul class="types">
            <li
              v-for="(type, index) in classTypes.options"
              :key="index"
              v-html="type"
              @click="selectedType = type"
              :class="{ selected: selectedType === type }"
            ></li>
          </ul>
        </div>
        <div class="classes-view">
          <div class="store-warning">
            <ExclamationCircleIcon class="warning-icon" />

            <p class="warning-text">
              We have updated COVID protocols in place for Winter Quarter.
              <a class="warning-link" href="#" @click.prevent>Learn More</a>
            </p>
          </div>

          <BaseDropdown :dropdown="classTypes" class="class-type-drop" />

          <transition
            name="accordion"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
          >
            <div
              class="classes-filters"
              v-if="showClassFilters || windowInnerWidth > 768"
            >
              <BaseDropdown :dropdown="mediumsDropdown" />
              <BaseDropdown :dropdown="levelsDropdown" />
              <BaseDropdown :dropdown="dayTimeDropdown" />
              <BaseDropdown :dropdown="instructorsDropdown" />
            </div>
          </transition>

          <button
            class="btn-show-filters"
            @click="showClassFilters = !showClassFilters"
          >
            <MinusSmIcon class="icon" v-if="showClassFilters" />
            <PlusIcon class="icon" v-else />
            {{ showClassFilters ? 'Hide Filters' : 'Show Filters' }}
          </button>

          <div class="classes-wrapper">
            <div
              class="class-box"
              v-for="(classBox, index) in classes"
              :key="index"
            >
              <div class="class-image">
                <img :src="classBox.image" />
                <div class="image-overlay">
                  <h5 v-html="classBox.category"></h5>
                  <span v-html="classBox.type"></span>
                </div>
              </div>

              <div class="class-info">
                <h2 class="class-name" v-html="classBox.name"></h2>

                <div class="wrapper">
                  <p class="class-instructor">
                    <Icon icon="ant-design:user-outlined" class="icon" />
                    <span v-html="classBox.instructor.name"></span>
                  </p>
                  <p class="class-schedule">
                    <Icon icon="ci:calendar" class="icon" />
                    <span v-html="classBox.schedule"></span>
                  </p>
                  <p class="class-location">
                    <Icon icon="carbon:location" class="icon" />
                    <span v-html="classBox.location"></span>
                  </p>
                  <p class="class-level">
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
                    :to="{
                      name: 'Class Details',
                      params: { classId: classBox.id },
                    }"
                    class="btn-accent-1 btn-register"
                  >
                    Register
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <BasePagination />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('./index.pcss');
</style>
