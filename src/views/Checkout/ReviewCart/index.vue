<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useStore } from 'vuex';

import { countryList } from '@/helpers/countries.js';

import { XIcon } from '@heroicons/vue/outline';

import CartItemsColumn from './CartItems.vue';
import ReceiptBoxColumn from './ReceiptBox.vue';

import class1Img from '@/assets/images/placeholders/classes/class-3.png';
import class2Img from '@/assets/images/placeholders/classes/class-5.png';
import membershipImg from '@/assets/images/memberships/1.jpg';

const store = useStore();

const cartItems = ref({
  classes: [
    {
      id: 'GD6CdyRNRP',
      image: class1Img,
      category: 'Youth',
      type: 'onsite',
      name: 'Family Art Studio, Ages 2-4 with an adult',
      code: 'B11.15.ST',
      instructor: { name: 'Shannon Hopkins' },
      schedule: 'Mondays | 10:00 AM - 11:00 AM PST | 1/10/2022 - 3/7/2022',
      location: 'Mezzanine Studio, Kirkland Arts Center',
      level: 'All Levels',
      price: 200,
    },
    {
      id: 'gjKqNYiDKz',
      image: class2Img,
      category: '2D',
      type: 'onsite',
      name: 'Acrylic Landscape Painting',
      code: 'B11.15.ST',
      instructor: { name: 'Sharon Maughan' },
      schedule: 'Mondays | 6:00 PM - 9:00 PM PST | 1/10/2022 - 3/14/2022',
      location: 'Mezzanine Studio, Kirkland Arts Center',
      level: 'Beginning, Intermediate',
      price: 335,
    },
  ],
  membership: {
    image: membershipImg,
    name: 'Education + Exhibiting Artist Gallery Membership',
    validation: 'Valid for one adult in one year',
    price: 210,
  },

  donation: {
    model: null,
    value: null,
  },
  tax: 12.34,
});

const donationAmount = ref(null);

watchEffect(() => {
  if (cartItems.value.donation.model !== 'Other') {
    cartItems.value.donation.value = +cartItems.value.donation.model;
  } else {
    cartItems.value.donation.value = +donationAmount.value;
  }
});

const deleteClass = (index) => {
  cartItems.value.classes.splice(index, 1);
};

const deleteMembership = () => {
  delete cartItems.value.membership;
};

const attendeeModal = ref(false);
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
</script>

<template>
  <div class="review-cart">
    <template v-if="!attendeeModal || windowInnerWidth > 768">
      <div class="page-info">
        <h1 class="page-heading">Review Cart</h1>
        <p class="page-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit illum
          iste, facere sint repellat quo excepturi fugit rem aut similique nulla
          illo, reiciendis dolorem voluptaipus iusto dolores expedita fuga harum
          tempora asperiores quos vel impedit.
        </p>
      </div>

      <div class="content-grid">
        <CartItemsColumn
          :cartItems="cartItems"
          @openModal="attendeeModal = true"
          @deleteClass="deleteClass"
          @deleteMembership="deleteMembership"
        />

        <ReceiptBoxColumn
          :cartItems="cartItems"
          @toggleAmount="cartItems.donation.model = $event"
          @customAmount="donationAmount = $event"
        />
      </div>
    </template>

    <BaseModal v-if="attendeeModal">
      <div class="add-attendee-modal">
        <button class="close-modal" @click="attendeeModal = false">
          <XIcon class="icon" />
        </button>

        <div class="modal-info">
          <h2 class="page-heading">Add Attendee Profile</h2>
          <p class="page-description">
            Add a new attendee profile to apply at checkout when they register
            for a class. These info will be saved under your account for future
            uses.
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
              <label class="checkbox-component">
                <input type="checkbox" />
                Use the same address as account owner
              </label>
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
            </div>
          </div>

          <button
            class="btn-accent-1 btn-submit"
            @click.prevent="attendeeModal = false"
          >
            Add Profile
          </button>
        </form>
      </div>
    </BaseModal>
  </div>
</template>
