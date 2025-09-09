<template>
  <div class="mainbody">
    <div class="grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden">
      <!-- Left Section (Form) -->
      <div>
        <div class="ml-[30%] p-[20px] mt-[150px]">
          <!-- Logo -->
          <img src="@/assets/logo.png" class="mb-6" />

          <!-- Error / Success Messages -->
          <div v-if="errormsg" class="text-red-500 my-2">
            {{ errormsg }}
          </div>
          <div v-if="successmsg" class="text-green-600 my-2">
            {{ successmsg }}
          </div>

          <!-- Heading -->
          <p class="signupbold mb-8">Reset Your Password</p>

          <!-- Form -->
          <div class="inputwrapper">
            <form @submit.prevent="handleReset">
              <input
                type="password"
                v-model="newPassword"
                placeholder="New Password"
                class="forms"
                required
              />

              <input
                type="password"
                v-model="confirmPassword"
                placeholder="Confirm Password"
                class="forms"
                required
              />

              <div class="mt-6 flex justify-between items-center">
                <button class="signbutton" type="submit" :disabled="loader">
                  <span v-if="!loader">Reset Password</span>
                  <span v-else>Processing...</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Right Section (Image) -->
      <div>
        <img
          src="@/assets/Group 36307.png"
          class="hidden md:flex absolute top-0 right-0 h-screen w-2/5"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import axios from "axios"

const route = useRoute()
const router = useRouter()

const newPassword = ref("")
const confirmPassword = ref("")
const loader = ref(false)
const errormsg = ref("")
const successmsg = ref("")

const handleReset = async () => {
  loader.value = true
  errormsg.value = ""
  successmsg.value = ""

  try {
    const token = route.params.token

    const res = await axios.post(
      `http://localhost:3000/api/v1/user/reset-password/${token}`,
      {
        newPassword: newPassword.value,
        confirmPassword: confirmPassword.value,
      }
    )

    successmsg.value = res.data.message || "Password reset successful!"

    setTimeout(() => router.push("/login"), 2000)
  } catch (err) {
    errormsg.value = err.response?.data?.message || "Reset failed."
  } finally {
    loader.value = false
  }
}
</script>

<style scoped>
.signbutton {
  background-color: #4D148C;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  width: 200px;
}

.forms {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
