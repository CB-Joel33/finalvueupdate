<template>
  <div
    style="
      width: 100%;
      height: 100px;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      background-color: white;
    "
    class="flex flex-wrap items-center px-4"
  >
    <nav class="navbar">
      <!-- Logo -->
      <div>
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Logo" class="cursor-pointer" />
        </router-link>
      </div>

      <!-- Navigation -->
      <div
        style="
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 25px;
        "
      >
        <div
         style="display: flex; align-items: center; gap: 4px; cursor: pointer " 
        >
          <Dropdown @selectDepartment="handleSelectDepartment" class="hidden md:flex" />
        </div>

        <div style="text-decoration: none; color: black" class="topnav hidden md:flex">
          <aboutDropdown />
        </div>

        <router-link
          to=""
          style="text-decoration: none; color: black"
          class="topnav hidden md:flex"
          >Contact us</router-link
        >
      </div>

      <!-- ✅ Right side (Login OR Profile + Logout) -->
      <div class="flex items-center gap-4">
        <!-- Show profile circle + logout if logged in -->
        <template v-if="isLoggedIn">
          <div
            class="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white cursor-pointer"
            title="My Account"
          >
            {{ userInitial }}
          </div>
          <button
            @click="logout"
            class="px-4 py-2 rounded-lg border-2 border-purple-700 text-purple-700 font-medium bg-white hover:bg-purple-50"
          >
            Logout
          </button>
        </template>

        <!-- Show login button if not logged in -->
        <router-link v-else to="/login" class="purplebutton">
          <span style="font-family: 'Poppins', sans-serif; font-weight: 600"
            >Login</span
          >
          <img
            src="@/assets/send.png"
            alt="Send Icon"
            style="width: 13px; height: 13px; margin-left: 10px"
          />
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Dropdown from "./Dropdown.vue";
import aboutDropdown from "./aboutDropdown.vue";

const router = useRouter();

const emit = defineEmits(["selectDepartment"]);
function handleSelectDepartment(dept) {
  emit("selectDepartment", dept);
}

// ✅ reactive login state
const isLoggedIn = ref(false);
const userInitial = ref("");

// Check localStorage for token + email
onMounted(() => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email"); // make sure email is stored during login
  if (token) {
    isLoggedIn.value = true;
    if (email) {
      userInitial.value = email[0].toUpperCase();
    } else {
      userInitial.value = "U"; // fallback letter
    }
  }
});

// ✅ Logout function
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("email");
  localStorage.removeItem("loginTime");
  isLoggedIn.value = false;
  router.push("/login");
}
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