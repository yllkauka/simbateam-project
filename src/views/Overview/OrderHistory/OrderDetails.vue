<script setup>
import { ref } from 'vue';

import {
  ChevronLeftIcon,
  DownloadIcon,
  PrinterIcon,
} from '@heroicons/vue/outline';

const props = defineProps(['orderId']);

const order = ref({
  date: '12/22/2021',
  number: props.orderId,
  cardEnd: 1234,
  classes: [
    {
      name: 'Abstract Painting',
      price: 250,
      attendee: {
        name: 'Joe Doe',
        email: 'joeemail@exmaple.com',
      },
      schedule: 'Mondays | 10:00 AM - 1:00 PM PST | 1/24/2022 - 3/7/2022',
    },
    {
      name: 'Acrylic Landscape Painting',
      price: 335,
      attendee: {
        name: 'Joe Doe',
        email: 'joeemail@exmaple.com',
      },
      schedule: 'Mondays | 10:00 AM - 1:00 PM PST | 1/24/2022 - 3/7/2022',
    },
  ],

  membership: {
    name: 'Education + Exhibiting Artist Gallery Membership',
    price: 210,
    member: {
      name: 'Joe Doe',
      email: 'joeemail@exmaple.com',
    },
    validation: 'Valid for one adult in one year',
  },
  donation: {
    value: 10,
    event: 'In memory of Mary Collins',
  },
  tax: 13.67,
});

const orderClassesPrice = ref(0);
const totalOrderItems = ref(0);
const totalOrderPrice = ref(0);

if (order.value.classes) {
  order.value.classes.forEach((classBox) => {
    orderClassesPrice.value += classBox.price;
    totalOrderPrice.value += classBox.price;
    totalOrderItems.value += 1;
  });
}
if (order.value.membership) {
  totalOrderPrice.value += order.value.membership.price;
  totalOrderItems.value += 1;
}
if (order.value.donation) {
  totalOrderPrice.value += order.value.donation.value;
  totalOrderItems.value += 1;
}
if (order.value.tax) {
  totalOrderPrice.value += order.value.tax;
}
</script>

<template>
  <section class="order-details">
    <router-link
      :to="{ name: 'Overview: Order History Table' }"
      class="go-back-link btn-accent-1"
    >
      <ChevronLeftIcon class="icon" /> Go Back
    </router-link>

    <div class="page-info">
      <h1 class="page-heading">Your Order On {{ order.date }}</h1>

      <div class="actions">
        <button class="btn">
          <DownloadIcon class="icon" />
          Download as PDF
        </button>
        <button class="btn">
          <PrinterIcon class="icon" />
          Print
        </button>
      </div>
    </div>

    <div class="order-receipt">
      <header class="receipt-header">
        <div class="box">
          <h5>Order number:</h5>
          <span v-html="order.number"></span>
        </div>
        <div class="box">
          <h5>Date Created:</h5>
          <span v-html="order.date"></span>
        </div>
        <div class="box">
          <h5>Payment method:</h5>
          <span>Credit Card ****{{ order.cardEnd }}</span>
        </div>
      </header>
      <div class="order-classes" v-if="order.classes">
        <div
          class="class-box"
          v-for="(box, index) in order.classes"
          :key="index"
        >
          <header>
            <h2 v-html="box.name"></h2>
            <h4>&dollar;{{ box.price.toFixed(2) }}</h4>
          </header>
          <p>
            Attendee:
            {{ box.attendee.name }}
            ({{ box.attendee.email }})
          </p>
          <p v-html="box.schedule"></p>
        </div>
      </div>

      <div class="membership" v-if="order.membership">
        <header>
          <h2 v-html="order.membership.name"></h2>
          <h4>&dollar;{{ order.membership.price.toFixed(2) }}</h4>
        </header>
        <p>
          For
          {{ order.membership.member.name }}
          ({{ order.membership.member.email }})
        </p>
        <p v-html="order.membership.validation"></p>
      </div>

      <div class="donation" v-if="order.donation">
        <header>
          <h2>Donation</h2>
          <h4>&dollar;{{ order.donation.value.toFixed(2) }}</h4>
        </header>
        <p v-html="order.donation.event"></p>
      </div>

      <ul class="stats">
        <li v-if="order.classes">
          <span>Classes</span>
          <span>&dollar;{{ orderClassesPrice.toFixed(2) }}</span>
        </li>
        <li v-if="order.membership">
          <span>Membership</span>
          <span>&dollar;{{ order.membership.price.toFixed(2) }}</span>
        </li>
        <li v-if="order.donation">
          <span>Donation</span>
          <span>&dollar;{{ order.donation.value.toFixed(2) }}</span>
        </li>
        <li>
          <span>Tax</span>
          <span>&dollar;{{ order.tax.toFixed(2) }}</span>
        </li>
        <li>
          <strong>{{ totalOrderItems }} item(s)</strong>
          <strong>
            Total:
            <span class="text-accent-2">
              &dollar;{{ totalOrderPrice.toFixed(2) }}
            </span>
          </strong>
        </li>
      </ul>
    </div>
  </section>
</template>
