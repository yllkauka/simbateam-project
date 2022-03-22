<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import { PlusIcon, TrashIcon, XIcon } from '@heroicons/vue/outline';

const store = useStore();
const router = useRouter();

const savedPaymentCards = ref([
  {
    type: 'Visa',
    endingNumbers: '1234',
    owner: 'Joe Doe',
    expireDate: '06/25',
  },
  {
    type: 'Master Card',
    endingNumbers: '1234',
    owner: 'Joe Doe',
    expireDate: '06/25',
  },
  {
    type: 'Visa',
    endingNumbers: '1234',
    owner: 'Joe Doe',
    expireDate: '06/25',
  },
  {
    type: 'Master Card',
    endingNumbers: '1234',
    owner: 'Joe Doe',
    expireDate: '06/25',
  },
]);

const deleteCard = (index) => {
  savedPaymentCards.value.splice(index, 1);
};

const paymentModal = ref(false);

const windowInnerWidth = computed(() => store.state.windowInnerWidth);
</script>

<template>
  <section class="saved-payment-methods">
    <template v-if="!paymentModal || windowInnerWidth > 768">
      <div class="page-info">
        <h1 class="page-heading">Saved Payment Method(s)</h1>
        <p class="page-description">
          Add one or more payment methods to speed up the checkout process. You
          can also add them during checkout.
        </p>
      </div>

      <div class="saved-payments">
        <div
          class="payment-method"
          v-for="(card, index) in savedPaymentCards"
          :key="index"
        >
          <header>
            <h3 v-html="card.type"></h3>

            <div class="actions">
              <button class="delete-card" @click="deleteCard(index)">
                <TrashIcon class="icon" /> Delete
              </button>
            </div>
          </header>

          <ul>
            <li>Debit card ending in {{ card.endingNumbers }}</li>
            <li v-html="card.owner"></li>
            <li>Expires {{ card.expireDate }}</li>
          </ul>
        </div>

        <button class="add-new-payment" @click="paymentModal = true">
          <PlusIcon class="icon" /> New Payment Method
        </button>
      </div>
    </template>

    <BaseModal v-if="paymentModal">
      <div class="add-payment-modal">
        <button class="close-modal" @click="paymentModal = false">
          <XIcon class="icon" />
        </button>

        <div class="modal-info">
          <h2 class="page-heading">
            Add Payment Method
            <div class="payments-icons">
              <img src="@/assets/icons/visa.svg" />
              <img src="@/assets/icons/master-card.svg" />
              <img src="@/assets/icons/american-express.svg" />
              <img src="@/assets/icons/discover-network.png" />
            </div>
          </h2>
          <p class="page-description">
            These info will be saved under your account for future uses. There
            will be <strong>no charges</strong> to your card to add them.
          </p>
        </div>

        <form class="account-form" @submit.prevent>
          <label class="input-component">
            <strong>Card Number</strong>
            <input
              type="number"
              placeholder="Card Number"
              class="form-control"
              required
            />
          </label>
          <label class="input-component">
            <strong>Name On Card</strong>
            <input
              type="text"
              placeholder="First Last"
              class="form-control"
              required
            />
          </label>

          <div class="form-row">
            <label class="input-component">
              <strong>Expire Date</strong>
              <input
                type="text"
                placeholder="mm/yy"
                class="form-control"
                required
              />
            </label>
            <label class="input-component">
              <strong>CVV</strong>
              <input
                type="text"
                placeholder="123"
                class="form-control"
                required
              />
            </label>
          </div>

          <button
            class="btn-accent-1 btn-submit"
            @click.prevent="paymentModal = false"
          >
            Add Payment Method
          </button>
        </form>
      </div>
    </BaseModal>
  </section>
</template>
