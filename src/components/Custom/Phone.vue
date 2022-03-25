<script setup>
defineProps(['label', 'placeholder'])
</script>

<template>
  <label className="input-component">
    <strong>{{ label }}</strong>
    <input
        type="tel"
        :placeholder="placeholder"
        class="form-control"
        pattern="[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]"
        required
    />
  </label>
</template>