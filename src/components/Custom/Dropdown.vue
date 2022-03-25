<script setup>
defineProps(['droplist'])
</script>

<template>
  <div class="input-component">
    <BaseDropdown
        :dropdown="droplist"
        class="gray-bg"
    />
  </div>
</template>