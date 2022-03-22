<script setup>
import { computed, ref, watchEffect } from 'vue';

import { SelectorIcon } from '@heroicons/vue/outline';

const props = defineProps(['dropdown']);
const emit = defineEmits(['updateSelected']);

const selectedItem = ref(null);
const openedDroplist = ref(false);

props.dropdown.selectedItem
  ? (selectedItem.value = props.dropdown.selectedItem)
  : props.dropdown.type === 'first'
  ? (selectedItem.value = 'Please select')
  : (selectedItem.value = props.dropdown.options[0]);

watchEffect(() => {
  if (props.dropdown.selectedItem) {
    selectedItem.value = props.dropdown.selectedItem;
  }
});

const closeDroplist = () => {
  openedDroplist.value = false;
};

const updateSelectedItem = (option) => {
  if (selectedItem.value !== option) {
    selectedItem.value = option;
    closeDroplist();
    emit('updateSelected', option);
  } else {
    closeDroplist();
  }
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
      <h4
        class="dropdown-label"
        v-html="dropdown.label"
        v-if="dropdown.label"
      ></h4>

      <div
        class="selected-item"
        @click.prevent="openedDroplist = !openedDroplist"
        role="button"
      >
        <component
          :is="dropdown.icon"
          class="icon"
          v-if="dropdown.icon && selectedItem !== 'Please select'"
        />
        <p
          :class="{
            'text-gray-400':
              selectedItem === 'Please select' ||
              selectedItem === 'Select attendee',
          }"
          v-html="selectedItem"
        ></p>

        <button class="selector-btn">
          <SelectorIcon class="icon" />
        </button>
      </div>

      <ul
        class="dropdown-list"
        v-if="openedDroplist"
        :class="dropdown.direction"
      >
        <li class="special-item" v-if="dropdown.type === 'first'">
          Please select
        </li>
        <li
          class="list-item"
          :class="{ selected: selectedItem === option }"
          @click="updateSelectedItem(option)"
          v-for="(option, index) in dropdown.options"
          :key="index"
        >
          <component :is="dropdown.icon" class="icon" v-if="dropdown.icon" />
          {{ option }}
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="postcss" scoped>
@import url('@/assets/css/base-dropdown.pcss');
</style>
