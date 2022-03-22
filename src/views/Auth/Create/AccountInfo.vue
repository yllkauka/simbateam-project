<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import { countryList } from '@/helpers/countries.js';

const store = useStore();
const router = useRouter();

const countriesDropList = ref({
  label: 'Country',
  selectedItem: 'Please select',
  direction: '',
  options: [...countryList],
});

const windowInnerWidth = computed(() => store.state.windowInnerWidth);
watchEffect(() => {
  windowInnerWidth.value < 1280
    ? (countriesDropList.value.direction = '')
    : (countriesDropList.value.direction = 'to-top');
});

const NextStep = () => {
  router.push({ name: 'Create: Attendee Profiles' });
};
</script>

<template>
  <section class="account-info">
    <div class="page-info">
      <h1 class="page-heading">Create an Account</h1>
      <p class="page-description">
        Create an account to register for programs, select memberships and more.
      </p>
    </div>

    <form class="account-form" @submit.prevent>
      <div class="row">
        <div class="column">
          <div class="form-row">
            <label class="input-component">
              <strong>First Name</strong>
              <input
                type="text"
                placeholder="First Name"
                class="form-control"
                required
              />
            </label>
            <label class="input-component">
              <strong>Last Name</strong>
              <input
                type="text"
                placeholder="Last Name"
                class="form-control"
                required
              />
            </label>
          </div>
          <label class="input-component">
            <strong>Address Line One</strong>
            <input
              type="text"
              placeholder="Address line one"
              class="form-control"
              required
            />
          </label>
          <label class="input-component">
            <strong>
              Address Line Two
              <span class="font-normal text-gray-400">(Optional)</span>
            </strong>
            <input
              type="text"
              placeholder="Address line two"
              class="form-control"
            />
          </label>
          <div class="form-row">
            <label class="input-component">
              <strong>City</strong>
              <input
                type="text"
                placeholder="City"
                class="form-control"
                required
              />
            </label>
            <label class="input-component">
              <strong>State/Prov</strong>
              <input
                type="text"
                placeholder="State"
                class="form-control"
                required
              />
            </label>
          </div>
          <div class="form-row">
            <label class="input-component">
              <strong>Zip Code</strong>
              <input
                type="number"
                placeholder="Zip Code"
                class="form-control"
                required
              />
            </label>
            <BaseDropdown
              :dropdown="countriesDropList"
              class="countries-drop gray-bg"
            />
          </div>
        </div>
        <div class="column">
          <div class="form-row">
            <label class="input-component">
              <strong>Email</strong>
              <input
                type="email"
                placeholder="example@email.com"
                class="form-control"
                required
              />
            </label>
            <label class="input-component">
              <strong>Phone Number</strong>
              <input
                type="tel"
                placeholder="123-456-7890"
                class="form-control"
                required
              />
            </label>
          </div>
          <div class="form-row">
            <label class="input-component">
              <strong>Gender</strong>
              <p>Placeholder</p>
            </label>
            <label class="input-component">
              <strong>DOB (mm/dd/yyyy)</strong>
              <input type="date" class="form-control" required />
            </label>
          </div>
          <div class="form-row">
            <label class="input-component">
              <strong>Emergency Contact</strong>
              <input
                type="text"
                placeholder="First Last"
                class="form-control"
                required
              />
            </label>
            <label class="input-component">
              <strong>Emergency Contact Number</strong>
              <input
                type="tel"
                placeholder="123-456-7890"
                class="form-control"
                required
              />
            </label>
          </div>
          <div class="form-row">
            <label class="input-component">
              <strong>Password</strong>
              <input
                type="password"
                placeholder="••••••••••"
                class="form-control"
                required
              />
            </label>
            <label class="input-component">
              <strong>Confirm Password</strong>
              <input
                type="tel"
                placeholder="••••••••••"
                class="form-control"
                required
              />
            </label>
          </div>
        </div>
      </div>

      <p class="terms-policy-note">
        By creating an account I agree to the
        <a href="#" class="link">Terms of Use</a> and
        <a href="#" class="link">Privacy Policy</a>
      </p>

      <button class="btn-accent-1 btn-submit" @click.prevent="NextStep">
        Next
      </button>
    </form>
  </section>
</template>
