<script setup>
defineProps(['subtitle'])
</script>

<template>
  <div class="form-info">
    <h1 class="page-heading">{{ subtitle.title }}</h1>
    <p class="page-description">
      {{ subtitle.description}}
    </p>
  </div>
</template>