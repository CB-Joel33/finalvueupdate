<template>
  <div style="width: 100%; height: 100px;position: fixed; top: 0; left: 0; z-index: 1000;background-color: white;" >
        <nav class="navbar">
          <div>
            <img src="@/assets/logo.png" />
          </div>
          <div style="display: flex; justify-content: space-around; align-items: center; gap: 25px;">
           <div style="display: flex; align-items: center; gap: 4px; cursor: pointer;">
           <Dropdown />
            </div>

           <div style="text-decoration:none;color: black" class="topnav"><aboutDropdown /></div>
            <router-link to="" style="text-decoration:none;color: black" class="topnav">Contact us</router-link>
          </div>
          <div>
           <button class="purplebutton">
          <span style="font-family: 'Poppins', sans-serif; font-weight: 600; ">Start Learning</span>
          <img src="@/assets/send.png" alt="Send Icon" style="width: 13px; height: 13px; margin-left: 10px;" />
           </button>

          </div>
        </nav>
      </div>


      <section style=" width: 100%;height: 90vh; margin-top: 120px;">

        <div style="display: flex;justify-content: center;align-items: center;width: 95%;margin: auto;height: 80%;  background-color: rgba(77, 20, 140, 0.4);">

          <div style="display: grid;grid-template-columns: 1.7fr 0.3fr ;">
            <div>


            </div>
            <div style=" background-color: white;margin: auto;width: 500px;height: 450px; border-radius: 15px;">

              
            </div>
          </div>
        </div>

      </section>
  
 <footer style="background-color: #131313; color: white; padding: 40px 60px;">

  <div style="display: grid; grid-template-columns: 1fr 1.5fr 0.5fr; gap: 40px; height: 100%;">

    
    <div style="display: flex; flex-direction: column; gap: 15px; ">
      <img src="@/assets/Logo (1).png" alt="Logo"  style="width: 200px;"/>
      <p style=" font-family: 'Abel', sans-serif; font-size: 30px; margin-top: 10px;">Africa’s No. 1 Data<br> School</p>
     <div style="margin:0 -10px ; display: flex; align-items: center;">
  <img src="@/assets/Frame 58.png"   style="margin-right: -25px "/>
  <img src="@/assets/Frame 59.png"  style="margin-right: -25px "/>
  <img src="@/assets/Frame 60.png"  style="margin-right: -25px "/>
  <img src="@/assets/Frame 61.png"  style="margin-right: -25px "/>
</div>

      <p style="font-family: 'Matter', sans-serif; font-size: 10px;opacity: 0.7">© Copyright 2025 All Rights Reserved</p>
    </div>

    
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
      <div style="display: flex; flex-direction: column; gap: 15px; ">
        <p style="font-weight: bold;">Quick Links</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Blog</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Pricing</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Instructors</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Careers</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Affiliate Program</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Support</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Terms & Condition</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Privacy Policies</p>
      </div>

      
      <div style="display: flex; flex-direction: column; gap: 15px; ">
        <p style="font-weight: bold;">Ways to Learn</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Self-paced Courses</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Incubator Programs</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Cohort-based Courses</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Enterprise Learning</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Career-building Paths</p>
      </div>

     
      <div  style="display: flex; flex-direction: column; gap: 15px; ">
        <p style="font-weight: bold;">Courses</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">MS Excel</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">R</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Power BI</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Python</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">SQL</p>
      </div>
    </div>

  
    <div style="display: flex; flex-direction: column; gap: 15px; ">
      <p style="font-weight: bold;">Visit Us</p>
      <p style="font-family: 'Matter', sans-serif; font-size: 12px;">2nd Floor, Sovereign Trust Insurance Building, Alagbaka, Akure, Ondo State, Nigeria.</p>
      <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Be the first to know about our exciting offers on Data Science, AI, and ML courses.</p>
     
     <div> <input type="email" placeholder="Type email Here..." style="font-family: 'Matter', sans-serif; font-size: 9px; color: white; background-color: black; border: none; border-bottom: 2px solid #333385; height: 30px;width: 170px"/>
      <img src="@\assets\Frame 527.png"/>
      </div>
    </div>

  </div>
</footer>
</template>

<script setup>

import Dropdown from '@/components/Dropdown.vue'
import AboutDropdown from '@/components/aboutDropdown.vue'

import { ref, onMounted } from 'vue';
import axios from 'axios';

const courses = ref([]);

// onMounted (async () =>{
//   try {
//     const response = await axios.get("https://zacraclearningwebsite.onrender.com/courses?page=&limit=9");
//     courses.value = response.data.Data;
    
//   }
// }
// )
</script> 

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:wght@400;600;700&display=swap');

*{
    padding: 0;
    margin: 0;
   box-sizing: border-box;

    
}
h1 , h2, h3 , h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
}
body {
    font-family: 'Poppins', sans-serif;
}
.navbar{

    width: 100%;
    justify-content: space-around;
    align-items: center;
    display: flex;
    margin-top: 36px;
    z-index: 100;
    position: absolute;
}
.topnav:hover{
 border-bottom: 3px solid #4D148C;
 margin-top: 5px
}
.dropbtn{
    border: none;
    background-color: white;
    outline: none;

}
.purplebutton{
    border-radius: 7px;
    background-color: #4D148C;
    width: 200px;
    height: 47px;
    color: white;
    font-weight: 500;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
   

}

</style>