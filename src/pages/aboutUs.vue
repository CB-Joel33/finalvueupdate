<template>
  <section class="container mx-auto py-16 px-6 text-center mt-17 font-poppins">
    <h2 class="text-4xl font-bold mb-6 font-abel"></h2>
    <p class="text-gray-600 max-w-2xl mx-auto mb-8">
     
    </p>
    <RouterLink 
      to="/contact" 
      class="bg-[#4D148C] text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 font-poppins font-semibold"
    >
      Contact Us
    </RouterLink>
  </section>

  
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
</style>
