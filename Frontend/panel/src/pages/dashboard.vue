<script setup>
import AnalyticsCongratulations from '@/views/dashboard/AnalyticsCongratulations.vue'

// 👉 Images
import chart from '@images/cards/chart-success.png'
import wallet from '@images/cards/wallet-info.png'
</script>

<template>
  <VRow>
    <!-- 👉 Congratulations -->
    <VCol cols="12" md="8">
      <AnalyticsCongratulations />
    </VCol>

    <!-- <VCol cols="12" sm="4">
      <VRow>
        <VCol cols="12" md="6">
          <CardStatisticsVertical v-bind="{
            title: 'Profit',
            image: chart,
            stats: '$12,628',
            change: 72.80,
          }" />
        </VCol>
        <VCol cols="12" md="6">
          <CardStatisticsVertical v-bind="{
            title: 'Sales',
            image: wallet,
            stats: '$4,679',
            change: 28.42,
          }" />
        </VCol>
      </VRow>
    </VCol> -->

  </VRow>
</template>
