<script setup>
import { ref } from 'vue';

import { PlusIcon } from '@heroicons/vue/outline';
import { SelectorIcon } from '@heroicons/vue/solid';

const emit = defineEmits(['addAttendee']);

const openedDroplist = ref(false);
const selectedAttendee = ref('Select attendee');
const closeDroplist = () => {
  openedDroplist.value = false;
};
const attendeesDropList = ref([
  'Joe Doe 1',
  'Joe Doe 2',
  'Joe Doe 3',
  'Joe Doe 4',
]);
const updateSelectedAttendee = (option) => {
  if (selectedAttendee.value !== option) {
    selectedAttendee.value = option;
    closeDroplist();
  } else {
    closeDroplist();
  }
};

const addAttendee = () => {
  emit('addAttendee');
  closeDroplist();
};
</script>

<template>
  <div class="dropdown-wrapper">
    <section
      class="base-dropdown"
      v-click-outside="closeDroplist"
      :class="{ opened: openedDroplist }"
      @click.self="closeDroplist"
    >
      <div
        class="selected-item"
        @click.prevent="openedDroplist = !openedDroplist"
        role="button"
      >
        <p
          :class="{
            'text-gray-400': selectedAttendee === 'Select attendee',
          }"
          v-html="selectedAttendee"
        ></p>

        <button class="selector-btn">
          <SelectorIcon class="icon" />
        </button>
      </div>

      <ul class="dropdown-list" v-if="openedDroplist">
        <li class="special-item">Select Attendee</li>
        <li
          class="list-item"
          v-for="(attendee, index) in attendeesDropList"
          :key="index"
          :class="{ selected: selectedAttendee === attendee }"
          @click="updateSelectedAttendee(attendee)"
        >
          {{ attendee }}
        </li>

        <button class="add-btn" @click="addAttendee">
          <PlusIcon class="icon" />
          New Attendee Profile
        </button>
      </ul>
    </section>
  </div>
</template>

<style lang="postcss" scoped>
@import url('@/assets/css/base-dropdown.pcss');
.special-item {
  @apply !text-gray-400;
}

.add-btn {
  @apply py-2.5 px-4 flex w-full items-center gap-x-1 font-semibold text-accent-1 border-t
  border-gray-200 transition;
  .icon {
    @apply !w-4 !h-4 !text-accent-1 transition;
  }
  &:hover,
  &:hover .icon {
    @apply !text-accent-2;
  }
}
</style>
