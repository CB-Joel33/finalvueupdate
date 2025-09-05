<template>
  <section class="container mx-auto py-16 px-6 max-w-6xl font-poppins mt-17">
    <h2 class="text-4xl font-bold mb-10 text-center font-abel">User Profile</h2>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Sidebar -->
      <div class="md:col-span-1 bg-white shadow-lg rounded-2xl p-4 border border-gray-100">
        <ul class="space-y-4">
          <li><button @click="activeTab = 'profile'" :class="tabClass('profile')">My Profile</button></li>
          <li><button @click="activeTab = 'courses'" :class="tabClass('courses')">Courses</button></li>
          <li><button @click="activeTab = 'billing'" :class="tabClass('billing')">Billing</button></li>
          <li><button @click="activeTab = 'security'" :class="tabClass('security')">Security</button></li>
          <li><button @click="activeTab = 'logout'" :class="tabClass('logout')">Logout</button></li>
        </ul>
      </div>

      <!-- Content Area -->
      <div class="md:col-span-3 bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        
        <!-- My Profile -->
        <div v-if="activeTab === 'profile'">
          <h3 class="text-2xl font-semibold mb-4">Basic Information</h3>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@email.com</p>
          <button class="mt-4 px-4 py-2 rounded-lg bg-[#4D148C] text-white font-semibold hover:bg-[#3a0f85]">
            Edit Info
          </button>
        </div>

        <!-- Courses -->
        <div v-if="activeTab === 'courses'">
          <h3 class="text-2xl font-semibold mb-4">My Courses</h3>
          <ul class="space-y-2">
            <li class="p-3 border rounded-lg">Python for Beginners</li>
            <li class="p-3 border rounded-lg">Data Science with R</li>
            <li class="p-3 border rounded-lg">SQL Fundamentals</li>
          </ul>

          <!-- History -->
          <h3 class="text-2xl font-semibold mt-6 mb-4">History</h3>
          <ul class="space-y-2">
            <li class="p-3 border rounded-lg">Completed: HTML & CSS Basics</li>
            <li class="p-3 border rounded-lg">Completed: Intro to JavaScript</li>
          </ul>
        </div>

        <!-- Billing -->
        <div v-if="activeTab === 'billing'">
          <h3 class="text-2xl font-semibold mb-4">Billing</h3>
          <p>No outstanding payments.</p>
          <button class="mt-4 px-4 py-2 rounded-lg border border-[#4D148C] text-[#4D148C] font-semibold hover:bg-purple-50">
            View Billing History
          </button>
        </div>

        <!-- Security -->
        <div v-if="activeTab === 'security'">
          <h3 class="text-2xl font-semibold mb-4">Security</h3>

          <!-- Change Password -->
          <router-link 
            to="/forgot-password" 
            class="block w-full mb-4 px-4 py-2 rounded-lg border border-black font-semibold text-center hover:bg-gray-100"
          >
            Change Password
          </router-link>
        </div>

        <!-- Logout -->
        <div v-if="activeTab === 'logout'">
          <h3 class="text-2xl font-semibold mb-4">Logout</h3>
          <p class="mb-4">Are you sure you want to log out?</p>
          <button 
            @click="logout" 
            class="w-full px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700"
          >
            Confirm Logout
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const activeTab = ref("profile")

// Sidebar tab button style
function tabClass(tab) {
  return [
    "w-full text-left px-4 py-2 rounded-lg font-medium",
    activeTab.value === tab
      ? "bg-[#4D148C] text-white"
      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
  ]
}

// Logout function
function logout() {
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  router.push("/login")
}
</script>
