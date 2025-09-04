<template>
  <div ref="dropdownRef" class="relative">
    <!-- Dropdown trigger -->
    <div @click="toggleDropdown" class="cursor-pointer flex items-center gap-1">
      <p class="text-gray-700 font-semibold">About ▾</p>
    </div>

    <!-- Dropdown menu -->
    <div
      v-if="isOpen"
      class="absolute top-full mt-2 bg-white rounded-lg shadow-lg w-56 z-50"
    >
      <ul class="flex flex-col p-2">
        <li
          v-for="(item, index) in about"
          :key="index"
          @click="navigateTo(item.route)"
          class="px-4 py-2 rounded hover:bg-[#f3e5ff] cursor-pointer font-medium"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isOpen = ref(false);
const dropdownRef = ref(null);

const about = [
  { label: "About Zacrac", route: "/aboutcompany" },
  { label: "About Us", route: "/aboutus" },
];

// Toggle dropdown visibility
function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

// Navigate to route
function navigateTo(route) {
  isOpen.value = false;
  router.push(route);
}

// Close dropdown if clicked outside
function handleClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
