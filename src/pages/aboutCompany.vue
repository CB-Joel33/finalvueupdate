<template>
  <section class="container mx-auto py-16 px-6 mt-17 font-poppins">
  <h2 class="text-4xl font-bold mb-8 text-center font-abel">About Zacrac Learning</h2>
  <div class="grid md:grid-cols-2 gap-2 items-center">
    <!-- Image fills column -->
    <img 
      src="@/assets/zacraclearningtachsesh.png" 
      alt="Company" 
      class="rounded-2xl shadow-lg w-full max-w-md"
    />

    <div>
      <p class="text-gray-700 mb-4 text-lg leading-relaxed max-w-[80ch]">
  At <span class="font-semibold text-[#4D148C]">Zacrac Learning</span>, we are more than just a school, 
  we are a community built on trust, innovation, and excellence. 
  Our focus is on creating a dynamic learning space where every student feels supported and motivated.
</p>

<p class="text-gray-700 mb-4 text-lg leading-relaxed max-w-[80ch]">
  Whether you’re a beginner or looking to sharpen your skills, 
  <span class="font-semibold">Zacrac is the perfect environment for learning coding</span>, 
  data science, and other in-demand tech skills. 
  With hands-on training and a passionate team of experts, 
  we prepare you for real career growth in tech.
</p>

      <RouterLink 
        to="/contact" 
        class="bg-[#4D148C] text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 font-poppins font-semibold"
      >
        Work With Us
      </RouterLink>
    </div>
  </div>
</section>


</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
</style>
