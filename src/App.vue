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


const hiddenRoutes = [
  '/login',
  '/register',
  '/otp-verification',
  '/forgot-password'
]


const hideHeader = computed(() => hiddenRoutes.includes(route.path))

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
