<template>
  <section class="container mx-auto py-16 px-6 max-w-5xl mt-17 font-poppins">
    <h2 class="text-4xl font-bold text-center mb-10 font-abel">What Our Clients Say</h2>

    <!-- Reviews Grid -->
    <div class="grid md:grid-cols-3 gap-8 mb-12">
      <div 
        v-for="(testimonial, index) in testimonials" 
        :key="index"
        class="bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
      >
        <p class="text-gray-600 mb-4 font-poppins">"{{ testimonial.message }}"</p>
        <div class="flex items-center space-x-4">
          <img 
            :src="testimonial.image" 
            alt="client" 
            class="rounded-full w-12 h-12"
          />
          <div>
            <p class="font-semibold font-poppins">{{ testimonial.name }}</p>
            <p class="text-sm text-gray-500 font-poppins">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Comment Form -->
    <form 
      @submit.prevent="submitComment" 
      class="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 space-y-4"
    >
      <h3 class="text-xl font-semibold">Leave a Comment</h3>
      
      <input 
        v-model="commentName"
        type="text" 
        placeholder="Your Job Title" 
        class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4D148C]" 
        required
      />

      <textarea 
        v-model="commentMessage"
        placeholder="Your Comment" 
        rows="4" 
        class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4D148C]"
        required
      ></textarea>

      <button 
        type="submit" 
        class="bg-[#4D148C] text-white px-6 py-3 rounded-lg hover:opacity-90 font-semibold"
      >
        Post Comment
      </button>

      <!-- Success message -->
      <p v-if="successMessage" class="text-green-600 font-medium mt-2">
        {{ successMessage }}
      </p>

      <!-- Error message -->
      <p v-if="errorMessage" class="text-red-600 font-medium mt-2">
        {{ errorMessage }}
      </p>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"

// Demo testimonials
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
    message: "I really learnt a lot in Zacrac.",
    image: "https://via.placeholder.com/50"
  },
  {
    name: "Lorenzo Carl",
    role: "Designer",
    message: "The instructors were so helpful!",
    image: "https://via.placeholder.com/50"
  }
]

// Form fields
const commentName = ref("")
const commentMessage = ref("")

// Feedback messages
const successMessage = ref("")
const errorMessage = ref("")

// Submit comment to backend API
async function submitComment() {
  successMessage.value = ""
  errorMessage.value = ""

  try {
    await axios.post("https://your-backend-api.com/reviews", {
      jobTitle: commentName.value,
      message: commentMessage.value
    })

    // Clear inputs
    commentName.value = ""
    commentMessage.value = ""

    // Show thank you message
    successMessage.value = "Thank you for your comment!"
  } catch (error) {
    console.error("Error submitting comment:", error)
    errorMessage.value = "Something went wrong. Please try again later."
  }
}
</script>
