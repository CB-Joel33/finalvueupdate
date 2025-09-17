<template>
  <div class="mainbody">
    <!-- ✅ 1 col on mobile, 2 cols on desktop -->
    <div class="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen overflow-hidden">
      <!-- Left section -->
      <div>
        <!-- ✅ less padding/margin on mobile, keep your original on desktop -->
        <div class="px-6 py-8 md:ml-[30%] md:p-[20px] md:mt-[150px]">
          <img src="@/assets/logo.png" class="mb-6 w-32 md:w-auto" />

          <!-- Error -->
          <div v-if="errormsg" class="text-red-500 my-2">
            {{ errormsg }}
          </div>

          <!-- Success -->
          <div v-if="successmsg" class="text-green-600 my-2">
            {{ successmsg }}
          </div>

          <p class="signupbold mb-8">
            Enter Your Email to Reset Your Password
          </p>

          <!-- Form -->
          <div class="inputwrapper">
            <form @submit.prevent="handleForgot">
              <input
                type="email"
                v-model="email"
                placeholder="Email Address"
                class="forms w-full"
                required
              />

              <div class="mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <button
                  class="signbutton w-full md:w-auto"
                  type="submit"
                  :disabled="loader"
                >
                  <span v-if="!loader">Submit</span>
                  <span v-else>Sending...</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- ✅ Right image: hidden on small, original on desktop -->
      <div class="hidden md:flex">
        <img
          src="@/assets/Group 36307.png"
          class="absolute top-0 right-0 h-screen w-2/5"
        />
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue"
import axios from "axios"

const email = ref("")
const loader = ref(false)
const errormsg = ref("")
const successmsg = ref("")

const handleForgot = async () => {
  loader.value = true
  errormsg.value = ""
  successmsg.value = ""

  try {
    const res = await axios.post(
      "https://zacraclearningwebsite.onrender.com/api/v1/user/forget-password",
      { email: email.value }
    )

    successmsg.value = res.data.message || "Reset link sent! Please check your email."
  } catch (err) {
    errormsg.value = err.response?.data?.message || "Something went wrong."
  } finally {
    loader.value = false
  }
}
</script>

<style scoped>
.signbutton{
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
.forms{
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

</style>