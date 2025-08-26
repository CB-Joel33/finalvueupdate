<template>
  <div class="flex justify-center items-center h-screen">
    <form @submit.prevent="handleReset" class="bg-white shadow-lg p-6 rounded w-96">
      <h2 class="text-xl font-bold mb-4">Reset Password</h2>

      <div v-if="errormsg" class="text-red-500 mb-2">{{ errormsg }}</div>
      <div v-if="successmsg" class="text-green-600 mb-2">{{ successmsg }}</div>

      <input
        type="password"
        v-model="newPassword"
        placeholder="New Password"
        class="border w-full p-2 mb-3 rounded"
        required
      />

      <input
        type="password"
        v-model="confirmPassword"
        placeholder="Confirm Password"
        class="border w-full p-2 mb-3 rounded"
        required
      />

      <button type="submit" class="signbutton w-full" :disabled="loader">
        <span v-if="!loader">Reset Password</span>
        <span v-else>Processing...</span>
      </button>
    </form>
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
        confirmPassword: confirmPassword.value
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
