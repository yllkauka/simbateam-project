<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import { ExclamationCircleIcon, XIcon } from '@heroicons/vue/outline';

import { countryList } from '@/helpers/countries.js';

const store = useStore();
const router = useRouter();

const windowInnerWidth = computed(() => store.state.windowInnerWidth);

const verified = ref(false);

const changePasswordModal = ref(false);
const resetEmailSent = ref(false);
const closeModal = () => {
  changePasswordModal.value = false;
  resetEmailSent.value = false;
};

const countriesDropList = ref({
  label: 'Country',
  selectedItem: 'Please select',
  direction: '',
  options: [...countryList],
});

// Leaving page modal
const changes = ref(true);
const alertModal = ref(false);
const targetRouter = ref(null);
const leavingRoute = ref(false);

router.beforeEach((to, from, next) => {
  if (router.currentRoute.value.name === 'Overview: Account Info') {
    if (changes.value) {
      targetRouter.value = null;
      if (leavingRoute.value) {
        leavingRoute.value = false;
        alertModal.value = false;
        next();
      } else {
        if (!alertModal.value) {
          alertModal.value = true;
          targetRouter.value = to.name;
          next(false);
        }
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

const leavePage = () => {
  leavingRoute.value = true;
  router.push({ name: targetRouter.value });
  alertModal.value = false;
  changes.value = false;
};

const closeAlert = () => {
  alertModal.value = false;
};
</script>

<template>
  <section class="account-info">
    <template v-if="!changePasswordModal || windowInnerWidth > 768">
      <div class="unverified-warning">
        <ExclamationCircleIcon class="icon" />
        <p>
          <b>Unverified account:</b>
          please verify your account by clicking the link we sent to your email
          joedoe@gmail.com
          <button>Resend Email</button>
        </p>
      </div>

      <div class="page-info">
        <h1 class="page-heading">
          Account Info
          <button class="change-password" @click="changePasswordModal = true">
            Change Password
          </button>
        </h1>
        <p class="page-description">
          You can make changes of your account details here.
        </p>
      </div>

      <form class="account-form" @submit.prevent>
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

        <div class="form-actions">
          <button class="btn-save btn-accent-1" @click.prevent>
            Save Changes
          </button>
          <button class="btn-discard" @click.prevent>Discard Changes</button>
        </div>
      </form>
    </template>

    <BaseModal v-if="changePasswordModal">
      <div class="change-password-modal">
        <button class="close-modal" @click="changePasswordModal = false">
          <XIcon class="icon" />
        </button>

        <div class="modal-info">
          <template v-if="!resetEmailSent">
            <h2 class="page-heading">Change Password</h2>
            <p class="page-description">
              Please type in your email below and we will send a link to reset
              your password.
            </p>

            <form class="modal-form">
              <label class="input-component">
                <strong>Your Account Email</strong>
                <input
                  type="email"
                  placeholder="example@email.com"
                  class="form-control"
                  required
                />
              </label>

              <button
                class="btn-accent-1 btn-submit"
                @click.prevent="resetEmailSent = true"
              >
                Send Email
              </button>
            </form>
          </template>
          <template v-else>
            <div class="reset-email-sent">
              <img
                src="@/assets/icons/envelope-xxl.svg"
                class="envelope-icon"
              />
              <h2 class="page-heading">Check Your Email</h2>
              <p class="page-description">
                Click on the password reset link we sent to your email to set a
                new password.
              </p>

              <button class="btn-accent-1 btn-submit" @click="closeModal">
                Done
              </button>
            </div>
          </template>
        </div>
      </div>
    </BaseModal>

    <BaseAlert v-if="alertModal" @close="closeAlert" @leave="leavePage" />
  </section>
</template>
