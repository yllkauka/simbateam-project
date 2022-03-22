<script setup>
import { ref } from 'vue';

import { KeyIcon } from '@heroicons/vue/outline';

const userNewPassword = ref(null);
const confirmNewPassword = ref(null);
const passwordUpdated = ref(false);
</script>

<template>
  <section class="store-reset-password">
    <div class="xl:container">
      <div class="row">
        <div class="form-column">
          <form
            @submit.prevent="passwordUpdated = true"
            v-if="!passwordUpdated"
          >
            <h1 class="page-heading">Reset Your Password</h1>

            <label class="input-icon-component">
              <strong>New Password</strong>
              <div class="inp-box">
                <input
                  type="password"
                  placeholder="••••••••••"
                  class="form-control"
                  v-model="userNewPassword"
                />
                <KeyIcon class="icon" />
              </div>
            </label>

            <label class="input-icon-component">
              <strong>Confirm New Password</strong>
              <div class="inp-box">
                <input
                  type="password"
                  placeholder="••••••••••"
                  class="form-control"
                  v-model="confirmNewPassword"
                />
                <KeyIcon class="icon" />
              </div>
            </label>

            <button class="btn-submit btn-accent-1">Update Password</button>
          </form>

          <div class="password-updated" v-else>
            <img src="@/assets/icons/right-checked-xxl.svg" class="page-icon" />
            <h1 class="page-heading">You're All Set!</h1>
            <p class="page-description">
              Your password has been successfully updated.
            </p>
          </div>

          <router-link :to="{ name: 'Sign In' }" class="sign-in-link">
            Back to Sign In
          </router-link>
        </div>
        <div class="bg-column">
          <img
            src="@/assets/images/sign-bg.jpg"
            alt="Oil Painting Image for a horse and birds"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('./index.pcss');
</style>
