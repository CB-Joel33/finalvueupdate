<template>

  <div>
    
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
    <div style="display: grid; grid-template-columns: 1fr 1fr ;">
      <div class="sm:mx-auto ">
        <div style="margin-left: 20%;padding: 90px;" class=" " >
          <div class="heading flex-col gap-4 md:flex md:flex-row" >
            <img src="@/assets/logo.png">
            <div style="margin-top: 0px;">
              <p>
                Don't have an account?
                <router-link to="/register" style="margin-left: 5px; color: blueviolet;">Sign Up</router-link>
              </p>
            </div>
          </div>

          <div v-if="errormsg" style="color:red; margin: 10px">
            {{ errormsg }}
          </div>

          <p class="signupbold">Log in</p>

          <div class="inputwrapper">
            <form @submit.prevent="sign_in">
              <img src="@/assets/et_profile-male (1).png" class="icons" style="top: 15px;">
              <input type="email" placeholder="Email Address" class="forms" v-model="loginForm.email">

              <img src="@/assets/arcticons_password.png" class="icons" style="top: 65px;">
              <input type="password" placeholder="Password" class="forms" v-model="loginForm.password">

              <div style="margin-top: 10px">
               <p>Forgot Password? <router-link to="/forgot-password" target="_blank" style="color: blueviolet;">Click here </router-link></p>
              </div>

              <div style="margin-top: 62px; justify-content: space-between; align-items: center; display: flex;" class="flex-col gap-4 md:flex md:flex-row">
                <button class="signbutton cursor-pointer" type="submit" :disabled="loader">
                  {{ loader ? "Signing In..." : "Sign In" }}
                </button>
              
                <div class="flex justify-center sm:justify-around items-center w-full sm:w-[80px]">
                <GoogleLogin :callback="handleGoogleLogin"/>
                 </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div style="height: 100%;" >

        <img src="@\assets\Group 36307.png" style="position: absolute; top: 0; right: 0;height: 100vh; width: 40%;" class="hidden md:flex">
      </div>
    </div>
  </div>
  </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";

const loader = ref(false);
const loading = ref(true);
const router = useRouter();
const route = useRoute();
const errormsg = ref("");

// Login form state
const loginForm = ref({
  email: "",
  password: "",
});

// -------- Normal Login --------
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

    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("loginTime", Date.now());

    await fetchUserData(token);
    router.push("/"); // ✅ redirect to homepage
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

// -------- Google Login Redirect --------
const handleGoogleLogin = () => {
  window.location.href =
    "https://zacraclearningwebsite.onrender.com/api/v1/user/auth/google";
};

onMounted(async () => {
  setTimeout(() => {
    loading.value = false;
  }, 800);

  let token = null;

  // --- Case 1: query param (?token=abcd)
  const urlParams = new URLSearchParams(window.location.search);
  token = urlParams.get("token");

  // --- Case 2: path like /token=abcd
  if (!token && window.location.pathname.startsWith("/token=")) {
    token = window.location.pathname.split("=")[1];
  }

  // --- Case 3: path like /token/abcd (using route param)
  if (!token && route.params.token) {
    token = route.params.token;
  }

  // --- If we got a token, save & redirect
  if (token) {
    localStorage.setItem("token", token);
    localStorage.setItem("loginTime", Date.now());

    await fetchUserData(token); // load user info
  }

  // 🚀 Finally, go to homepage no matter what
  router.push("/");
});

</script>




<style scoped>
</style>



<style scoped>

.heading{
    display: flex;
    align-items: center;
    justify-content: space-around;  
    margin-top: 15%;
    margin-left: -40px;
   
}
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
.icons{
    position: absolute;
    width: 19px;
    height: 19px;
    left: 2px;
    

}

.forms{
    margin-top: 19px;
    padding: 10px;
    padding-left: 30px;
    width: 95%;
    height: 25px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;


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
</style>

