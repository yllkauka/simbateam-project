<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import class1Img from '@/assets/images/placeholders/classes/class-3.png';
import class2Img from '@/assets/images/placeholders/classes/class-5.png';
import membershipImg from '@/assets/images/memberships/1.jpg';

const router = useRouter();

const savedPayments = ref([
  {
    id: 'q1ZRApnTvO',
    type: 'Visa',
    endingNumber: '1234',
    holder: 'Joe Doe',
    expireDate: '12/23',
  },
  {
    id: 'QeRKoWMJuP',
    type: 'Visa',
    endingNumber: '5678',
    holder: 'Joe Doe',
    expireDate: '12/26',
  },
]);

const selectedPayment = ref(null);
if (savedPayments.value && savedPayments.value.length) {
  selectedPayment.value = savedPayments.value[0].id;
}

const cartItems = ref({
  classes: [
    {
      id: 'GD6CdyRNRP',
      image: class1Img,
      name: 'Family Art Studio, Ages 2-4 with an adult',
      price: 200,
      attendee: {
        name: 'Joe Doe',
        email: 'joeemail@example.com',
      },
    },
    {
      id: 'gjKqNYiDKz',
      image: class2Img,
      name: 'Acrylic Landscape Painting',
      price: 335,
      attendee: {
        name: 'Joe Doe',
        email: 'joeemail@example.com',
      },
    },
  ],
  membership: {
    image: membershipImg,
    name: 'Education + Exhibiting Artist Gallery Membership',
    member: {
      name: 'Joe Doe',
      email: 'joeemail@example.com',
    },
    price: 210,
  },

  donation: {
    event: 'In memory of Mary Collins',
    value: 10,
  },
  tax: 12.34,
});

const deleteClass = (index) => {
  cartItems.value.classes.splice(index, 1);
};

const deleteMembership = () => {
  delete cartItems.value.membership;
};
const deleteDonation = () => {
  delete cartItems.value.donation;
};

const cartClassesPrice = ref(0);
const totalCartItems = ref(0);
const totalCartPrice = ref(0);

if (cartItems.value.classes) {
  cartItems.value.classes.forEach((classBox) => {
    cartClassesPrice.value += classBox.price;
    totalCartPrice.value += classBox.price;
    totalCartItems.value += 1;
  });
}
if (cartItems.value.membership) {
  totalCartPrice.value += cartItems.value.membership.price;
  totalCartItems.value += 1;
}
if (cartItems.value.donation) {
  totalCartPrice.value += cartItems.value.donation.value;
  totalCartItems.value += 1;
}
if (cartItems.value.tax) {
  totalCartPrice.value += cartItems.value.tax;
}

const nextStep = () => {
  router.push({ name: 'Checkout: Confirmation' });
};
</script>

<template>
  <section class="payment-info">
    <div class="page-info">
      <h1 class="page-heading">Add Payment Info</h1>
      <p class="page-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam cumque
        quod voluptatum voluptatibus quia architecto. Cumque voluptatum, dicta
        repellat officia non assumenda impedit accusamus, architecto, amet
        suscipit error esse aut.
      </p>
    </div>

    <div class="content-grid">
      <div class="first-column">
        <div>
          <h3 class="col-heading">Payment Method</h3>

          <template v-if="savedPayments.length">
            <div class="saved-payments">
              <label
                class="payment-box"
                v-for="(payment, index) in savedPayments"
                :key="index"
              >
                <input
                  type="radio"
                  v-model="selectedPayment"
                  :value="payment.id"
                />

                <p>
                  <strong v-html="payment.type"></strong>
                  <span> Debit card ending in {{ payment.endingNumber }} </span>
                  <span v-html="payment.holder"></span>
                  <span> Expires {{ payment.expireDate }} </span>
                </p>
              </label>

              <label class="new-payment">
                <input
                  type="radio"
                  v-model="selectedPayment"
                  value="new payment"
                />
                Use a new payment method
              </label>
            </div>
          </template>

          <template
            v-if="!savedPayments.length || selectedPayment === 'new payment'"
          >
            <div class="methods-images">
              <img src="@/assets/icons/visa.svg" />
              <img src="@/assets/icons/master-card.svg" />
              <img src="@/assets/icons/american-express.svg" />
            </div>

            <div class="payment-form">
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
          </template>

          <!-- <label class="input-component gift-code success"> -->
          <!-- <label class="input-component gift-code error"> -->
          <label class="input-component gift-code">
            <strong>Gift Certificate</strong>
            <input
              type="text"
              class="form-control"
              placeholder="(if applicable)"
            />
            <!-- <span>$20 off. Gift certificate applied successfully.</span> -->
            <!-- <span>Invalid code</span> -->
          </label>
        </div>
        <button class="btn-accent-1 btn-submit" @click="nextStep">
          Pay $989
        </button>
      </div>

      <div class="second-column">
        <h3 class="col-heading">Cart Items</h3>

        <div class="classes-items" v-if="cartItems.classes.length">
          <div
            class="class-box"
            v-for="(classBox, index) in cartItems.classes"
            :key="index"
          >
            <div class="box-image">
              <img :src="classBox.image" />
            </div>
            <div class="box-content">
              <div class="first-row">
                <h2 v-html="classBox.name"></h2>
                <p>
                  Attendee: {{ classBox.attendee.name }} ({{
                    classBox.attendee.email
                  }})
                </p>
              </div>

              <div class="second-row">
                <h2>&dollar;{{ classBox.price.toFixed(2) }}</h2>
              </div>
            </div>

            <button class="btn-delete" @click="deleteClass(index)">
              <img src="@/assets/icons/trash.svg" />
            </button>
          </div>
        </div>

        <div class="membership-box" v-if="cartItems.membership">
          <div class="box-image">
            <img :src="cartItems.membership.image" />
          </div>
          <div class="box-content">
            <div class="first-row">
              <h2 v-html="cartItems.membership.name"></h2>
              <p class="box-validation">
                For {{ cartItems.membership.member.name }} ({{
                  cartItems.membership.member.email
                }})
              </p>
            </div>

            <div class="second-row">
              <h2>&dollar;{{ cartItems.membership.price.toFixed(2) }}</h2>
            </div>
          </div>

          <button class="btn-delete" @click="deleteMembership">
            <img src="@/assets/icons/trash.svg" />
          </button>
        </div>

        <div class="donation-box" v-if="cartItems.donation">
          <div class="box-content">
            <div class="first-row">
              <h2>Donation</h2>
              <p v-html="cartItems.donation.event"></p>
            </div>

            <div class="second-row">
              <h2>&dollar;{{ cartItems.donation.value.toFixed(2) }}</h2>
            </div>
          </div>

          <button class="btn-delete" @click="deleteDonation">
            <img src="@/assets/icons/trash.svg" />
          </button>
        </div>

        <ul class="cart-stats">
          <li v-if="cartItems.classes">
            <span>Classes</span>
            <span>&dollar;{{ cartClassesPrice.toFixed(2) }}</span>
          </li>
          <li v-if="cartItems.membership">
            <span>Membership</span>
            <span>&dollar;{{ cartItems.membership.price.toFixed(2) }}</span>
          </li>
          <li v-if="cartItems.donation">
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
      </div>
    </div>
  </section>
</template>
