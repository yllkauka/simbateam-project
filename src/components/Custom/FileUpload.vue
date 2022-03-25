<script setup>
defineProps(['text', 'descriptionOne', 'descriptionTwo'])
</script>

<template>
  <label class="input-component">
    <strong>{{ text }}</strong>
    <p class="text-sm">{{ descriptionOne }}</p>
    <p class="text-sm">{{ descriptionTwo }}</p>
    <button
        class="btn-upload btn-accent-3"
    >
      + Add File
    </button>
  </label>
</template>