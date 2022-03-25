<script setup>
defineProps(['text', 'description', 'placeholder'])
</script>

<template>
  <label class="input-component textarea-input">
    <strong>{{ text }}</strong>
    <p v-if="description !== ''" class="text-sm mb-3">{{ description }}</p>
    <textarea
        class="form-control"
        :placeholder="placeholder"
    ></textarea>
  </label>
</template>