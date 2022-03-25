<script setup>
  defineProps(['formName', 'bgUrl'])
</script>

<template>
  <div class="hero-banner"
       :style="{backgroundImage:`url(${'/src/assets/images/' + bgUrl})`}"
  >
    <div class="container">
      <h1>{{ formName }}</h1>
    </div>
  </div>
</template>
