<template>
  <div class="ai-image-generator fill-area">
    <VCard flat class="w-100 h-100 d-flex flex-column justify-center align-center pa-6">
      <VCardTitle class="text-h5 font-weight-bold">
         تولید عکس با هوش مصنوعی
      </VCardTitle>

      <VCardText class="w-100" style="max-width: 600px">
        <VTextField
          v-model="prompt"
          label="توضیح تصویر (پرامپت)"
          outlined
          dense
          prepend-inner-icon="mdi-text-box-outline"
        />

        <VBtn color="primary" class="mt-3" @click="generateImage" :loading="loading">
          تولید تصویر
        </VBtn>

        <div v-if="imageUrl" class="mt-6 text-center">
          <h3 class="text-subtitle-1 mb-3"> تصویر تولید شده:</h3>
          <VImg :src="imageUrl" max-width="100%" height="400" contain />
        </div>
      </VCardText>
    </VCard>
  </div>
</template>

  

<script setup>
import { ref } from 'vue'

const prompt = ref('')
const imageUrl = ref('')
const loading = ref(false)

const generateImage = () => {
  loading.value = true
  imageUrl.value = ''

  setTimeout(() => {
    const seed = prompt.value.replace(/\s/g, '-') || 'ai'
    imageUrl.value = `https://picsum.photos/seed/${seed}/800/500`
    loading.value = false
  }, 1000)
}
</script>

<style scoped>
.fill-area {
  height: 100%;
  width: 100%;
  background: none;
}
</style>
