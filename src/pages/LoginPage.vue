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
        <!-- ✅ keep 2 cols on desktop, but stack on mobile -->
        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Left section -->
          <div class="w-full">
            <div class="px-6 py-8 md:pl-[20%] md:pr-[90px] md:py-[90px]">
              <div class="heading flex flex-col gap-4 md:flex-row">
                <img src="@/assets/logo.png" />
                <div>
                  <p>
                    Don't have an account?
                    <router-link to="/register" class="ml-1 text-purple-600">
                      Sign Up
                    </router-link>
                  </p>
                </div>
              </div>

              <!-- Error -->
              <div v-if="errormsg" class="text-red-500 mt-4">
                {{ errormsg }}
              </div>

              <p class="signupbold mt-6">Log in</p>

              <div class="inputwrapper mt-4">
                <form @submit.prevent="sign_in">
                  <img
                    src="@/assets/et_profile-male (1).png"
                    class="icons"
                    style="top: 15px"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    class="forms w-full"
                    v-model="loginForm.email"
                  />

                  <img
                    src="@/assets/arcticons_password.png"
                    class="icons"
                    style="top: 65px"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    class="forms w-full"
                    v-model="loginForm.password"
                  />

                  <div class="mt-3 text-sm">
                    <p>
                      Forgot Password?
                      <router-link
                        to="/forgot-password"
                        target="_blank"
                        class="text-purple-600"
                      >
                        Click here
                      </router-link>
                    </p>
                  </div>

                  <!-- Buttons -->
                  <div
                    class="mt-10 flex flex-col gap-4 md:flex md:flex-row md:items-center md:justify-between"
                  >
                    <button
                      class="signbutton cursor-pointer w-full md:w-auto"
                      type="submit"
                      :disabled="loader"
                    >
                      {{ loader ? "Signing In..." : "Sign In" }}
                    </button>

                    <div class="flex justify-center md:justify-start">
                      <GoogleLogin :callback="handleGoogleLogin" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- Right image -->
          <div class="hidden md:block" style="height: 100%;">
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
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const loader = ref(false);
const errormsg = ref("");
const router = useRouter();

// ------------------ Login form state ------------------
const loginForm = ref({
  email: "",
  password: "",
});

// ------------------ Normal Login ------------------
async function sign_in() {
  errormsg.value = "";
  loader.value = true;

  try {
    const response = await axios.post(
      "https://zacraclearningwebsite.onrender.com/api/v1/user/signin",
      {
        email: loginForm.value.email,
        password: loginForm.value.password,
      }
    );

    const token = response.data.token;
    const userId = response.data._id;
    const email =
      response.data.email || response.data.user?.email || loginForm.value.email;

    // Save all important details
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("email", email);
    localStorage.setItem("loginTime", Date.now());

    router.push("/");
  } catch (error) {
    const message = error.response?.data?.message?.toLowerCase();

    if (message?.includes("password")) {
      errormsg.value = "Wrong Password";
    } else if (message?.includes("email")) {
      errormsg.value = "No Account Exists For This Email";
    } else {
      errormsg.value = "An error has occurred. Please try again.";
    }
  } finally {
    loader.value = false;
  }
}

// ------------------ Google Login ------------------
const handleGoogleLogin = () => {
  window.location.href =
    "https://zacraclearningwebsite.onrender.com/api/v1/user/auth/google";
};

// ------------------ Handle Google Redirect ------------------
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  const email = urlParams.get("email");
  const userId = urlParams.get("userId");

  if (token) {
    localStorage.setItem("token", token);
    localStorage.setItem("loginTime", Date.now());

    if (email) localStorage.setItem("email", email);
    if (userId) localStorage.setItem("userId", userId);

    router.replace("/");
  }
});
</script>

<style scoped>
.heading {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 15%;
  margin-left: -40px;
}
.signupbold {
  font-weight: bolder;
  margin-top: 100px;
  font-size: 26px;
}
.inputwrapper {
  position: relative;
  gap: 20px;
  flex-direction: column;
  display: flex;
}
.icons {
  position: absolute;
  width: 19px;
  height: 19px;
  left: 2px;
}
.forms {
  margin-top: 19px;
  padding: 10px;
  padding-left: 30px;
  width: 95%;
  height: 25px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
}
.signbutton {
  width: 230px;
  height: 45px;
  border-radius: 50px;
  background-color: #4D148C;
  color: white;
  font-size: 15px;
}
</style>
