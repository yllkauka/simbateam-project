<script setup>
import { ref, watchEffect } from 'vue';
import { useStore } from 'vuex';

const props = defineProps(['classId', 'classBox']);

const store = useStore();

const selectedSessiosCounter = ref(0);
const totalSessionsPrice = ref(0);
if (props.classBox.sessions && props.classBox.sessions.length) {
  props.classBox.sessions.forEach((session) => {
    totalSessionsPrice.value += session.rate;
  });
}
const totalSelectedSessionsPrice = ref(0);
const allSessionsSelected = ref(false);
const sessionsAddedToCart = ref(0);

watchEffect(() => {
  if (props.classBox.sessions && props.classBox.sessions.length) {
    selectedSessiosCounter.value = props.classBox.sessions.filter(
      (session) => session.selected
    ).length;
    totalSelectedSessionsPrice.value = 0;
    props.classBox.sessions.forEach((session) => {
      if (session.selected) {
        totalSelectedSessionsPrice.value += session.rate;
      }
    });
    totalSelectedSessionsPrice.value === totalSessionsPrice.value
      ? (allSessionsSelected.value = true)
      : (allSessionsSelected.value = false);
    if (selectedSessiosCounter.value > 0) {
      if (sessionsAddedToCart.value !== selectedSessiosCounter.value) {
      }
    }
  }
});

const addToCart = () => {
  store.commit('classes/toggleToCart', props.classId);
};

const toggleSessionSelecting = (index) => {
  store.commit('classes/toggleSession', { classId: props.classId, index });
};

const toggleAllSessions = () => {
  store.commit('classes/toggleAllSessions', {
    classId: props.classId,
    value: allSessionsSelected.value,
  });
};

const addSessionsToCart = () => {
  sessionsAddedToCart.value = selectedSessiosCounter.value;
  addToCart();
};
</script>

<template>
  <div class="sessions-wrapper">
    <div class="class-sessions">
      <header>
        <label>
          <input
            type="checkbox"
            v-model="allSessionsSelected"
            @change="toggleAllSessions"
          />
          <b>Select all</b>
        </label>
        <h5>Class Name</h5>
        <h5>Date</h5>
        <h5>Rate</h5>
      </header>

      <div
        class="session-row"
        v-for="(session, index) in classBox.sessions"
        :key="index"
      >
        <input
          type="checkbox"
          :checked="session.selected"
          @change="toggleSessionSelecting(index)"
        />
        <div class="box">
          <span class="box-label">Session Name</span>
          <h4 v-html="session.name"></h4>
        </div>
        <div class="box">
          <span class="box-label">Date</span>
          <span v-html="session.date"></span>
        </div>
        <div class="box">
          <span class="box-label">Rate</span>
          <strong>&dollar;{{ session.rate.toFixed(2) }}</strong>
        </div>
      </div>

      <footer>
        <p>{{ selectedSessiosCounter }} session(s) selected</p>
        <strong
          >Total:
          <span>&dollar;{{ totalSelectedSessionsPrice.toFixed(2) }}</span>
        </strong>
      </footer>
    </div>

    <button
      class="btn-accent-1 btn-cart-sessions"
      :disabled="
        selectedSessiosCounter === 0 ||
        sessionsAddedToCart === selectedSessiosCounter
      "
      @click="addSessionsToCart"
    >
      <span v-if="selectedSessiosCounter === 0" v-html="'Select to Add'"></span>

      <span v-else>
        <span
          v-if="sessionsAddedToCart === selectedSessiosCounter"
          v-html="`${selectedSessiosCounter} Session(s) Added to Cart`"
        >
        </span>
        <span
          v-else
          v-html="`Add ${selectedSessiosCounter} session(s) to Cart`"
        ></span>
      </span>
    </button>
  </div>
</template>
