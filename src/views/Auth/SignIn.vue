<script setup>
import { ref } from 'vue';

import { KeyIcon } from '@heroicons/vue/outline';

const userEmail = ref(null);
const userPassword = ref(null);
</script>

<template>
  <section class="store-sign-in">
    <div class="xl:container">
      <div class="row">
        <div class="form-column">
          <form @submit.prevent>
            <h1 class="page-heading">Sign In</h1>
            <p class="page-description">
              Sign in to register for programs, select memberships and more.
            </p>

            <label class="input-icon-component">
              <strong>Your email</strong>
              <div class="inp-box">
                <input
                  type="email"
                  placeholder="name@example.com"
                  class="form-control"
                  v-model="userEmail"
                />
                <Icon icon="fluent:mail-12-filled" class="icon" />
              </div>
            </label>

            <label class="input-icon-component">
              <strong>Password</strong>
              <div class="inp-box">
                <input
                  type="password"
                  placeholder="••••••••••"
                  class="form-control"
                  v-model="userPassword"
                />
                <KeyIcon class="icon" />
              </div>
            </label>

            <div class="form-helpers">
              <label class="checkbox-component">
                <input type="checkbox" />
                Remember me
              </label>

              <router-link :to="{ name: 'Forgot Password' }" class="reset-link">
                Forgot password?
              </router-link>
            </div>

            <button class="btn-submit btn-accent-1">Sign In</button>
          </form>

          <router-link
            :to="{ name: 'Create: Account Info' }"
            class="register-link"
          >
            Don't have an account yet?
            <strong>Create an Account</strong>
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
