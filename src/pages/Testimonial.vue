<template>
  <section class="container mx-auto py-16 px-6 max-w-5xl mt-17 font-poppins">
    <h2 class="text-4xl font-bold text-center mb-10 font-abel">What Our Clients Say</h2>

    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="(testimonial, index) in testimonials" :key="index"
        class="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        <p class="text-gray-600 mb-4 font-poppins">"{{ testimonial.message }}"</p>
        <div class="flex items-center space-x-4">
          <img :src="testimonial.image" alt="client" class="rounded-full w-12 h-12"/>
          <div>
            <p class="font-semibold font-poppins">{{ testimonial.name }}</p>
            <p class="text-sm text-gray-500 font-poppins">{{ testimonial.role }}</p>
          </div>
        </div>
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
        <p class="font-abel text-2xl md:text-3xl">Africa’s No. 1 Data<br> School</p>
        <div class="flex -mx-2 items-center">
          <img src="@/assets/Frame 58.png" class="-mr-6" />
          <img src="@/assets/Frame 59.png" class="-mr-6" />
          <img src="@/assets/Frame 60.png" class="-mr-6" />
          <img src="@/assets/Frame 61.png" class="-mr-6" />
        </div>
        <p class="font-matter text-xs opacity-70">© Copyright 2025 All Rights Reserved</p>
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
        <p class="text-xs font-poppins">2nd Floor, Sovereign Trust Insurance Building, Alagbaka, Akure, Ondo State, Nigeria.</p>
        <p class="text-xs font-poppins">Be the first to know about our exciting offers on Data Science, AI, and ML courses.</p>
        <div class="flex items-center gap-2">
          <input type="email" placeholder="Type email Here..."
            class="bg-black text-white text-xs border-b-2 border-[#333385] h-8 w-40 px-2 focus:outline-none font-poppins" />
          <img src="@/assets/Frame 527.png" class="h-8 w-8 object-contain" />
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
const testimonials = [
  {
    name: "James Rhine",
    role: "Product Manager",
    message: "Amazing experience working with this company!",
    image: "https://via.placeholder.com/50"
  },
  {
    name: "Douglas Warden",
    role: "Web Developer",
    message: "i really learnt a lot in zacrac.",
    image: "https://via.placeholder.com/50"
  },
  {
    name: "Lorenzo Carl",
    role: "Designer",
    message: "something ",
    image: "https://via.placeholder.com/50"
  }
];
</script>

<style scoped>
</style>
