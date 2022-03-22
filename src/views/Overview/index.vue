<script setup>
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

import { SelectorIcon } from '@heroicons/vue/solid';

const store = useStore();
const route = useRoute();

const windowInnerWidth = computed(() => store.state.windowInnerWidth);
const isOpenedModal = ref(false);

const openedDroplist = ref(false);
const selectedItem = ref(null);
const closeDroplist = () => {
  openedDroplist.value = false;
};

const tabs = ref([
  {
    text: 'Account Info',
    routeName: 'Overview: Account Info',
  },
  {
    text: 'Saved Profiles',
    routeName: 'Overview: Saved Profiles',
  },
  {
    text: 'Saved Payment Methods',
    routeName: 'Overview: Payment Methods',
  },
  {
    text: 'Order History',
    routeName: 'Overview: Order History Table',
  },
]);

watchEffect(() => {
  tabs.value.forEach((tab) => {
    if (route.name === tab.routeName) {
      selectedItem.value = tab.text;
    } else {
      if (route.matched && route.matched.length) {
        if (route.matched.length > 1 && route.matched[1].children.length) {
          if (route.matched[1].children[0].name === tab.routeName) {
            selectedItem.value = tab.text;
          }
        }
      }
    }
  });
});

onMounted(() => {
  document.addEventListener('click', () => {
    if (!!document.querySelector('.account-overview .base-modal')) {
      isOpenedModal.value = true;
    } else {
      isOpenedModal.value = false;
    }
  });
});
</script>

<template>
  <section
    class="account-overview"
    :class="{ 'border-t': isOpenedModal && windowInnerWidth < 768 }"
  >
    <div class="hero-banner" v-if="!isOpenedModal || windowInnerWidth > 768">
      <div class="container">
        <h1>Account Overview</h1>
      </div>
    </div>

    <div class="container">
      <div class="overview-grid">
        <div class="tabs-list" v-if="!isOpenedModal || windowInnerWidth > 768">
          <!-- Mobile Dropdown -->
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
                <p v-html="selectedItem"></p>

                <button class="selector-btn">
                  <SelectorIcon class="icon" />
                </button>
              </div>

              <ul class="dropdown-list" v-if="openedDroplist">
                <li
                  v-for="(option, index) in tabs"
                  :key="index"
                  @click="closeDroplist"
                >
                  <router-link
                    :to="{ name: option.routeName }"
                    class="list-item"
                    v-html="option.text"
                  >
                  </router-link>
                </li>
              </ul>
            </section>
          </div>

          <!-- Regular tabs -->
          <ul class="tabs">
            <li v-for="(tab, index) in tabs" :key="index">
              <router-link
                class="tab-link"
                :to="{ name: tab.routeName }"
                v-html="tab.text"
              >
              </router-link>
            </li>
          </ul>
        </div>

        <div class="grid-content">
          <RouterView />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@import url('@/assets/css/base-dropdown.pcss');
@import url('./index.pcss');
</style>
