<script setup>
import { ref } from 'vue';

const userEmail = ref(null);
const emailSent = ref(false);
</script>

<template>
  <section class="store-forgot-password">
    <div class="xl:container">
      <div class="row">
        <div class="form-column">
          <form @submit.prevent="emailSent = true" v-if="!emailSent">
            <h1 class="page-heading">Forgot Your Password?</h1>
            <p class="page-description">
              Don't worry! Type in your email and we will send you a code to
              reset your password.
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

            <button class="btn-submit btn-accent-1">Send Email</button>
          </form>

          <div class="email-sent" v-else>
            <img src="@/assets/icons/envelope-xxl.svg" class="page-icon" />
            <h1 class="page-heading">Check Your Email</h1>
            <p class="page-description">
              Click on the password reset link we sent to your email to set a
              new password.
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
