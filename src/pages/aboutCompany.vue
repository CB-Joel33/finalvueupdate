<template>
  <section class="container mx-auto py-16 px-6 mt-17 font-poppins">
    <h2 class="text-4xl font-bold mb-8 text-center font-abel">About Zacrac Learning</h2>
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <img src="https://via.placeholder.com/500x300" alt="Company" class="rounded-2xl shadow-lg" />
      <div>
        <p class="text-gray-600 mb-4">
          Our company is built on trust, innovation, and excellence. 
          We specialize in delivering top-notch services tailored to your needs.
        </p>
        <p class="text-gray-600 mb-4">
          From startups to enterprises, we help businesses grow with cutting-edge 
          solutions and a passionate team.
        </p>
        <RouterLink to="/contact" class="bg-[#4D148C] text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 font-poppins font-semibold">
          Work With Us
        </RouterLink>
      </div>
    </div>
  </section>

  <footer class="bg-[#131313] text-white pt-10 pb-10 px-6 md:px-16 mt-8 font-poppins">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Logo & Branding -->
      <div class="flex flex-col gap-4">
        <router-link to="/">
          <img src="@/assets/Logo (1).png" class="w-40 md:w-48" />
        </router-link>
        <p class="font-abel text-2xl md:text-3xl">
          Africa’s No. 1 Data<br />School
        </p>
        <div class="flex -mx-2 items-center">
          <img src="@/assets/Frame 58.png" class="-mr-6" />
          <img src="@/assets/Frame 59.png" class="-mr-6" />
          <img src="@/assets/Frame 60.png" class="-mr-6" />
          <img src="@/assets/Frame 61.png" class="-mr-6" />
        </div>
        <p class="font-matter text-xs opacity-70">
          © Copyright 2025 All Rights Reserved
        </p>
      </div>

      <!-- Links Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <!-- Quick Links -->
        <div class="flex flex-col gap-2">
          <p class="font-bold font-poppins">Quick Links</p>
          <p class="text-xs font-poppins">Blog</p>
          <p class="text-xs font-poppins">Pricing</p>
          <p class="text-xs font-poppins">Instructors</p>
          <p class="text-xs font-poppins">Careers</p>
          <p class="text-xs font-poppins">Affiliate Program</p>
          <p class="text-xs font-poppins">Support</p>
          <p class="text-xs font-poppins">Terms & Condition</p>
          <p class="text-xs font-poppins">Privacy Policies</p>
        </div>

        <!-- Ways to Learn -->
        <div class="flex flex-col gap-2">
          <p class="font-bold font-poppins">Ways to Learn</p>
          <p class="text-xs font-poppins">Self-paced Courses</p>
          <p class="text-xs font-poppins">Incubator Programs</p>
          <p class="text-xs font-poppins">Cohort-based Courses</p>
          <p class="text-xs font-poppins">Enterprise Learning</p>
          <p class="text-xs font-poppins">Career-building Paths</p>
        </div>

        <!-- Courses -->
        <div class="flex flex-col gap-2">
          <p class="font-bold font-poppins">Courses</p>
          <p class="text-xs font-poppins">MS Excel</p>
          <p class="text-xs font-poppins">R</p>
          <p class="text-xs font-poppins">Power BI</p>
          <p class="text-xs font-poppins">Python</p>
          <p class="text-xs font-poppins">SQL</p>
        </div>
      </div>

      <!-- Visit & Newsletter -->
      <div class="flex flex-col gap-4">
        <p class="font-bold font-poppins">Visit Us</p>
        <p class="text-xs font-poppins">
          2nd Floor, Sovereign Trust Insurance Building, Alagbaka, Akure, Ondo State, Nigeria.
        </p>
        <p class="text-xs font-poppins">
          Be the first to know about our exciting offers on Data Science, AI, and ML courses.
        </p>
        <div class="flex items-center gap-2">
          <input 
            type="email" 
            placeholder="Type email Here..."
            class="bg-black text-white text-xs border-b-2 border-[#333385] h-8 w-40 px-2 focus:outline-none font-poppins" 
          />
          <img src="@/assets/Frame 527.png" class="h-8 w-8 object-contain" />
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
</style>
