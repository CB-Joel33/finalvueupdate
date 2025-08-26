<template>
  <div class="mainbody">
    <div class="grid grid-cols-2 h-screen overflow-hidden ">
      <div>
        <div class="ml-[30%] p-[20px] mt-[150px]">
          <img src="@/assets/logo.png" class="mb-6" />

          
          <div v-if="errormsg" class="text-red-500 my-2">
            {{ errormsg }}
          </div>

          
          <div v-if="successmsg" class="text-green-600 my-2">
            {{ successmsg }}
          </div>

          <p class="signupbold mb-8">Enter Your Email to Reset Your Password</p>

          <div class="inputwrapper ">
            <form @submit.prevent="handleForgot">
              <input
                type="email"
                v-model="email"
                placeholder="Email Address"
                class="forms"
                required
              />

              <div class="mt-6 flex justify-between items-center">
                <button class="signbutton" type="submit" :disabled="loader">
                  <span v-if="!loader">Submit</span>
                  <span v-else>Sending...</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      
      <div>
        <img
          src="@/assets/Group 36307.png"
          class="hidden md:flex absolute top-0 right-0 h-screen w-2/5"
        >
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