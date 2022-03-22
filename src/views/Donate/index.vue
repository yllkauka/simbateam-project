<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

import { countryList } from '@/helpers/countries.js';

const router = useRouter();

const donation = ref({
  model: null,
  value: 0,
});
const donationAmount = ref(null);
const customAmounts = ref([25, 50, 100, 250, 500, 1000]);

watchEffect(() => {
  if (donation.value.model !== 'Other') {
    donation.value.value = +donation.value.model;
  } else {
    donation.value.value = +donationAmount.value;
  }
});

const isRecurrentDonation = ref(false);
const chargeDayDroplist = ref({
  label: 'Monthly Charge Day',
  options: [],
});

for (let i = 1; i <= 31; i++) {
  let s = ['th', 'st', 'nd', 'rd'];
  let v = i % 100;
  let option = `${i}<sup>${s[(v - 20) % 10] || s[v] || s[0]}</sup>`;
  chargeDayDroplist.value.options.push(option);
}

const countriesDroplist = ref({
  label: 'Country',
  selectedItem: 'Please select',
  direction: '',
  options: [...countryList],
});
</script>

<template>
  <section class="store-donate">
    <div class="hero-banner">
      <div class="container">
        <h1>Donate</h1>
      </div>
    </div>

    <div class="container">
      <form class="donate-form">
        <div class="form-info">
          <h1 class="page-heading">Make a Gift to Kirkland Arts Center!</h1>
          <p class="page-description">
            Your tax-deductible donation unleashes the power of art by
            supporting KAC's education and exhibition programming. Together, we
            are igniting individual growth, building community spirit, and
            cultivating cultural vibrancy. Thank you!
          </p>
        </div>

        <div class="row">
          <div class="first column">
            <div class="donation-box">
              <div class="box-info">
                <h2>Donation Detail</h2>
              </div>

              <div class="donation-amount">
                <label
                  class="radio-input"
                  v-for="amount in customAmounts"
                  :key="amount"
                >
                  <input
                    type="radio"
                    v-model="donation.model"
                    :value="amount"
                  />
                  &dollar;{{ amount }}
                </label>

                <div class="other-amount">
                  <label class="check-input">
                    <input
                      type="radio"
                      v-model="donation.model"
                      value="Other"
                    />
                    Other
                  </label>
                  <div class="inp-box">
                    <input
                      type="number"
                      placeholder="0.00"
                      class="form-control"
                      :disabled="donation.model !== 'Other'"
                      v-model="donationAmount"
                    />
                    <span class="special-icon">&dollar;</span>
                  </div>
                </div>
              </div>

              <label class="input-component acknowledgement">
                <strong>Acknowledgement</strong>
                <textarea
                  class="form-control"
                  placeholder="Eg: ‘The Lee family’ or ‘In memory of _______’"
                ></textarea>
              </label>
            </div>

            <div class="recurring-donation">
              <label class="check-input">
                <input type="checkbox" v-model="isRecurrentDonation" />
                Make this a recurring donation (per month)
              </label>

              <BaseDropdown
                :dropdown="chargeDayDroplist"
                class="charge-day"
                v-if="isRecurrentDonation"
              />
            </div>

            <div class="payment-box">
              <label class="input-component">
                <strong>Card Number</strong>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Card Number"
                />
              </label>
              <div class="row">
                <label class="input-component">
                  <strong>Name On Card</strong>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Last"
                  />
                </label>
                <label class="input-component">
                  <strong>Expire Date</strong>
                  <input type="text" class="form-control" placeholder="mm/yy" />
                </label>
                <label class="input-component">
                  <strong>CVV</strong>
                  <input type="number" class="form-control" placeholder="123" />
                </label>
              </div>
            </div>
          </div>
          <div class="second column">
            <div class="column-info">
              <h2>Contact Information</h2>
              <p>We will send you a tax receipt by mail.</p>
              <label class="check-input">
                <input type="checkbox" />
                I prefer that KAC do NOT publicly acknowledge my support.
              </label>
            </div>

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
                :dropdown="countriesDroplist"
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
          </div>
        </div>

        <footer class="footer-box">
          <label class="check-input">
            <input type="checkbox" />
            Add 3% to my total to help cover the payment processing fees
          </label>
          <button
            class="btn-submit btn-accent-1"
            @click.prevent
            :disabled="!donation.value"
          >
            Donate
            <span v-if="donation.value">&dollar;{{ donation.value }}</span>
          </button>
        </footer>
      </form>
    </div>
  </section>
</template>

<style>
@import url('./index.pcss');
</style>
