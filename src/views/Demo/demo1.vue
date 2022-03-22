<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const radioChosen = ref({
  model: null,
  value: 0,
});
const radioChosenAmount = ref(null);
const radioChoices = ref(['Option1', 'Option2', 'Option3', 'Option4', 'Option5']);

const checkboxChoices = ref(['Option1', 'Option2', 'Option3', 'Option4', 'Option5']);
const checkboxChosen = ref({
  model: null,
  value: 0,
});

watchEffect(() => {
  if (radioChosen.value.model !== 'Other') {
    radioChosen.value.value = +radioChosen.value.model;
  } else {
    radioChosen.value.value = +radioChosen.value;
  }
});


const sampleFullDroplist = ref({
  label: 'Sample Full Column Dropdown',
  selectedItem: 'Sample Full Column Dropdown',
  direction: '',
  options: ['asd', 'qwe'],
});
const sampleHalfDroplist = ref({
  label: 'Sample 1/2 Dropdown',
  selectedItem: 'Sample 1/2 Dropdown',
  direction: '',
  options: ['asd', 'qwe'],
});
</script>

<template>
  <section class="landing-demo">
    <div class="hero-banner">
      <div class="container">
        <h1>Form Name</h1>
      </div>
    </div>
    <div class="container">
      <form class="landing-demo-form">
        <div class="form-info">
          <h1 class="page-heading">Some Subtitle Here</h1>
          <p class="page-description">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
          </p>
        </div>
        <div class="row">
          <div class="first column">
            <div class="half-input">
              <label class="input-component">
                <strong>Sample 1/2 Input</strong>
                <input
                  type="text"
                  placeholder="Sample 1/2 Input"
                  class="form-control"
                  required
                />
              </label>
              <label class="input-component">
                <strong>Sample 1/2 Input</strong>
                <input
                  type="text"
                  placeholder="Sample 1/2 Input"
                  class="form-control"
                  required
                />
              </label>
            </div>
            <label class="input-component">
              <strong>Sample Full Column Input</strong>
              <input
                type="text"
                placeholder="Sample Full Column Input"
                class="form-control"
                required
              />
            </label>
            <label class="input-component">
              <BaseDropdown
                :dropdown="sampleFullDroplist"
                class="gray-bg"
              />
            </label>
            <label class="input-component check-input">
              <input type="checkbox" />
              Sample checkbox text
            </label>
            <label class="input-component radio-picker">
              <div class="radio-picker-info">
                <strong>Sampe Radio Picker</strong>
                <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Ilit aute irure tempor cupidatat.</p>
              </div>
              <div class="radio-choices">
                <label
                  class="radio-input"
                  v-for="chosen in radioChoices"
                  :key="chosen"
                >
                  <input
                    type="radio"
                    v-model="radioChosen.model"
                    :value="chosen"
                  />
                  {{ chosen }}
                </label>
                <div class="other-choice">
                  <label class="radio-input">
                    <input
                      type="radio"
                      v-model="radioChosen.model"
                      value="Other"
                    />
                    Other
                  </label>
                  <div class="inp-box">
                    <input
                      type="number"
                      placeholder="Custom input"
                      class="form-control"
                      :disabled="radioChosen.model !== 'Other'"
                      v-model="radioChosen"
                    />
                  </div>
                </div>
              </div>
            </label>
            <div class="input-component checkbox-picker">
              <div class="checkbox-picker-info">
                <strong>Sample Checkbox Picker</strong>
                <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Ilit aute irure tempor cupidatat.</p>
              </div>
                <div class="checkbox-choices">
                <label
                  class="checkbox-input"
                  v-for="chosen in checkboxChoices"
                  :key="chosen"
                >
                  <input
                    type="checkbox"
                    v-model="checkboxChosen.model"
                    :value="chosen"
                  />
                  {{ chosen }}
                </label>
                <div class="other-choice">
                  <label class="checkbox-input">
                    <input
                      type="checkbox"
                      v-model="checkboxChosen.model"
                      value="Other"
                    />
                    Other
                  </label>
                  <div class="inp-box">
                    <input
                      type="number"
                      placeholder="Custom input"
                      class="form-control"
                      v-model="checkboxChosen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="second column">
            <div class="half-input">
              <label class="input-component">
                <BaseDropdown
                  :dropdown="sampleHalfDroplist"
                  class="gray-bg"
                />
              </label>
              <label class="input-component">
                <strong>Sample 1/2 Price</strong>
                <div class="inp-box">
                  <input
                    type="number"
                    placeholder="0.00"
                    class="form-control"
                    required
                  />
                  <span class="special-icon">&dollar;</span>
                </div>
              </label>
            </div>
            <div class="input-component">
              <strong>Sample Full URL</strong>
              <div class="inp-box">
                <input
                  type="text"
                  placeholder="www.example.com"
                  class="form-control"
                  required
                />
                <span class="special-icon">http://</span>
              </div>
            </div>
            <div class="half-input">
              <div class="input-component">
                <strong>Sample 1/2 Datepicker</strong>
                <div class="inp-box">
                  <input 
                    type="text" 
                    placeholder="mm/dd/yyyy" 
                    class="form-control"
                  />
                  <span class="special-icon"><i class="fa fa-calendar"></i></span>
                </div>                  
              </div>
              <div class="input-component">
                <strong>Sample 1/2 Timepicker</strong>
                <div class="inp-box">
                  <input
                    type="text"
                    placeholder="8:00am"
                    class="form-control"
                  />
                  <span class="special-icon"><i class="fa fa-clock"></i></span>
                </div>
              </div>
            </div>
            <label class="input-component textarea-input">
              <strong>Sample Full Text Area With Description</strong>
              <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Ilit aute irure tempor cupidatat.</p>
              <textarea
                class="form-control"
                placeholder="Sample Full Text Area"
              ></textarea>
            </label>
            <label class="input-component">
              <strong>Sample File Upload Section</strong>
              <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Ilit aute irure tempor cupidatat.</p>
              <p>Image must be smaller than 256MB | Accepted file types: PNG, JPG</p>
            </label>
          </div>
        </div>
        <footer class="footer-box">
          <label class="check-input">
            <input type="checkbox" />
            Some optional condition
          </label>
          <button
            class="btn-submit btn-accent-1"
            @click.prevent
            :disabled="!radioChosen.value"
          >
            Submit
          </button>
        </footer>
      </form>
    </div>
  </section>
</template>

<style>
@import url('./demo1.pcss');
</style>
