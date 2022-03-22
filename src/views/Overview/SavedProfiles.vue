<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useStore } from 'vuex';

import { countryList } from '@/helpers/countries.js';

import { PlusIcon, PencilIcon, TrashIcon, XIcon } from '@heroicons/vue/outline';

const store = useStore();

const attendeeProfiles = ref([
  {
    name: 'Joe Doe 1',
    email: 'joedoe123@gmail.com',
    phoneNumber: '123-456-7890',
    address: '123 Sample Street, Anytown, PA 19104, USA',
  },
  {
    name: 'Joe Doe 2',
    email: 'joedoe123@gmail.com',
    phoneNumber: '123-456-7890',
    address: '123 Sample Street, Anytown, PA 19104, USA',
  },
  {
    name: 'Joe Doe 3',
    email: 'joedoe123@gmail.com',
    phoneNumber: '123-456-7890',
    address: '123 Sample Street, Anytown, PA 19104, USA',
  },
]);

const deleteAttendee = (index) => {
  attendeeProfiles.value.splice(index, 1);
};

const attendeeModal = ref({
  modal: false,
  type: null,
});

const openAtendeeModal = (type) => {
  attendeeModal.value.modal = true;
  attendeeModal.value.type = type;
};

const closeAttendeeModal = () => {
  attendeeModal.value.modal = false;
  attendeeModal.value.type = null;
};

const addAttendeeProfile = () => {
  closeAttendeeModal();
};

const saveAttendeeInfo = () => {
  closeAttendeeModal();
};

const countriesDropList = ref({
  label: 'Country',
  selectedItem: 'Please select',
  direction: '',
  options: [...countryList],
});

const windowInnerWidth = computed(() => store.state.windowInnerWidth);
watchEffect(() => {
  windowInnerWidth.value < 1280
    ? (countriesDropList.value.direction = '')
    : (countriesDropList.value.direction = 'to-top');
});
</script>

<template>
  <section class="saved-profiles">
    <template v-if="!attendeeModal.modal || windowInnerWidth > 768">
      <div class="page-info">
        <h1 class="page-heading">Saved Profiles</h1>
        <p class="page-description">
          Create a profile for every class attendee in your household to speed
          up the checkout process. You can also add them during checkout.
        </p>
      </div>

      <div class="current-attendees">
        <div
          class="attendee-card"
          v-for="(attendee, index) in attendeeProfiles"
          :key="index"
        >
          <header>
            <h3 v-html="attendee.name"></h3>

            <div class="actions">
              <button class="edit-card" @click="openAtendeeModal('edit')">
                <PencilIcon class="icon" /> Edit
              </button>
              <button class="delete-card" @click="deleteAttendee(index)">
                <TrashIcon class="icon" /> Delete
              </button>
            </div>
          </header>

          <ul>
            <li v-html="attendee.email"></li>
            <li v-html="attendee.phoneNumber"></li>
            <li v-html="attendee.address"></li>
          </ul>
        </div>

        <button class="add-new-attendee" @click="openAtendeeModal('add')">
          <PlusIcon class="icon" /> New Profile
        </button>
      </div>
    </template>

    <BaseModal v-if="attendeeModal.modal">
      <div class="add-attendee-modal">
        <button class="close-modal" @click="closeAttendeeModal">
          <XIcon class="icon" />
        </button>

        <div class="modal-info">
          <h2 class="page-heading">
            <span v-if="attendeeModal.type === 'add'">Add</span>
            <span v-if="attendeeModal.type === 'edit'">Edit</span>
            Attendee Profile
          </h2>
          <p class="page-description">
            Add a new attendee profile to apply at checkout when they register
            for a class. These info will be saved under your account for future
            uses.
          </p>
        </div>

        <form class="account-form" @submit.prevent>
          <div class="row">
            <div class="column">
              <div class="form-row">
                <label class="input-component">
                  <strong>First Name</strong>
                  <input
                    type="text"
                    placeholder="First Name"
                    class="form-control"
                    required
                  />
                </label>
                <label class="input-component">
                  <strong>Last Name</strong>
                  <input
                    type="text"
                    placeholder="Last Name"
                    class="form-control"
                    required
                  />
                </label>
              </div>
              <label class="checkbox-component">
                <input type="checkbox" />
                Use the same address as account owner
              </label>
              <label class="input-component">
                <strong>Address Line One</strong>
                <input
                  type="text"
                  placeholder="Address line one"
                  class="form-control"
                  required
                />
              </label>
              <label class="input-component">
                <strong>
                  Address Line Two
                  <span class="font-normal text-gray-400">(Optional)</span>
                </strong>
                <input
                  type="text"
                  placeholder="Address line two"
                  class="form-control"
                />
              </label>
              <div class="form-row">
                <label class="input-component">
                  <strong>City</strong>
                  <input
                    type="text"
                    placeholder="City"
                    class="form-control"
                    required
                  />
                </label>
                <label class="input-component">
                  <strong>State/Prov</strong>
                  <input
                    type="text"
                    placeholder="State"
                    class="form-control"
                    required
                  />
                </label>
              </div>
              <div class="form-row">
                <label class="input-component">
                  <strong>Zip Code</strong>
                  <input
                    type="number"
                    placeholder="Zip Code"
                    class="form-control"
                    required
                  />
                </label>
                <BaseDropdown
                  :dropdown="countriesDropList"
                  class="countries-drop gray-bg"
                />
              </div>
            </div>
            <div class="column">
              <div class="form-row">
                <label class="input-component">
                  <strong>Email</strong>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    class="form-control"
                    required
                  />
                </label>
                <label class="input-component">
                  <strong>Phone Number</strong>
                  <input
                    type="tel"
                    placeholder="123-456-7890"
                    class="form-control"
                    required
                  />
                </label>
              </div>
              <div class="form-row">
                <label class="input-component">
                  <strong>Gender</strong>
                  <p>Placeholder</p>
                </label>
                <label class="input-component">
                  <strong>DOB (mm/dd/yyyy)</strong>
                  <input type="date" class="form-control" required />
                </label>
              </div>
              <div class="form-row">
                <label class="input-component">
                  <strong>Emergency Contact</strong>
                  <input
                    type="text"
                    placeholder="First Last"
                    class="form-control"
                    required
                  />
                </label>
                <label class="input-component">
                  <strong>Emergency Contact Number</strong>
                  <input
                    type="tel"
                    placeholder="123-456-7890"
                    class="form-control"
                    required
                  />
                </label>
              </div>
            </div>
          </div>

          <button
            class="btn-accent-1 btn-submit"
            v-if="attendeeModal.type === 'add'"
            @click.prevent="addAttendeeProfile"
          >
            Add Profile
          </button>
          <button
            class="btn-accent-1 btn-submit"
            v-if="attendeeModal.type === 'edit'"
            @click.prevent="saveAttendeeInfo"
          >
            Save
          </button>
        </form>
      </div>
    </BaseModal>
  </section>
</template>
