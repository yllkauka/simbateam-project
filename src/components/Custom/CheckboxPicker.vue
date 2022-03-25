<script setup>
  import { ref } from 'vue'

  const props = defineProps(['checkboxpicker'])
  const checkboxChosen = ref(props.checkboxpicker.checkboxChosen)
</script>

<template>
  <div class="input-component checkbox-picker">
    <div class="checkbox-picker-info">
      <strong>{{ checkboxpicker.text }}</strong>
      <p class="text-sm">{{ checkboxpicker.description }}</p>
    </div>
    <div class="checkbox-choices">
      <label
          class="checkbox-input"
          v-for="(chosen, index) in checkboxpicker.checkboxChoices"
          :key="chosen"
      >
        <input
            type="checkbox"
            v-model="checkboxChosen.model[index]"
            :value="chosen"
        />
        {{ chosen }}
      </label>
      <div class="other-choice">
        <label class="checkbox-input">
          <input
              type="checkbox"
              v-model="checkboxChosen.model[checkboxChosen.model.length - 1]"
              value="Other"
          />
          Other
        </label>
        <div class="inp-box">
          <input
              type="number"
              placeholder="Custom input"
              class="form-control"
              :disabled="!checkboxChosen.model[checkboxChosen.model.length - 1]"
              v-model="checkboxChosen.value"
          />
        </div>
      </div>
    </div>
  </div>
</template>
