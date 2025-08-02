<script setup>
import { useTheme } from 'vuetify'
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import upgradeBannerDark from '@images/pro/upgrade-banner-dark.png'
import upgradeBannerLight from '@images/pro/upgrade-banner-light.png'
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

const vuetifyTheme = useTheme()

const upgradeBanner = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? upgradeBannerLight : upgradeBannerDark
})
</script>

<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <!-- 👉 Vertical nav toggle in overlay mode -->
        <IconBtn class="ms-n3 d-lg-none" @click="toggleVerticalOverlayNavActive(true)">
          <VIcon icon="bx-menu" />
        </IconBtn>

        <div class="d-flex align-center cursor-pointer" style="user-select: none;">
          <IconBtn class="me-2" href="" target="_blank" rel="noopener noreferrer">
            <VIcon icon="bxl-github" />
          </IconBtn>
        </div>

        <VSpacer />
        <IconBtn class="me-2">
          <VIcon icon="bx-bell" />
        </IconBtn>

        <NavbarThemeSwitcher class="me-2" />

        <UserProfile />
      </div>
    </template>

    <template #vertical-nav-content>
      <VerticalNavLink :item="{
        title: 'داشبورد',
        icon: 'bx-home',
        to: '/dashboard',
      }" />
      <VerticalNavSectionTitle :item="{
        heading: 'ابزار ها',
      }" />
      <VerticalNavLink :item="{
        title: 'واژه نگار',
        icon: 'mdi-text-box-edit-outline', 
        to: '/word-writer',
      }" />
      <VerticalNavLink :item="{
        title: 'نگاره ساز',
        icon: 'mdi-image-auto-adjust', 
        to: '/artist',
      }" />
      <VerticalNavLink :item="{
        title: 'هم کلام',
        icon: 'mdi-robot-outline',  
        to: '/hamkalam',
      }" />
      <VerticalNavSectionTitle :item="{
        heading: 'حساب کاربری',
      }" />
      <VerticalNavLink :item="{
        title: 'تنظیمات',
        icon: 'mdi-cog-outline', 
        to: '/account-settings',
      }" />
      
    </template>

    <template #after-vertical-nav-items>

      <a href="" rel="noopener noreferrer" style="margin-left: 7px;">
        <img :src="upgradeBanner" alt="upgrade-plan" transition="scale-transition" class="upgrade-banner mx-auto"
          style="max-width: 230px;">
      </a>
    </template>

    <!-- 👉 Pages -->
    <slot />

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
