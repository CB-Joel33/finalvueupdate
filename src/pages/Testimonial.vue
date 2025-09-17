<template>
  <section class="container mx-auto py-16 px-6 max-w-5xl mt-17 font-poppins">
    <h2 class="text-4xl font-bold text-center mb-10 font-abel">
      What Our Clients Say
    </h2>

    <!-- Testimonials list (leave your static ones untouched) -->
    <div class="grid md:grid-cols-3 gap-8 mb-12">
      <div
        v-for="(t, i) in testimonials"
        :key="i"
        class="bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
      >
        <p class="text-gray-600 mb-4 font-poppins">"{{ t.message }}"</p>
        <div class="flex items-center space-x-4">
          <img :src="t.image" alt="client" class="rounded-full w-12 h-12" />
          <div>
            <p class="font-semibold font-poppins">{{ t.name }}</p>
            <p class="text-sm text-gray-500 font-poppins">{{ t.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Testimonial Form -->
    <form
      @submit.prevent="submitComment"
      class="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 space-y-4"
    >
      <h3 class="text-xl font-semibold">Leave a Testimonial</h3>

      <input
        v-model="job"
        type="text"
        placeholder="Your Job Title"
        class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4D148C]"
        required
      />

      <textarea
        v-model="comment"
        placeholder="Your Testimonial (min 20 characters)"
        rows="4"
        class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4D148C]"
        required
      ></textarea>

      <button
        :disabled="loading"
        :class="{ 'opacity-50 cursor-not-allowed': loading }"
        type="submit"
        class="bg-[#4D148C] text-white px-6 py-3 rounded-lg hover:opacity-90 font-semibold"
      >
        <span v-if="!loading">Post Testimonial</span>
        <span v-else>Posting...</span>
      </button>

      <!-- Always show "Sent" -->
      <p v-if="successMessage || errorMessage" class="text-green-600 font-medium mt-2">
        Sent
      </p>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const job = ref("");
const comment = ref("");
const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

// Static testimonials for display only (unchanged)
const testimonials = ref([
  {
    name: "James Rhine",
    role: "Product Manager",
    message: "Amazing experience working with this company!",
    image: "/default-avatar.png",
  },
  {
    name: "Douglas Warden",
    role: "Web Developer",
    message: "I really learnt a lot in Zacrac.",
    image: "/default-avatar.png",
  },
  {
    name: "Lorenzo Carl",
    role: "Designer",
    message: "The instructors were so helpful!",
    image: "/default-avatar.png",
  },
]);

async function submitComment() {
  if (!job.value.trim() || !comment.value.trim()) {
    errorMessage.value = "error"; // we still set it, but UI always shows "Sent"
    return;
  }

  if (comment.value.trim().length < 20) {
    errorMessage.value = "error";
    return;
  }

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  if (!userId || !token) {
    errorMessage.value = "error";
    return;
  }

  loading.value = true;
  errorMessage.value = "";
  successMessage.value = "";

  try {
    await axios.post(
      `https://zacraclearningwebsite.onrender.com/user/testimonials?userId=${userId}`,
      {
        job: job.value,
        comment: comment.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    job.value = "";
    comment.value = "";
    successMessage.value = "success"; // UI will just show "Sent"
  } catch (err) {
    console.error("Error submitting:", err);
    errorMessage.value = "error"; // UI still just shows "Sent"
  } finally {
    loading.value = false;
  }
}
</script>
