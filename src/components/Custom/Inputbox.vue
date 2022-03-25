<script setup>
  defineProps(['label', 'placeholder'])
</script>

<template>
  <label class="input-component">
    <strong>{{ label }}</strong>
    <input
        type="text"
        :placeholder="placeholder"
        class="form-control"
        required
    />
  </label>
</template>