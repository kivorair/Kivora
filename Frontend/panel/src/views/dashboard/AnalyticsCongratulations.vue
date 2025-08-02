<script setup>
import { useTheme } from 'vuetify'
import illustrationJohnDark from '@images/cards/illustration-john-dark.png'
import illustrationJohnLight from '@images/cards/illustration-john-light.png'

const { global } = useTheme()
const illustrationJohn = computed(() => global.name.value === 'dark' ? illustrationJohnDark : illustrationJohnLight)
</script>
<template>
  <VCard
    class="text-right glass-card"
    dir="rtl"
  >
    <VRow no-gutters>
      <VCol
        cols="12"
        sm="8"
        order="2"
        order-sm="1"
      >
        <VCardItem>
          <VCardTitle class="text-md-h5 text-primary">
            با «واژه‌نگار» بدرخش! ✨
          </VCardTitle>
        </VCardItem>

        <VCardText>
          <span>
            کپشن نوشتن سخته؟ بذار <strong>Kivora</strong> کمکت کنه!
            <br>
            با ابزار هوشمند <strong>واژه‌نگار</strong>، فقط موضوع پستتو بگو،
            <br>
            ما یه کپشن خلاق، حرفه‌ای و جذاب تحویلت می‌دیم!
          </span>
          <br>
          <VBtn
            variant="tonal"
            class="mt-4"
            size="small"
          >
            شروع با واژه‌نگار
          </VBtn>
        </VCardText>
      </VCol>

      <VCol
        cols="12"
        sm="4"
        order="1"
        order-sm="2"
        class="text-center"
      >
        <img
          :src="illustrationJohn"
          :height="$vuetify.display.xs ? '150' : '175'"
          :class="$vuetify.display.xs ? 'mt-6 mb-n2' : 'position-absolute'"
          class="john-illustration flip-in-rtl"
        >
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.10); // یا rgba(0, 0, 0, 0.2) برای تم تیره
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.john-illustration {
  inset-block-end: -0.0625rem;
  inset-inline-end: 3rem;
  float: right;
}
</style>
