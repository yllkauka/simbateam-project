<script setup>
import { useRouter } from 'vue-router'
import Inputbox from '../../../components/Custom/Inputbox.vue'
import Banner from '../../../components/Custom/Banner.vue'
import Subtitle from '../../../components/Custom/Subtitle.vue'
import Dropdown from '../../../components/Custom/Dropdown.vue'
import Checkbox from '../../../components/Custom/Checkbox.vue'
import RadioPicker from '../../../components/Custom/RadioPicker.vue'
import CheckboxPicker from '../../../components/Custom/CheckboxPicker.vue'
import InputboxSpec from '../../../components/Custom/InputboxSpec.vue'
import Textarea from '../../../components/Custom/Textarea.vue'
import FileUpload from '../../../components/Custom/FileUpload.vue'

const router = useRouter()

const formData = {
  subtitle: {
    title: 'Some Subtitle Here',
    description: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur' +
        ' duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat' +
        ' incididunt sint deserunt ut voluptate aute id deserunt nisi.'
  },
  droplist: {
    label: 'Sample Full Column Dropdown',
    selectedItem: 'Sample Full Column Dropdown',
    direction: '',
    options: ['First', 'Second']
  },
  radiopicker: {
    text: 'Sampe Radio Picker',
    description: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt' +
        ' mollit dolore cillum minim tempor enim. Ilit aute irure tempor cupidatat.',
    radioName: 'radio',
    radioChoices: ['Option1', 'Option2', 'Option3', 'Option4', 'Option5'],
    radioChosen: {
      model: null,
      value: ''
    }
  },
  checkboxpicker: {
    text: 'Sample Checkbox Picker',
    description: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt' +
        ' mollit dolore cillum minim tempor enim. Ilit aute irure tempor cupidatat.',
    checkboxChoices: ['Option1', 'Option2', 'Option3', 'Option4', 'Option5'],
    checkboxChosen: {
      model: [false, false, false, false, false, false],
      value: ''
    }
  },
  halfDroplist: {
    label: 'Sample 1/2 Dropdown',
    selectedItem: 'Sample 1/2 Dropdown',
    direction: '',
    options: ['asd', 'qwe']
  }
}

</script>

<template>
  <section>
    <Banner
        form-name="Form Name"
        bg-url="demo1-banner.png"
    />
    <div class="container">
      <form class="form-container">
        <Subtitle
            :subtitle="formData.subtitle"
        />
        <div class="row">
          <div class="first column">
            <div class="half-input">
              <Inputbox
                  label="Sample 1/2 Input"
                  placeholder="Sample 1/2 Input"
              />
              <Inputbox
                  label="Sample 1/2 Input"
                  placeholder="Sample 1/2 Input"
              />
            </div>
            <Inputbox
                label="Sample Full Column Input"
                placeholder="Sample Full Column Input"
            />
            <Dropdown
                :droplist="formData.droplist"
            />
            <Checkbox
                text="Sample checkbox text"
            />
            <RadioPicker
                :radiopicker="formData.radiopicker"
            />
            <CheckboxPicker
                :checkboxpicker="formData.checkboxpicker"
            />
          </div>
          <div class="second column">
            <div class="half-input">
              <Dropdown
                  :droplist="formData.halfDroplist"
              />
              <InputboxSpec
                  label="Sample 1/2 Price"
                  placeholder="0.00"
                  icon="$"
              />
            </div>
            <InputboxSpec
                label="Sample Full URL"
                placeholder="www.example.com"
                icon="http://"
            />
            <div class="half-input">
              <InputboxSpec
                  label="Sample 1/2 Datepicker"
                  placeholder="mm/dd/yyyy"
                  icon="datepicker"
              />
              <InputboxSpec
                  label="Sample 1/2 Timepicker"
                  placeholder="8:00am"
                  icon="timepicker"
              />
            </div>
            <Textarea
                text="Sample Full Text Area With Description"
                description="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
                  mollit dolore cillum minim tempor enim. Ilit aute irure tempor cupidatat."
                placeholder="Sample Full Text Area"
            />
            <FileUpload
                text="Sample File Upload Section"
                description-one="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
                  mollit dolore cillum minim tempor enim. Ilit aute irure tempor cupidatat."
                description-two="Image must be smaller than 256MB | Accepted file types: PNG, JPG"
            />

          </div>
        </div>
        <footer class="footer-box">
          <Checkbox
              text="Some optional condition"
          />
          <button
              class="btn-submit btn-accent-1"
              @click.prevent
              :disabled="true"
          >
            Submit
          </button>
        </footer>
      </form>
    </div>
  </section>
</template>

<style>
@import url('../index.pcss');
</style>
