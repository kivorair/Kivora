<script setup>
import avatar1 from '@images/avatars/avatar-1.png'

const accountData = {
  avatarImg: avatar1,
  firstName: 'امیرمحمد',
  lastName: 'غلام پور',
  email: 'amir@example.com',
  org: 'کییورا',
  phone: '(+98) 912-345-6789',
  address: '123 Main St, New York, NY 10001',
  state: 'Tehran',
  zip: '10001',
  country: 'IRAN',
  language: 'Persian',
  timezone: '(GMT+03:30) Tehran',
  currency: 'IRR',
}

const refInputEl = ref()
const accountDataLocal = ref(structuredClone(accountData))
const isAccountDeactivated = ref(false)

const resetForm = () => {
  accountDataLocal.value = structuredClone(accountData)
}

const changeAvatar = file => {
  const fileReader = new FileReader()
  const { files } = file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        accountDataLocal.value.avatarImg = fileReader.result
    }
  }
}

// reset avatar image
const resetAvatar = () => {
  accountDataLocal.value.avatarImg = accountData.avatarImg
}

const timezones = [
  '(GMT+03:30) Tehran',
]

const currencies = [
  'IRR',
]

const Language = [
  'Persian',
  'English(Soon)',
]
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Account Details">
        <VCardText class="d-flex">
          <!-- 👉 Avatar -->
          <VAvatar rounded="lg" size="100" class="me-6" :image="accountDataLocal.avatarImg" />

          <!-- 👉 Upload Photo -->
          <form class="d-flex flex-column justify-center gap-5">
            <div class="d-flex flex-wrap gap-2">
              <VBtn color="primary" @click="refInputEl?.click()">
                <VIcon icon="bx-cloud-upload" class="d-sm-none" />
                <span class="d-none d-sm-block">Upload new photo</span>
              </VBtn>

              <input ref="refInputEl" type="file" name="file" accept=".jpeg,.png,.jpg,GIF" hidden @input="changeAvatar">

              <VBtn type="reset" color="error" variant="tonal" @click="resetAvatar">
                <span class="d-none d-sm-block">پاک کردن</span>
                <VIcon icon="bx-refresh" class="d-sm-none" />
              </VBtn>
            </div>

            <p class="text-body-1 mb-0">
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </form>
        </VCardText>

        <VDivider />

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <!-- 👉 First Name -->
              <VCol md="6" cols="12">
                <VTextField v-model="accountDataLocal.firstName" placeholder="امیرمحمد" label="نام" />
              </VCol>

              <!-- 👉 Last Name -->
              <VCol md="6" cols="12">
                <VTextField v-model="accountDataLocal.lastName" placeholder=" رضایی" label="نام خانوادگی" />
              </VCol>

              <!-- 👉 Email -->
              <VCol cols="12" md="6">
                <VTextField v-model="accountDataLocal.email" label="E-mail" placeholder="kivora@gmail.com"
                  type="email" />
              </VCol>

              <!-- 👉 Organization -->
              <VCol cols="12" md="6">
                <VTextField v-model="accountDataLocal.org" label="شرکت" placeholder="کیوورا" />
              </VCol>

              <!-- 👉 Phone -->
              <VCol cols="12" md="6">
                <VTextField v-model="accountDataLocal.phone" label="شماره تماس" placeholder="(+98) 912-345-6789" />
              </VCol>

              <!-- 👉 Address -->
              <VCol cols="12" md="6">
                <VTextField v-model="accountDataLocal.address" label="نشانی"
                  placeholder="تهران، خیابان اصلی، پلاک ۱۲۳" />
              </VCol>

              <!-- 👉 State -->
              <VCol cols="12" md="6">
                <VTextField v-model="accountDataLocal.state" label="استان" placeholder="Tehran" />
              </VCol>

              <!-- 👉 Zip Code -->
              <VCol cols="12" md="6">
                <VTextField v-model="accountDataLocal.zip" label="کد پستی" placeholder="10001" />
              </VCol>

              <!-- 👉 Country -->
              <VCol cols="12" md="6">
                <VSelect v-model="accountDataLocal.country" label="Country"
                  :items="['USA', 'Canada', 'UK', 'India', 'Australia']" placeholder="Select Country" />
              </VCol>

              <!-- 👉 Language -->
              <VCol cols="12" md="6">
                <VSelect v-model="accountDataLocal.language" label="زبان" placeholder="Select Language"
                  :items="Language" />
              </VCol>

              <!-- 👉 Timezone -->
              <VCol cols="12" md="6">
                <VSelect v-model="accountDataLocal.timezone" label="Timezone" placeholder="Select Timezone"
                  :items="timezones" :menu-props="{ maxHeight: 200 }" />
              </VCol>

              <!-- 👉 Currency -->
              <VCol cols="12" md="6">
                <VSelect v-model="accountDataLocal.currency" label="Currency" placeholder="Select Currency"
                  :items="currencies" :menu-props="{ maxHeight: 200 }" />
              </VCol>

              <!-- 👉 Form Actions -->
              <VCol cols="12" class="d-flex flex-wrap gap-4">
                <VBtn>Save changes</VBtn>

                <VBtn color="secondary" variant="tonal" type="reset" @click.prevent="resetForm">
                  Reset
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Deactivate Account -->
      <VCard title="Deactivate Account">
        <VCardText>
          <div>
            <VCheckbox v-model="isAccountDeactivated" label="I confirm my account deactivation" />
          </div>

          <VBtn :disabled="!isAccountDeactivated" color="error" class="mt-3">
            Deactivate Account
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
