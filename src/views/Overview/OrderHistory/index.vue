<script setup>
import { ref } from 'vue';
const orders = ref([
  {
    number: '2841782752',
    items: ['Abstract Painting', 'Acrylic Landscape Painting', 'item'],
    total: 751.81,
    date: '12/22/2021',
  },
  {
    number: '588545872',
    items: ['Acrylic Landscape Painting'],
    total: 809.72,
    date: '12/22/2021',
  },
  {
    number: '824925145',
    items: ['Abstract Painting'],
    total: 809.72,
    date: '12/22/2021',
  },
  {
    number: '426575706',
    items: ['Abstract Painting', 'Acrylic Landscape Painting'],
    total: 751.81,
    date: '12/22/2021',
  },
  {
    number: '509344324',
    items: ['Acrylic Landscape Painting'],
    total: 809.72,
    date: '12/22/2021',
  },
  {
    number: '639138624',
    items: ['Abstract Painting'],
    total: 809.72,
    date: '12/22/2021',
  },
  {
    number: '391681900',
    items: [
      'Abstract Painting',
      'Acrylic Landscape Painting',
      'item',
      'item',
      'item',
      'item',
    ],
    total: 751.81,
    date: '12/22/2021',
  },
  {
    number: '196001464',
    items: [
      'Abstract Painting',
      'Acrylic Landscape Painting',
      'item',
      'item',
      'item',
      'item',
    ],
    total: 751.81,
    date: '12/22/2021',
  },
]);
</script>

<template>
  <section class="order-history-table">
    <div class="page-info">
      <h1 class="page-heading">Order History</h1>
      <p class="page-description">
        Access records of all your past orders and print out receipts if needed.
      </p>
    </div>

    <div class="orders-table">
      <header>
        <h6>Order number</h6>
        <h6>Items</h6>
        <h6>Total</h6>
        <h6>Date created</h6>
      </header>

      <div class="table-grid">
        <router-link
          :to="{
            name: 'Overview: Order Details',
            params: { orderId: order.number },
          }"
          class="box"
          v-for="(order, index) in orders"
          :key="index"
        >
          <div>
            <h6>Order number</h6>
            <h5 v-html="order.number"></h5>
          </div>
          <div>
            <h6>Items</h6>
            <ul class="items" :class="{ 'many-items': order.items.length > 2 }">
              <template
                v-for="(item, itemIndex) in order.items"
                :key="itemIndex"
              >
                <li v-if="itemIndex < 2" v-html="item"></li>
              </template>
              <span v-if="order.items.length > 2">
                , and {{ order.items.length - 2 }} more
              </span>
            </ul>
          </div>
          <div>
            <h6>Total</h6>
            <h5>
              <strong> &dollar;{{ order.total.toFixed(2) }} </strong>
            </h5>
          </div>
          <div>
            <h6>Date created</h6>
            <h5 v-html="order.date"></h5>
          </div>
        </router-link>
      </div>
    </div>

    <BasePagination />
  </section>
</template>
