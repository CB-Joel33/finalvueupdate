<template>
  <div>
    
    <Header v-if="!hideHeader" />
    <router-view />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Header from './components/Header.vue'


const route = useRoute()


const hiddenRoutes = [
  '/login',
  '/register',
  '/otp-verification',
  '/forgot-password'
]


const hideHeader = computed(() => hiddenRoutes.includes(route.path))
</script>

<style>

</style>
