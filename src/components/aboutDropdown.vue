<template>
  <div style="position: relative;" @mouseleave="isOpen = false">
    <div @click="toggleDropdown" style="cursor: pointer; display: flex; align-items: center; gap: 4px;">
      <p style="margin: 0; font-size: 14px;" class="topnav">About ▾</p>
    </div>

      <div
      v-if="isOpen"
      style="
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 12px;
        background-color: white;  
        border-radius: 16px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        padding: 20px 0;
        width: 240px;
        z-index: 100;
      "
    >
      <ul style="list-style: none; margin: 0; padding: 0;">
        <li
          v-for="(item, index) in about"
          :key="index"
          style="
            padding: 14px 24px;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s ease;
          "
          @mouseover="hovered = index"
          @mouseleave="hovered = null"
          :style="{ backgroundColor: hovered === index ? '#f9f9f9' : 'transparent' }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

const about = [
  
  'About Zacrac',
  'About Us'
]
</script>