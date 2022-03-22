<script setup>
import { PlusIcon } from '@heroicons/vue/outline';

import AttendeeDroplist from './AttendeeDroplist.vue';

defineProps(['cartItems']);
const emit = defineEmits(['openModal', 'deleteClass', 'deleteMembership']);
</script>

<template>
  <section class="first-column cart-items">
    <header class="items-header">
      <h2>All Items</h2>
      <button class="add-btn" @click="emit('openModal')">
        <PlusIcon class="icon" />
        New Attendee Profile
      </button>
    </header>

    <div class="classes-items" v-if="cartItems.classes.length">
      <div
        class="class-box"
        v-for="(classBox, index) in cartItems.classes"
        :key="index"
      >
        <div class="box-image">
          <img :src="classBox.image" />
        </div>
        <div class="box-content">
          <div class="first-row">
            <h2 v-html="classBox.name"></h2>
            <p class="class-instructor">
              <Icon icon="ant-design:user-outlined" class="icon" />
              <span v-html="classBox.instructor.name"></span>
            </p>
            <p class="class-schedule">
              <Icon icon="ci:calendar" class="icon" />
              <span v-html="classBox.schedule"></span>
            </p>
          </div>

          <div class="second-row">
            <AttendeeDroplist
              class="box-drop gray-bg"
              @addAttendee="emit('openModal')"
            />

            <h2>&dollar;{{ classBox.price.toFixed(2) }}</h2>
          </div>
        </div>

        <button class="btn-delete" @click="emit('deleteClass', index)">
          <img src="@/assets/icons/trash.svg" />
        </button>
      </div>
    </div>

    <div class="membership-box" v-if="cartItems.membership">
      <div class="box-image">
        <img :src="cartItems.membership.image" />
      </div>
      <div class="box-content">
        <div class="first-row">
          <h2 v-html="cartItems.membership.name"></h2>
          <p
            class="box-validation"
            v-html="cartItems.membership.validation"
          ></p>
        </div>

        <div class="second-row">
          <AttendeeDroplist
            class="box-drop gray-bg"
            @addAttendee="emit('openModal')"
          />

          <h2>&dollar;{{ cartItems.membership.price.toFixed(2) }}</h2>
        </div>
      </div>

      <button class="btn-delete" @click="emit('deleteMembership')">
        <img src="@/assets/icons/trash.svg" />
      </button>
    </div>
  </section>
</template>
