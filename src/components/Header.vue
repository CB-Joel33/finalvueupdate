<template>
  <div
    style="width: 100%; height: 100px; position: fixed; top: 0; left: 0; z-index: 1000; background-color: white;"
    class="flex flex-wrap items-center px-4"
  >
    <nav class="navbar w-full flex justify-between items-center">
      <!-- Logo -->
      <div>
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Logo" class="cursor-pointer" />
        </router-link>
      </div>

      <!-- Navigation (Desktop) -->
      <div class="hidden md:flex items-center gap-6">
        <router-link
          to="/testimonials"
          class="testimonials text-gray-700 hover:text-[#4D148C] font-semibold"
        >
          Testimonials
        </router-link>
        <AboutDropdown />
        <router-link
          to="/contact"
          class="text-gray-700 hover:text-[#4D148C] font-semibold"
        >
          Contact Us
        </router-link>
      </div>

      <!-- Right side (Profile + Hamburger) -->
      <div class="flex items-center gap-4">
        <!-- Profile (When Logged In) -->
        <template v-if="isLoggedIn">
          <router-link to="/profilepage">
            <div class="relative group">
              <!-- Profile Circle -->
              <div
                class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer"
              >
                <img
                  :src="userImage || defaultProfile"
                  alt="Profile"
                  class="w-8 h-8 rounded-full object-cover"
                />
              </div>

              <!-- Tooltip -->
              <div
                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md"
              >
                User Profile
              </div>
            </div>
          </router-link>
        </template>

        <!-- Login Button -->
        <router-link
          v-else
          to="/login"
          class="purplebutton flex items-center gap-2 px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm md:px-5 md:py-2.5 md:text-base lg:px-6 lg:py-3 rounded-lg bg-[#4D148C] text-white hover:bg-[#3a0f85] font-semibold"
        >
          <span>Login</span>
          <img
            src="@/assets/send.png"
            alt="Send Icon"
            class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
          />
        </router-link>

        <!-- Hamburger (Mobile only) -->
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden flex flex-col gap-1"
        >
          <span class="w-6 h-0.5 bg-gray-700"></span>
          <span class="w-6 h-0.5 bg-gray-700"></span>
          <span class="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="menuOpen"
      class="md:hidden absolute top-[100px] left-0 w-full bg-white shadow-lg flex flex-col gap-4 p-4"
    >
      <router-link
        to="/testimonials"
        class="text-gray-700 hover:text-[#4D148C] font-semibold"
        @click="menuOpen = false"
      >
        Testimonials
      </router-link>
      <AboutDropdown />
      <router-link
        to="/contact"
        class="text-gray-700 hover:text-[#4D148C] font-semibold"
        @click="menuOpen = false"
      >
        Contact Us
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AboutDropdown from "./aboutDropdown.vue";

// import default profile image properly
import defaultProfile from "@/assets/icons8-user-32.png";

const router = useRouter();

// Login state
const isLoggedIn = ref(false);
const userImage = ref(""); // stores user profile image URL

onMounted(() => {
  const token = localStorage.getItem("token");
  const profilePic = localStorage.getItem("profilePic"); // optional custom pic
  if (token) {
    isLoggedIn.value = true;
    userImage.value = profilePic || ""; // fallback handled in template
  }
});

const menuOpen = ref(false);
</script>

<style scoped>
.navbar {
  width: 100%;
  justify-content: space-around;
  align-items: center;
  display: flex;
  margin-top: 36px;
  z-index: 100;
  position: absolute;
}

.topnav:hover {
  border-bottom: 3px solid #4d148c;
  margin-top: 5px;
}
</style>
