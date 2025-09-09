<template>
  <div>
    <Header v-if="!hideHeader" @selectDepartment="goToDepartment" />
    <router-view />
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import Header from './components/Header.vue'

const route = useRoute()
const router = useRouter()

// Routes where the header should be hidden
const hiddenRoutes = [
  '/login',
  '/register',
  '/otp-verification',
  '/forgot-password',
  '/resetpassword'
]

// Hide header if current path starts with any of the hidden routes
const hideHeader = computed(() => 
  hiddenRoutes.some(routePath => route.path.startsWith(routePath))
)

function goToDepartment(dept) {
  router.push({ path: "/", query: { dept } })
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
