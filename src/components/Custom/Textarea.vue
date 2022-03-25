<script setup>
defineProps(['text', 'description', 'placeholder'])
</script>

<template>
  <label class="input-component textarea-input">
    <strong>{{ text }}</strong>
    <p class="text-sm">{{ description }}</p>
    <textarea
        class="form-control"
        :placeholder="placeholder"
    ></textarea>
  </label>
</template>