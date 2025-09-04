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
        <template v-if="isLoggedIn">
          <div
            class="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white cursor-pointer"
            title="My Account"
          >
            {{ userInitial }}
          </div>
        </template>

        <router-link
          v-else
          to="/login"
          class="purplebutton flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4D148C] text-white hover:bg-[#3a0f85] font-semibold"
        >
          <span>Login</span>
          <img src="@/assets/send.png" alt="Send Icon" class="w-3 h-3" />
        </router-link>

        <!-- Hamburger (Mobile only, beside U) -->
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

const router = useRouter();

// Login state
const isLoggedIn = ref(false);
const userInitial = ref("");

// Check localStorage for login info
onMounted(() => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  if (token) {
    isLoggedIn.value = true;
    userInitial.value = email ? email[0].toUpperCase() : "U";
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