<script setup>
  import { ref } from 'vue'
  const props = defineProps(['radiopicker'])
  const radioChosen = ref(props.radiopicker.radioChosen)
</script>

<template>
  <label class="input-component radio-picker">
    <div class="radio-picker-info">
      <strong>{{ radiopicker.text }}</strong>
      <p class="text-sm">{{ radiopicker.description }}</p>
    </div>
    <div class="radio-choices">
      <label
          class="radio-input"
          v-for="chosen in radiopicker.radioChoices"
          :key="chosen"
      >
        <input
            type="radio"
            :name="radiopicker.radioName"
            v-model="radioChosen.model"
            :value="chosen"
        />
        {{ chosen }}
      </label>
      <div class="other-choice">
        <label class="radio-input">
          <input
              type="radio"
              :name="radiopicker.radioName"
              v-model="radioChosen.model"
              value="Other"
          />
          Other
        </label>
        <div class="inp-box">
          <input
              type="text"
              placeholder="Custom input"
              class="form-control"
              :disabled="radioChosen.model !== 'Other'"
              v-model="radioChosen.value"
          />
        </div>
      </div>
    </div>
  </label>
</template>
