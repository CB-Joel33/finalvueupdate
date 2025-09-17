<template>
  <!-- Navbar Wrapper -->
  <header
    class="w-full h-[100px] fixed top-0 left-0 z-50 bg-white flex items-center px-8"
  >
    <nav class="navbar w-full flex items-center">
      <!-- Logo -->
      <div>
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Logo" class="cursor-pointer h-10" />
        </router-link>
      </div>

      <!-- Desktop Nav Links (centered) -->
      <div class="hidden md:flex flex-1 justify-center items-center gap-6">
        <router-link
          to="/testimonials"
          class="text-gray-700 hover:text-[#4D148C] font-semibold"
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

      <!-- Right Side (Desktop Only) -->
      <div class="hidden md:flex items-center gap-4 ml-auto mr-20">
        <!-- Show Login if not logged in -->
        <router-link
          v-if="!isLoggedIn"
          to="/login"
          class="purplebutton flex items-center gap-2 px-5 py-2.5 text-base rounded-lg bg-[#4D148C] text-white hover:bg-[#3a0f85] font-semibold"
        >
          <span>Login</span>
          <img src="@/assets/send.png" alt="Send Icon" class="w-4 h-4" />
        </router-link>

        <!-- Show Profile if logged in -->
        <template v-else>
          <router-link to="/profilepage">
            <div class="relative group">
              <div
                class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer"
              >
                <img
                  :src="userImage || defaultProfile"
                  alt="Profile"
                  class="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <div
                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded-md px-2 py-1 shadow-md"
              >
                User Profile
              </div>
            </div>
          </router-link>
        </template>
      </div>

      <!-- Hamburger (mobile only) -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden flex flex-col gap-1"
      >
        <span class="w-6 h-0.5 bg-gray-700"></span>
        <span class="w-6 h-0.5 bg-gray-700"></span>
        <span class="w-6 h-0.5 bg-gray-700"></span>
      </button>
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

      <!-- Mobile Login OR Profile -->
      <template v-if="isLoggedIn">
        <router-link
          to="/profilepage"
          class="flex items-center gap-2 px-2 py-2 text-sm rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold"
          @click="menuOpen = false"
        >
          <div class="w-8 h-8 rounded-full overflow-hidden">
            <img
              :src="userImage || defaultProfile"
              alt="Profile"
              class="w-8 h-8 object-cover"
            />
          </div>
          <span>Profile</span>
        </router-link>
      </template>

      <template v-else>
        <router-link
          to="/login"
          class="purplebutton flex items-center gap-2 px-2 py-2 text-sm rounded-lg bg-[#4D148C] text-white hover:bg-[#3a0f85] font-semibold"
          @click="menuOpen = false"
        >
          <span>Login</span>
          <img src="@/assets/send.png" alt="Send Icon" class="w-4 h-4" />
        </router-link>
      </template>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AboutDropdown from "./aboutDropdown.vue";
import defaultProfile from "@/assets/icons8-user-32.png";

const router = useRouter();
const menuOpen = ref(false);
const isLoggedIn = ref(false);
const userImage = ref("");

onMounted(() => {
  const token = localStorage.getItem("token");
  const profilePic = localStorage.getItem("profilePic");
  if (token) {
    isLoggedIn.value = true;
    userImage.value = profilePic || "";
  }
});
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
