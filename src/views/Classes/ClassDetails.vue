<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

import { ChevronLeftIcon } from '@heroicons/vue/outline';

import ClassSessions from './components/SingleSessions.vue';

const props = defineProps(['classId']);

const store = useStore();

const classBox = computed(
  () =>
    store.state.classes.classes.filter(
      (classBox) => classBox.id === props.classId
    )[0]
);

const classDetails = computed(() => store.state.classes.classDetails);

const addToCart = () => {
  store.commit('classes/toggleToCart', props.classId);
  store.commit('toggleCart', true);
};
</script>

<template>
  <div class="container">
    <section class="class-details">
      <router-link
        :to="{ name: 'Store Classes' }"
        class="go-back-link btn-accent-1"
      >
        <ChevronLeftIcon class="icon" /> Go Back
      </router-link>

      <div
        class="class-box"
        :class="{
          'has-sessions': classBox.sessions && classBox.sessions.length,
        }"
      >
        <div class="class-image">
          <img :src="classBox.image" />
          <div class="image-overlay">
            <h5 v-html="classBox.category"></h5>
            <span v-html="classBox.type"></span>
          </div>
        </div>

        <div class="class-info">
          <div class="row">
            <h2 class="class-name" v-html="classBox.name"></h2>

            <p class="class-code">
              <span v-html="classBox.code"></span>
            </p>

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
          </div>

          <div class="wrapper" v-if="!classBox.sessions">
            <div class="class-price">
              <h3 class="main-price">
                &dollar;{{ classBox.price.main.toFixed(2) }}
              </h3>
              <h4 class="members-price" v-if="classBox.price.members">
                &dollar;{{ classBox.price.members.toFixed(2) }}
                <span>(members)</span>
              </h4>
            </div>

            <button
              class="btn-accent-1 btn-cart"
              :disabled="classBox.inCart"
              @click="addToCart"
            >
              Add{{ classBox.inCart ? 'ed' : '' }} to Cart
            </button>
          </div>
        </div>

        <ClassSessions
          v-if="classBox.sessions && classBox.sessions.length"
          :classBox="classBox"
          :classId="classId"
        />
      </div>

      <div class="program-description">
        <h3 class="section-heading">Program Description</h3>
        <p v-html="classDetails.programDescription"></p>
      </div>

      <div class="instructors">
        <h3 class="section-heading">Instructor(s)</h3>
        <div
          class="instructor-box"
          v-for="(instructor, index) in classDetails.instructors"
          :key="index"
        >
          <img :src="instructor.image" />
          <div class="info">
            <h5 v-html="instructor.name"></h5>
            <ul>
              <li
                v-for="item in instructor.descriptions"
                :key="item"
                v-html="item"
              ></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="special-notes">
        <h3 class="section-heading">Special Notes</h3>
        <ul>
          <li
            v-for="note in classDetails.specialNotes"
            :key="note"
            v-html="note"
          ></li>
        </ul>
      </div>

      <div class="required-supplies">
        <h3 class="section-heading">Required Supplies</h3>

        <strong>Supply List:</strong>
        <p>
          Students are welcome to bring any materials to work for their project.
        </p>
        <p>(Suggested supplies below)</p>

        <div
          class="list"
          v-for="(list, index) in classDetails.requiredSupplies.supplyList"
          :key="index"
        >
          <strong>{{ (index += 1) + '. ' + list.heading }}</strong>
          <ul class="list-inside list-disc">
            <li v-for="item in list.items" :key="item">
              <span class="-ml-2" v-html="item"></span>
            </li>
          </ul>
        </div>

        <div class="list mt-2">
          <strong>Online Stores</strong>
          <ul>
            <li
              v-for="link in classDetails.requiredSupplies.onlineStores"
              :key="link"
            >
              <a
                class="online-store-link"
                :href="link.url"
                target="_blank"
                v-html="link.text"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@import url('./index.pcss');
</style>
