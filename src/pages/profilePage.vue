<template>
  <section class="container mx-auto py-16 px-6 max-w-6xl font-poppins mt-17">
    <h2 class="text-4xl font-bold mb-10 text-center font-abel">User Profile</h2>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Sidebar -->
      <div class="md:col-span-1 bg-white shadow-lg rounded-2xl p-4 border border-gray-100">
        <ul class="space-y-4">
          <li>
            <button @click="activeTab = 'profile'" :class="tabClass('profile')">My Profile</button>
          </li>
          <li>
            <button @click="activeTab = 'courses'" :class="tabClass('courses')">Courses</button>
          </li>
          <li>
            <button @click="activeTab = 'billing'" :class="tabClass('billing')">Billing</button>
          </li>
          <li>
            <button @click="activeTab = 'security'" :class="tabClass('security')">Security</button>
          </li>
          <li>
            <button @click="activeTab = 'logout'" :class="tabClass('logout')">Logout</button>
          </li>
        </ul>
      </div>

      <!-- Content Area -->
      <div class="md:col-span-3 bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        
        <!-- My Profile -->
        <div v-if="activeTab === 'profile'">
          <h3 class="text-2xl font-semibold mb-4">Basic Information</h3>
          <p><strong>Name:</strong> {{ user.name || "Not set" }}</p>
          <p><strong>Email:</strong> {{ user.email || "Not set" }}</p>
        </div>

        <!-- Courses -->
        <div v-if="activeTab === 'courses'">
          <h3 class="text-2xl font-semibold mb-4">My Courses</h3>
          <ul class="space-y-2">
            <li
              v-for="(c, i) in courses"
              :key="i"
              class="p-3 border rounded-lg"
            >
              {{ c.course?.title || "Untitled Course" }}
            </li>
          </ul>
          <div v-if="courses.length === 0">
            <p>No active courses found.</p>
          </div>
        </div>

        <!-- Billing -->
        <div v-if="activeTab === 'billing'">
          <h3 class="text-2xl font-semibold mb-4">Billing / Transactions</h3>
          <ul class="space-y-2">
            <li
              v-for="t in billing"
              :key="t._id"
              class="p-3 border rounded-lg flex justify-between items-center"
            >
              <div>
                <p class="font-medium">{{ t.course?.title || "Unknown Course" }}</p>
                <p class="text-sm text-gray-500">Ref: {{ t.reference }}</p>
                <p class="text-sm"
                   :class="t.status === 'completed' ? 'text-green-600' : 'text-yellow-600'">
                  {{ t.status }}
                </p>
              </div>
              <span class="font-semibold">₦{{ t.price.toLocaleString() }}</span>
            </li>
          </ul>

          <div v-if="billing.length === 0">
            <p>No billing history available.</p>
          </div>
        </div>

        <!-- Security -->
        <div v-if="activeTab === 'security'">
          <h3 class="text-2xl font-semibold mb-4">Security</h3>
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
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import axios from "axios"

const router = useRouter()
const activeTab = ref("profile")

// ---------------- Data ----------------
const user = ref({
  name: localStorage.getItem("username") || localStorage.getItem("registered_name") || "",
  email: localStorage.getItem("email") || ""
})
const courses = ref([])
const billing = ref([])

// ---------------- Sidebar button styling ----------------
function tabClass(tab) {
  return [
    "w-full text-left px-4 py-2 rounded-lg font-medium",
    activeTab.value === tab
      ? "bg-[#4D148C] text-white"
      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
  ]
}

// ---------------- Logout ----------------
function logout() {
  localStorage.removeItem("token")
  localStorage.removeItem("userId")
  localStorage.removeItem("email")
  localStorage.removeItem("username")
  localStorage.removeItem("registered_name")
  router.push("/login")
}

// ---------------- Fetch user profile ----------------
async function fetchProfile() {
  try {
    const token = localStorage.getItem("token")
    const email = localStorage.getItem("email")
    if (!token || !email) return

    const res = await axios.post(
      "https://zacraclearningwebsite.onrender.com/user/profile",
      { email },
      { headers: { Authorization: `Bearer ${token}` } }
    )

    if (res.data.name) {
      user.value.name = res.data.name
      localStorage.setItem("username", res.data.name)
      localStorage.setItem("registered_name", res.data.name)
    }
    if (res.data.email) {
      user.value.email = res.data.email
      localStorage.setItem("email", res.data.email)
    }
  } catch (err) {
    console.error("Error fetching profile:", err.response?.data || err.message)
  }
}

// ---------------- Fetch courses ----------------
async function fetchCourses() {
  try {
    const userId = localStorage.getItem("userId")
    if (!userId) return
    const res = await axios.get(
      `https://zacraclearningwebsite.onrender.com/user/currently-doing?userId=${userId}`
    )
    courses.value = res.data || []
  } catch (err) {
    console.error("Error fetching courses:", err.response?.data || err.message)
  }
}

// ---------------- Fetch billing ----------------
async function fetchBilling() {
  try {
    const userId = localStorage.getItem("userId")
    if (!userId) return
    const res = await axios.get(
      `https://zacraclearningwebsite.onrender.com/user/transaction-history?userId=${userId}`
    )
    billing.value = res.data || []
  } catch (err) {
    console.error("Error fetching billing:", err.response?.data || err.message)
  }
}

// ---------------- Run on mounted ----------------
onMounted(() => {
  fetchProfile()
  fetchCourses()
  fetchBilling()
})
</script>
