<script setup>
import { ref, computed, watchEffect, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

import { XIcon, ChevronDownIcon } from '@heroicons/vue/solid';

const store = useStore();
const route = useRoute();
const windowInnerWidth = computed(() => store.state.windowInnerWidth);

const navList = ref([
  { text: 'Classes', routeName: 'Store Classes' },
  { text: 'Exhibitions', routeName: 'Store Exhibitions' },
  { text: 'Memberships', routeName: 'Memberships' },
  { text: 'Instructors', routeName: 'Store Instructors' },
  { text: 'Shop', routeName: 'Store Shop' },
  { text: 'Donate', routeName: 'Store Donate' },
]);

const openedNavigation = ref(false);
const toggleNavigation = () => {
  openedNavigation.value = !openedNavigation.value;
  closeCart();
};
const closeNavigation = () => {
  openedNavigation.value = false;
};

const userLoggedIn = computed(() => {
  // For Testing UI
  if (route.matched && route.matched.length) {
    if (route.matched[0].name === 'Overview: index') {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
const accountDropdown = ref(false);
const overviewItems = ref([
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
const closeAccountDropdown = () => {
  if (windowInnerWidth.value >= 1024) {
    accountDropdown.value = false;
  }
};
const toggleAccountDropdown = () => {
  if (windowInnerWidth.value >= 1024) {
    accountDropdown.value = !accountDropdown.value;
  }
};

const openedCart = computed(() => store.state.openedCart);

const openCart = () => {
  openedNavigation.value = false;
  store.commit('toggleCart', true);
};

const closeCart = () => {
  store.commit('toggleCart', false);
};

const inCartClasses = computed(() => store.getters['classes/inCartClasses']);
const totalCartPrice = ref(0);

watchEffect(() => {
  totalCartPrice.value = 0;
  inCartClasses.value.forEach(
    (classBox) => (totalCartPrice.value += classBox.price.main)
  );

  if (
    (openedCart.value && windowInnerWidth.value < 1024) ||
    (openedNavigation.value && windowInnerWidth.value < 1024)
  ) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
});

const removeClass = (classId) => {
  store.commit('classes/toggleToCart', classId);
};

const accountDropdownState = ref();
onMounted(() => {
  setTimeout(() => {
    if (windowInnerWidth.value < 1024) {
      accountDropdown.value = true;
      accountDropdownState.value = true;
    } else {
      accountDropdown.value = false;
      accountDropdownState.value = false;
    }
  }, 1);
  window.addEventListener('resize', () => {
    if (windowInnerWidth.value < 1024) {
      if (!accountDropdownState.value) {
        accountDropdown.value = true;
        accountDropdownState.value = true;
      }
    } else {
      if (accountDropdownState.value) {
        accountDropdown.value = false;
        accountDropdownState.value = false;
      }
    }
  });
});
</script>

<template>
  <header class="storefront-header">
    <div class="container bg-white">
      <div class="content">
        <div class="store-logo">
          <router-link :to="{ name: 'Store Classes' }">
            <img
              src="@/assets/images/canvas-logo.svg"
              alt="Kirkland arts center logo"
            />
          </router-link>
        </div>

        <div class="wrapper" v-click-outside="closeNavigation">
          <button
            class="nav-toggler"
            @click.stop="toggleNavigation"
            :class="{ opened: openedNavigation }"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            class="overlay"
            v-if="openedNavigation && windowInnerWidth < 1024"
            @click="openedNavigation = false"
          ></div>
          <nav
            class="store-navigation"
            :class="[
              { opened: openedNavigation },
              { 'logged-in': userLoggedIn },
            ]"
          >
            <div class="container">
              <ul class="nav-list">
                <li v-for="(item, index) in navList" :key="index">
                  <router-link
                    :to="{ name: item.routeName }"
                    class="nav-link"
                    :data-link="item.text"
                    @click="closeNavigation"
                    v-html="item.text"
                  ></router-link>
                </li>
              </ul>

              <div class="cart-modal">
                <button class="cart-btn" @click="openCart">
                  <Icon icon="ant-design:shopping-cart-outlined" class="icon" />
                  Cart
                </button>

                <transition name="fade">
                  <div
                    class="cart-popup"
                    v-if="openedCart"
                    v-click-outside="closeCart"
                  >
                    <div class="container">
                      <header>
                        <h3>Your cart</h3>
                        <button @click="closeCart">
                          <XIcon class="icon" />
                        </button>
                      </header>

                      <div class="in-cart-classes">
                        <template v-if="inCartClasses.length">
                          <div
                            class="class-box"
                            v-for="(classBox, index) in inCartClasses"
                            :key="index"
                          >
                            <img class="class-img" :src="classBox.image" />
                            <div class="info">
                              <h4 v-html="classBox.name"></h4>
                              <p v-html="classBox.instructor.name"></p>
                              <strong
                                >&dollar;{{
                                  classBox.price.main.toFixed(2)
                                }}</strong
                              >
                            </div>
                            <button
                              class="btn-remove"
                              @click="removeClass(classBox.id)"
                            >
                              <img src="@/assets/icons/trash.svg" />
                            </button>
                          </div>
                        </template>
                        <div class="empty-cart" v-else>
                          <h3>Empty Cart</h3>
                        </div>
                      </div>

                      <footer>
                        <div class="row">
                          <strong>{{ inCartClasses.length }} items</strong>
                          <strong>
                            Total:
                            <span class="total-amount"
                              >${{ totalCartPrice.toFixed(2) }}</span
                            >
                          </strong>
                        </div>

                        <router-link
                          :to="{ name: 'Checkout: Review Cart' }"
                          class="checkout-link btn-accent-1"
                          :class="{ disabled: !inCartClasses.length }"
                          @click.prevent="closeCart"
                        >
                          Checkout
                        </router-link>
                      </footer>
                    </div>
                  </div>
                </transition>
              </div>

              <div class="auth-info">
                <div class="user-info" v-if="userLoggedIn">
                  <button
                    class="toggler"
                    :class="{ toggled: accountDropdown }"
                    @click="toggleAccountDropdown"
                  >
                    Hi, Joe <ChevronDownIcon class="icon" />
                  </button>

                  <div
                    class="account-dropdown"
                    v-if="accountDropdown"
                    v-click-outside="closeAccountDropdown"
                  >
                    <ul>
                      <li v-for="(item, index) in overviewItems" :key="index">
                        <router-link
                          class="list-link"
                          :to="{ name: item.routeName }"
                          :data-link="item.text"
                          v-html="item.text"
                          @click="[closeAccountDropdown(), closeNavigation()]"
                        ></router-link>
                      </li>
                    </ul>
                    <div
                      class="log-out"
                      @click="[closeAccountDropdown(), closeNavigation()]"
                    >
                      <button>Log Out</button>
                    </div>
                  </div>
                </div>
                <router-link
                  :to="{ name: 'Sign In' }"
                  class="btn-accent-2 sign-link"
                  @click.prevent="openedNavigation = false"
                  v-else
                >
                  Sign in
                </router-link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url('./index.pcss');
</style>
