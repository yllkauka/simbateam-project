<script setup>
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

import { countryList } from '@/helpers/countries.js'
import Banner from '../../../components/Custom/Banner.vue'
import Subtitle from '../../../components/Custom/Subtitle.vue'
import Inputbox from '../../../components/Custom/Inputbox.vue'
import InputboxSpec from '../../../components/Custom/InputboxSpec.vue'
import Phone from '../../../components/Custom/Phone.vue'
import Dropdown from '../../../components/Custom/Dropdown.vue'
import Textarea from '../../../components/Custom/Textarea.vue'
import CheckboxPicker from '../../../components/Custom/CheckboxPicker.vue'
import FileUpload from '../../../components/Custom/FileUpload.vue'

const router = useRouter()


const formData = {
  subtitle: {
    title: 'Sauce for the Goose Artist Application',
    description: 'Thank you for your interest in participating in Sauce for the Goose ' +
        'Art Market! The event will take place on Saturday, November 13 from ' +
        '10am-4pm at Princeton Shopping Center. The rain date is Novemvber 14'
  },
  droplist: {
    label: 'Country',
    selectedItem: 'Please select',
    direction: '',
    options: [...countryList]
  },
  checkboxpicker: {
    text: 'Artwork category (check all that apply)',
    description: '',
    checkboxChoices: ['Painting', 'Photography', 'Textiles', 'Ceramics', 'Glass', 'Wood', 'Felt', 'Furniture', 'Cards/Paer', 'Jewelry'],
    checkboxChosen: {
      model: [false, false, false, false, false, false, false, false, false, false, false],
      value: ''
    }
  }
}
</script>

<template>
  <section>
    <Banner
        form-name="Sauce for the Goose Artist Application"
        bg-url="demo2-banner.png"
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
                  label="Email"
                  placeholder="Email"
              />
              <Inputbox
                  label="Artist/vender name"
                  placeholder=""
              />
            </div>
            <div class="half-input">
              <Phone
                  label="Artist Phone"
                  placeholder="123-456-7890"
              />
              <InputboxSpec
                  label="Artist website"
                  placeholder="www.example.com"
                  icon="http://"
              />
            </div>
            <InputboxSpec
                label="Artist instagram"
                placeholder="www.example.com"
                icon="http://"
            />
            <Inputbox
                label="Address line one"
                placeholder="Address line one"
            />
            <Inputbox
                label="Address line two"
                placeholder="Address line two"
            />
            <div class="half-input">
              <Inputbox
                  label="City"
                  placeholder="City"
              />
              <Inputbox
                  label="State/Prov"
                  placeholder="State"
              />
            </div>
            <div class="half-input">
              <Inputbox
                  label="Zip Code"
                  placeholder="Zip Code"
              />
              <Dropdown
                  :droplist="formData.droplist"
              />
            </div>
          </div>
          <div class="second column">
            <Textarea
                text="Brief description of your work to be offered for sale"
                description=""
                placeholder="Your answer"
            />
            <CheckboxPicker
                :checkboxpicker="formData.checkboxpicker"
            />
            <FileUpload
                text="Brief description of your work to be offered for sale"
                description-one="Include 5-10 photos that represent your work"
                description-two="PLEASE INCLUDE YOUR LAST NAME IN TITLES OF IMAGES"
            />
            <Inputbox
                text="Card Number"
                placeholder="Card Number"
            />
            <div class="row">
              <Inputbox
                  label="Name on card"
                  placeholder="First Last"
              />
              <Inputbox
                  label="Expire Date"
                  placeholder="mm/dd"
              />
              <Inputbox
                  label="CVC"
                  placeholder="123"
              />
            </div>
          </div>
        </div>
        <footer class="footer-box">
          <label class="check-footer">
            <input
                type="checkbox"
                class="mt-1"
                value="1"
            />
            By selecting this box, I am confirming that I am available on both
            Saturday, Nov.13 and Saturday. In the event of inclement weather on
            11/13, I agree to attend the event's rain date on 11/14
          </label>
          <button class="btn-submit btn-accent-1" @click.prevent>
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