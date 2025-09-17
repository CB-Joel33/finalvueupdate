<template>
  <div>
    <!-- Loading -->
    <div
      v-if="loading"
      class="flex flex-col items-center justify-center h-screen bg-white"
    >
      <img
        src="@/assets/icons8-loader-80.png"
        class="h-24 w-24 object-contain animate-spin"
      />
      <p class="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
    </div>

    <div v-else>
      <div class="mainbody">
        <!-- ✅ 1 col on mobile, 2 cols on desktop -->
        <div class="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen overflow-hidden">
          <!-- Left section -->
          <div>
            <!-- ✅ reduce padding on small screens, keep original desktop padding -->
            <div class="px-6 py-8 md:ml-[20%] md:p-[90px]">
              <div class="heading flex flex-col md:flex-row items-start md:items-center gap-4">
                <img src="@/assets/logo.png" />
                <div>
                  <p>
                    Already have an account?
                    <router-link
                      to="/login"
                      class="ml-1 text-purple-600"
                    >
                      Sign in
                    </router-link>
                  </p>
                </div>
              </div>

              <!-- Error -->
              <p class="text-red-600 font-bold text-center text-lg md:text-2xl mt-4">
                {{ errormsg }}
              </p>

              <!-- Title -->
              <p class="signupbold mt-6">Sign Up</p>

              <!-- Form -->
              <div class="inputwrapper mt-4">
                <form @submit.prevent="sign_up">
                  <img
                    src="@/assets/et_profile-male (1).png"
                    class="icons"
                    style="top: 15px"
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    class="forms w-full"
                    v-model="registerForm.full_name"
                  />

                  <img
                    src="@/assets/iconamoon_email-thin.png"
                    class="icons"
                    style="top: 62px"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    class="forms w-full"
                    v-model="registerForm.email"
                  />

                  <img
                    src="@/assets/arcticons_password.png"
                    class="icons"
                    style="top: 105px"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    class="forms w-full"
                    v-model="registerForm.password"
                  />

                  <img
                    src="@/assets/arcticons_password.png"
                    class="icons"
                    style="top: 150px"
                  />
                  <input
                    type="password"
                    placeholder="Re-enter Password"
                    class="forms w-full"
                    v-model="registerForm.repassword"
                  />

                  <!-- Button -->
                  <div
                    class="mt-10 flex flex-col gap-4 md:flex md:flex-row md:justify-between md:items-center"
                  >
                    <button
                      type="submit"
                      class="signbutton w-full md:w-auto"
                      :disabled="loader"
                    >
                      {{ loader ? "Signing Up..." : "Sign Up" }}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- ✅ Right image: untouched on desktop, hidden on small screens -->
          <div class="hidden md:flex" style="height: 100%;">
            <img
              src="@/assets/Group 36307.png"
              style="position: absolute; top: 0; right: 0; height: 100vh; width: 40%;"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue"
import axios from "axios"
import { useRouter } from "vue-router"
import { onMounted } from "vue"


const router = useRouter()
const loader = ref(false)
const errormsg = ref("")
const loading = ref(true)

const registerForm = ref({
  full_name: "",
  email: "",
  password: "",
  repassword: "",
})

onMounted(() => {
  
  loading.value = false
})

async function sign_up() {
  errormsg.value = ""

 
  if (registerForm.value.password !== registerForm.value.repassword) {
    errormsg.value = "Your passwords do not match"
    return
  }

  loader.value = true

  try {
    const data = await axios.post('https://zacraclearningwebsite.onrender.com/api/v1/user/signup', {
      name: registerForm.value.full_name,
      email: registerForm.value.email,
      password: registerForm.value.password,
    })

    console.log(data)
    localStorage.setItem("registered_email", registerForm.value.email)
    localStorage.setItem("registered_name", registerForm.value.full_name)
    router.push('/otp-verification')

  } catch (error) {
    console.log("Signup error:", error.response?.data)

    const backendMessage = error.response?.data?.message || ""

    if (backendMessage.includes("email") && backendMessage.includes("exists")) {
      errormsg.value = "This email already has an account."
    } else {
      errormsg.value = backendMessage || "Something went wrong. Try again"
    }

  } finally {
    loader.value = false
  
  }
}
</script>


<style scoped>


.signupbold{

    font-weight: bolder;
    margin-top: 100px;
    font-size: 26px;
    
}
.inputwrapper{
 position: relative;
 gap: 20px;
 flex-direction: column;
 display: flex;

}
.forms{
    margin-top: 19px;
    padding: 10px;
    padding-left: 30px;
    outline: none;
    width: 95%;
    height: 25px;
    border: none;
    border-bottom: 1px solid black;

}
.icons{
    position: absolute;
    width: 19px;
    height: 19px;
    left: 2px;
    

}
.signbutton{
    width: 230px;
    height: 45px;
    border-radius: 50px;
    background-color: #4D148C;
    color: white;
    font-size: 15px;
}
.logolink{
    height: 25px;
    width: 25px;
}
.toppurple{

    position: relative;
    margin-left: 120px;
    z-index: 2;
}
.middlepurple{
    position: relative;
    margin-left: 130px;
    height: 100vh;
    width: 626px;
    margin-top: -93px;
    z-index: 1;
}
.bottompurple{

    position: relative;
    margin-left: 64px;
    z-index: 4;
    height: auto;
    width: 692px;
    height: 450px;
    margin-top: -430px;
}
.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spin-loader {
  animation: spin 1s linear infinite;
}
</style>