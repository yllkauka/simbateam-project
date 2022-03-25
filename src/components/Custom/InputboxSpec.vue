<script setup>
  import Datepicker from '../Icons/Datepicker.vue'
  import Timepicker from '../Icons/Timepicker.vue'

  defineProps(['label', 'placeholder', 'icon'])
</script>

<template>
  <label class="input-component">
    <strong>{{ label }}</strong>
    <div class="inp-box">
      <input
          type="text"
          :placeholder="placeholder"
          class="form-control"
          required
      />
      <span v-if="icon === 'datepicker'" class="special-icon">
        <Datepicker />
      </span>
      <span v-else-if="icon === 'timepicker'" class="special-icon">
        <Timepicker />
      </span>
      <span v-else class="special-icon">
        {{ icon }}
      </span>
    </div>
  </label>
</template>