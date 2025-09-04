<template>
  <section class="container mx-auto py-16 px-6 max-w-5xl mt-17 font-poppins">
    <h2 class="text-4xl font-bold mb-12 text-center font-abel">Contact Us</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      <!-- Contact Info -->
      <div class="space-y-6 bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <h3 class="text-2xl font-semibold mb-4">Get in Touch</h3>
        
        <div class="flex items-center gap-3">
          <span class="text-[#4D148C] text-xl">📞</span>
          <p class="text-sm">+234 888 888 8000</p>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-[#4D148C] text-xl">📧</span>
          <p class="text-sm">zacrac@gmail.com</p>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-[#4D148C] text-xl">📍</span>
          <p class="text-sm">2nd Floor, Sovereign Trust Insurance Building, Akure</p>
        </div>

        <!-- Social Links -->
        <div class="flex gap-4 mt-6">
          <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#4D148C] text-white hover:opacity-90">F</a>
          <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#4D148C] text-white hover:opacity-90">IG</a>
          <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#4D148C] text-white hover:opacity-90">X</a>
          <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#4D148C] text-white hover:opacity-90">in</a>
        </div>
      </div>

      <!-- Contact Form -->
      <form class="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 space-y-6">
        <input 
          type="text" 
          placeholder="Your Name" 
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4D148C]" 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4D148C]" 
        />
        <textarea 
          placeholder="Your Message" 
          rows="5" 
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4D148C]"
        ></textarea>
        <button 
          type="submit" 
          class="bg-[#4D148C] text-white px-6 py-3 rounded-lg hover:opacity-90 w-full font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>


<script setup>
</script>

<style scoped>
</style>
