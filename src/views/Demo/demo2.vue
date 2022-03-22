<script setup>
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

import { countryList } from '@/helpers/countries.js'

const router = useRouter()

const donation = ref({
  model: '',
  other: null,
  value: 0,
})
const donationAmount = ref(null)
const customAmounts = ref([
  'Painting',
  'Photography',
  'Textiles',
  'Ceramics',
  'Glass',
  'Wood',
  'Felt',
  'Furniture',
  'Cards/Paer',
  'Jewelry',
])

watchEffect(() => {
  if (donation.value.model !== 'Other') {
    donation.value.value = +donation.value.model
  } else {
    donation.value.value = +donationAmount.value
  }
})

const isRecurrentDonation = ref(false)
const chargeDayDroplist = ref({
  label: 'Monthly Charge Day',
  options: [],
})

for (let i = 1; i <= 31; i++) {
  let s = ['th', 'st', 'nd', 'rd']
  let v = i % 100
  let option = `${i}<sup>${s[(v - 20) % 10] || s[v] || s[0]}</sup>`
  chargeDayDroplist.value.options.push(option)
}

const countriesDroplist = ref({
  label: 'Country',
  selectedItem: 'Please select',
  direction: '',
  options: [...countryList],
})
</script>

<template>
  <section class="store-donate">
    <div class="hero-banner">
      <div class="container">
        <h1>Sauce for the Goose Artist Application</h1>
      </div>
    </div>

    <div class="container">
      <form class="donate-form">
        <div class="form-info">
          <h1 class="page-heading text-blue-500">
            Sauce for the Goose Artist Application
          </h1>
          <p class="page-description">
            Thank you for your interest in participating in Sauce for the Goose
            Art Market! The event will take place on Saturday, November 13 from
            10am-4pm at Princeton Shopping Center. The rain date is Novemvber
            14.
          </p>
        </div>

        <div class="row">
          <div class="first column">
            <div class="form-row">
              <label class="input-component">
                <strong>Email</strong>
                <input
                  type="email"
                  placeholder="Email"
                  class="form-control"
                  required
                />
              </label>
              <label class="input-component">
                <strong>Artist/vender name</strong>
                <input
                  type="text"
                  placeholder="Your answer"
                  class="form-control"
                  required
                />
              </label>
            </div>
            <div class="form-row">
              <label class="input-component">
                <strong>Artist Phone</strong>
                <input
                  type="tel"
                  placeholder="123-456-7890"
                  class="form-control"
                  pattern="[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]"
                  required
                />
              </label>
              <label class="input-component">
                <strong>Artist website</strong>
                <div class="inp-box">
                  <input
                    type="text"
                    placeholder="       www.example.com"
                    class="form-control"
                  />
                  <span class="special-icon">http://</span>
                </div>
              </label>
            </div>
            <div class="form-row">
              <label class="input-component">
                <strong>Artist instagram</strong>
                <div class="inp-box">
                  <input
                    type="text"
                    placeholder="       www.example.com"
                    class="form-control"
                  />
                  <span class="special-icon">http://</span>
                </div>
              </label>
            </div>
            <div class="form-row">
              <label class="input-component">
                <strong>Address line one</strong>
                <input
                  type="text"
                  placeholder="Address line one"
                  class="form-control"
                  required
                />
              </label>
            </div>
            <div class="form-row">
              <label class="input-component">
                <strong>Address line two</strong>
                <input
                  type="text"
                  placeholder="Address line two"
                  class="form-control"
                  required
                />
              </label>
            </div>
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
          </div>
          <div class="second column">
            <div class="form-row">
              <label class="input-component">
                <strong>
                  Brief description of your work to be offered for sale
                </strong>
                <textarea
                  type="textfield"
                  placeholder="Your answer"
                  class="form-control h-24 py-2.5"
                  required
                ></textarea>
              </label>
            </div>
            <div class="form-row">
              <label class="input-component">
                <strong>
                  Artwork category (check all that apply)
                </strong>
                <div class="donation-amount">
                  <label
                    class="radio-input"
                    v-for="amount in customAmounts"
                    :key="amount"
                  >
                    <input
                      name="checkbox"
                      type="checkbox"
                      :v-model="donation.model"
                      :key="amount"
                      :value="amount"
                    />
                    {{ amount }}
                  </label>

                  <div class="other-amount">
                    <label class="check-input">
                      <input
                        type="checkbox"
                        :v-model="donation.other"
                        value="Other"
                      />
                      Other
                    </label>
                    <div>
                      <input
                        type="text"
                        placeholder="Your answer"
                        class="form-control"
                        v-model="donationAmount"
                      />
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <div class="form-row">
              <label class="input-component">
                <strong>
                  Brief description of your work to be offered for sale
                </strong>
                <p>Include 5-10 photos that represent your work</p>
                <p>PLEASE INCLUDE YOUR LAST NAME IN TITLES OF IMAGES</p>
                <button class="btn-add" @click.prevent>
                  + Add file
                </button>
              </label>
            </div>
            <div class="form-row">
              <label class="input-component">
                <strong>
                  Card Number
                </strong>
                <input
                  type="text"
                  placeholder="Card Number"
                  class="form-control"
                  required
                />
              </label>
            </div>
            <div class="form-row">
              <label class="input-component">
                <strong>
                  Name on card
                </strong>
                <input
                  type="text"
                  placeholder="First Last"
                  class="form-control"
                  required
                />
              </label>
              <label class="input-component">
                <strong>
                  Expire Date
                </strong>
                <input
                  type="text"
                  placeholder="mm/dd"
                  class="form-control"
                  required
                />
              </label>
              <label class="input-component">
                <strong>
                  CVC
                </strong>
                <input
                  type="text"
                  placeholder="&bull;&bull;&bull;"
                  class="form-control"
                  required
                />
              </label>
            </div>
          </div>
        </div>

        <footer class="footer-box">
          <label class="check-footer">
            <input
              type="checkbox"
              class="mt-1"
              value="1"
              :v-model="donation.value"
            />
            By selecting this box, I am confirming that I am available on both
            Saturday, Nov.13 and Saturday. In the event of inclement weather on
            11/13, I agree to attend the event's rain date on 11/14
          </label>
          <button class="btn-submit btn-accent-1" @click.prevent>
            Submit
          </button>
        </footer>
      </form>
    </div>
  </section>
</template>

<style>
@import url('./demo2.pcss');
</style>
