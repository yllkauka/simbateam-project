<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps(['cartItems']);

const customAmounts = ref([10, 25, 50, 75, 100]);

const cartClassesPrice = ref(0);
const totalCartItems = ref(0);
const totalCartPrice = ref(0);

if (props.cartItems.classes) {
  props.cartItems.classes.forEach((classBox) => {
    cartClassesPrice.value += classBox.price;
    totalCartPrice.value += classBox.price;
    totalCartItems.value += 1;
  });
}
if (props.cartItems.membership) {
  totalCartPrice.value += props.cartItems.membership.price;
  totalCartItems.value += 1;
}
if (props.cartItems.tax) {
  totalCartPrice.value += props.cartItems.tax;
}

const nextStep = () => {
  router.push({ name: 'Checkout: Payment Info' });
};
</script>

<template>
  <section class="second-column receipt-box">
    <div class="donation-box">
      <div class="box-info">
        <h2>Donation <span>(optional)</span></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          corporis nihil aliquid!
        </p>
      </div>

      <div class="donation-amount">
        <label
          class="check-input"
          v-for="amount in customAmounts"
          :key="amount"
        >
          <input
            type="radio"
            @change="$emit('toggleAmount', amount)"
            :value="amount"
            name="donationAmount"
          />
          &dollar;{{ amount }}
        </label>

        <div class="other-amount">
          <label class="check-input">
            <input
              type="radio"
              @change="$emit('toggleAmount', 'Other')"
              value="Other"
              name="donationAmount"
            />
            Other
          </label>
          <div class="inp-box">
            <input
              type="number"
              placeholder="0.00"
              class="form-control"
              :disabled="cartItems.donation.model !== 'Other'"
              @input="$emit('customAmount', $event.target.value)"
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

    <ul class="cart-stats">
      <li v-if="cartItems.classes && cartItems.classes.length">
        <span>Classes</span>
        <span>&dollar;{{ cartClassesPrice.toFixed(2) }}</span>
      </li>
      <li v-if="cartItems.membership">
        <span>Membership</span>
        <span>&dollar;{{ cartItems.membership.price.toFixed(2) }}</span>
      </li>
      <li v-if="cartItems.donation.value">
        <span>Donation</span>
        <span>&dollar;{{ cartItems.donation.value.toFixed(2) }}</span>
      </li>
      <li>
        <span>Tax</span>
        <span>&dollar;{{ cartItems.tax.toFixed(2) }}</span>
      </li>
      <li>
        <strong>{{ totalCartItems }} items</strong>
        <strong>
          Total:
          <span class="text-accent-2">
            &dollar;{{ totalCartPrice.toFixed(2) }}
          </span>
        </strong>
      </li>
    </ul>

    <button class="btn-accent-1 btn-submit" @click="nextStep">
      Continue Checkout
    </button>
  </section>
</template>
