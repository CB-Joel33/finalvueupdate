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
  class="hidden md:flex md:flex-wrap">
    <nav class="navbar">
      <div>
        <img src="@/assets/logo.png" />
      </div>
      <div
        style="
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 25px;
        "
      >
        <div
          style="display: flex; align-items: center; gap: 4px; cursor: pointer"
        >
          <Dropdown />
        </div>

        <div style="text-decoration: none; color: black" class="topnav">
          <aboutDropdown />
        </div>
        <router-link
          to=""
          style="text-decoration: none; color: black"
          class="topnav"
          >Contact us</router-link
        >
      </div>
      <div>
        <button class="purplebutton">
          <span style="font-family: 'Poppins', sans-serif; font-weight: 600"
            >Start Learning</span
          >
          <img
            src="@/assets/send.png"
            alt="Send Icon"
            style="width: 13px; height: 13px; margin-left: 10px"
          />
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import Dropdown from './Dropdown.vue';
import aboutDropdown from './aboutDropdown.vue';

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