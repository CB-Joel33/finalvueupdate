<template>
  <section class="container mx-auto py-16 px-6 max-w-5xl mt-17 font-poppins">
    <h2 class="text-4xl font-bold mb-12 text-center font-abel">Contact Us</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      <!-- Contact Info -->
      <div class="space-y-6 bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <h3 class="text-2xl font-semibold mb-4">Get in Touch</h3>
        
        <div class="flex items-center gap-3">
          <span class="text-[#4D148C] text-xl">📞</span>
          <p class="text-sm">+234 811 032 5878</p>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-[#4D148C] text-xl">📧</span>
          <p class="text-sm text-blue-500">hello@zacrac.com</p>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-[#4D148C] text-xl">📍</span>
          <p class="text-sm">2nd Floor, Sovereign Trust Insurance Building, Akure</p>
        </div>

        <!-- Social Links -->
        <div class="flex gap-4 mt-6">
          <a href="https://www.facebook.com/zacraclearning/" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition">
            <img src="@/assets/facebookimage.png" alt="Facebook" class="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/zacraclearning/" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition">
            <img src="@/assets/instagramimage.png" alt="Instagram" class="w-6 h-6" />
          </a>
          <a href="https://x.com/zacraclearning?lang=en" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition">
            <img src="@/assets/ximage.png" alt="X" class="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/company/zacraclearning/?originalSubdomain=ng" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition">
            <img src="@/assets/linkedinimage.png" alt="LinkedIn" class="w-6 h-6" />
          </a>
        </div>
      </div>

      <!-- Contact Form -->
      <form @submit.prevent="submitContact" class="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 space-y-6">
        <input 
          v-model="name"
          type="text" 
          placeholder="Your Name" 
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4D148C]" 
          required
        />
        <input 
          v-model="email"
          type="email" 
          placeholder="Your Email" 
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4D148C]" 
          required
        />
        <textarea 
          v-model="message"
          placeholder="Your Message" 
          rows="5" 
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4D148C]"
          required
        ></textarea>
        <button 
          type="submit" 
          class="bg-[#4D148C] text-white px-6 py-3 rounded-lg hover:opacity-90 w-full font-semibold"
        >
          Send Message
        </button>

        <!-- Feedback messages -->
        <p v-if="successMessage" class="text-green-600 font-medium mt-2">{{ successMessage }}</p>
        <p v-if="errorMessage" class="text-red-600 font-medium mt-2">{{ errorMessage }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"

// form fields
const name = ref("")
const email = ref("")
const message = ref("")

// feedback messages
const successMessage = ref("")
const errorMessage = ref("")

// submit handler
async function submitContact() {
  successMessage.value = ""
  errorMessage.value = ""

  try {
    const response = await axios.post("https://zacraclearningwebsite.onrender.com/user/contact-us", {
      name: name.value,
      email: email.value,
      message: message.value
    })

    // reset form
    name.value = ""
    email.value = ""
    message.value = ""

    successMessage.value = "Your message has been sent successfully!"
    console.log("✅ Contact message submitted:", response.data)
  } catch (error) {
    console.error("❌ Error submitting contact form:", error.response?.data || error.message)
    errorMessage.value = error.response?.data?.message || "Something went wrong. Please try again later."
  }
}
</script>
