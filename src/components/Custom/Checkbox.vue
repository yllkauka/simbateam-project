<script setup>
defineProps(['text'])
</script>

<template>
  <label class="input-component check-input">
    <input type="checkbox"/>
    {{ text }}
  </label>
</template>