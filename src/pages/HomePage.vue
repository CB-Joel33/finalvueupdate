<template>
  <div>
    <div >
    

      <div class="seconddiv grid grid-cols-1 md:grid-cols-2 " style="margin-top: 150px;">
        <div style="width: 100%;">
          <div style="margin-left: 10%; margin-top: 20%;" class="flex flex-col justify-center">
            <h2 style="font-weight: 900; font-size: 30px;">What do you want to learn?</h2>
            <div style="position: relative;background-color: white;width: 80%; border-radius: 10px;padding: auto; overflow: hidden;">
              <input type="text" placeholder="Search for courses" class="searchbar" />
              <img src="@/assets/lets-icons_search-duotone.png" style="position: absolute; left: 410px; top: 18px;" />
            </div>
           <div style="font-size: 14px; display: flex; align-items: center; margin-top: 7px; gap: 7px;">
  <p style="color: #F26100; margin: 0;">Suggestion:</p>
  <router-link to="" style="color: purple;" >UI/UX</router-link>
  <router-link to="" style="color: purple;">Data Analysis</router-link>
</div>

          </div>
        </div>

        <div class="md:flex flex-col items-center md:items-end hidden"> 
          <img src="@/assets/Frame 576.png" style="margin-top: 25px; display: flex;"  />
        </div>
      </div>

      <div style="align-items: center; justify-content: center; display: flex; margin-top: 30px;">
        <img src="@/assets/Trust by 5000+ learners in 15 countries.png" />
      </div>
   
    </div>
<div style="margin-top: 65px; width: 100%; display: flex; justify-content: center;">
  <div
    style="
      display: flex;
      justify-content: flex-start;
      gap: 20px;
      width: 85%;
      overflow-x: auto;
      white-space: nowrap;
      scrollbar-width: none; /* hide scrollbar Firefox */
    "
    class="animate-scroll"
  >
    <img src="@/assets/image 22.png" />
    <img src="@/assets/image 24.png" />
    <img src="@/assets/image 76.png" />
    <img src="@/assets/image 28.png" />
    <img src="@/assets/image 23.png" />
    <img src="@/assets/image 25.png" />
    <img src="@/assets/image-removebg-preview (14) 1.png" />
    <img src="@/assets/image 30.png" />
  </div>
</div>


  <section>

<div class="mt-20 mx-auto w-11/12 md:w-4/5">
  
  
  <div class="flex flex-col md:flex-row justify-between ">
    <p class="text-[#000066] font-bold text-2xl md:text-3xl m-0">
      Course Catalog
    </p>
    <img src="@/assets/Group (1).png" alt="" class="w-24 md:w-28 hidden md:flex h-[75px] md:mr-24 mt-4 md:mt-0" />
  </div>

  
  <div class="mt-2 md:mt-0">
    <h6 class="m-0 font-normal text-sm md:text-base text-gray-700">
      Explore expert-led courses designed to equip you with practical, in-demand skills that help you grow,
      succeed, and stay ahead in your career.
    </h6>
  </div>
</div>

<div class="w-11/12 md:w-4/5 mx-auto mt-5">
  <div ref="filterSection" class="flex flex-wrap gap-4 justify-start">

    <button 
  class="buttonfilter px-4 py-2 min-w-[120px]"
  @click="setDepartment('All')"
  :style="selectedDepartment === 'All' ? { backgroundColor: '#4D148C', color: 'white' } : { backgroundColor: 'white', color: 'black' }"
>
  All
</button>

<button 
  class="buttonfilter px-4 py-2 min-w-[120px]"
  @click="setDepartment('Data')"
  :style="selectedDepartment === 'Data' ? { backgroundColor: '#4D148C', color: 'white' } : { backgroundColor: 'white', color: 'black' }"
>
  Data
</button>

<button 
  class="buttonfilter px-4 py-2 min-w-[140px]"
  @click="setDepartment('Product Design')"
  :style="selectedDepartment === 'Product Design' ? { backgroundColor: '#4D148C', color: 'white' } : { backgroundColor: 'white', color: 'black' }"
>
  Product Design
</button>

<button 
  class="buttonfilter px-4 py-2 min-w-[140px]"
  @click="setDepartment('Cybersecurity')"
  :style="selectedDepartment === 'Cybersecurity' ? { backgroundColor: '#4D148C', color: 'white' } : { backgroundColor: 'white', color: 'black' }"
>
  Cybersecurity
</button>

<button 
  class="buttonfilter px-4 py-2 min-w-[160px]"
  @click="setDepartment('Project Management')"
  :style="selectedDepartment === 'Project Management' ? { backgroundColor: '#4D148C', color: 'white' } : { backgroundColor: 'white', color: 'black' }"
>
  Project Management
</button>

<button 
  class="buttonfilter px-4 py-2 min-w-[160px]"
  @click="setDepartment('Software Development')"
  :style="selectedDepartment === 'Software Development' ? { backgroundColor: '#4D148C', color: 'white' } : { backgroundColor: 'white', color: 'black' }"
>
  Software Development
</button>
</div></div>






 <div class="w-11/12 md:w-4/5 mx-auto mt-5 " ref="coursesSection">
  
  <!-- Loader replaces courses while fetching -->
  <div v-if="loading || filterLoader" class="flex justify-center items-center py-20">
    <div class="w-12 h-12 border-4 border-[#4D148C] border-t-transparent rounded-full animate-spin"></div>
  </div>

  <!-- Show courses if available -->
  <div v-else-if="courses && courses.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <div v-for="course in courses" :key="course._id" class="coursecards bg-white shadow-md rounded-lg overflow-hidden mb-5 px-3">
      
      <div class="h-64 w-full overflow-hidden">
        <img :src="course.imageUrl" alt="" class="w-full h-full object-cover">
      </div>

      <div class="p-4">
        <p class="font-bold font-poppins text-base mb-2">{{ course.title }}</p>

        <div class="flex items-center gap-2 mb-3">
          <img src="@/assets/Frame 85.png" alt="" class="w-8 h-4">
          <h6 class="text-xs text-gray-600 m-0">{{ course.numberOfEnrolled }} people enrolled</h6>
        </div>

        <div class="text-sm mb-3">
          <div>Mode: On-Site/Remote</div>
          <div>Duration: {{ course.duration }}</div>
          <div>Payment Type: Full/Installment</div>
        </div>

        <p class="font-bold text-sm mb-4">{{ formatPrice(course.price) }}</p>

        <router-link :to="`/allCourses/${course._id}`" class="viewbutton inline-block">
          <p class="text-center">Preview Course</p>
        </router-link>
      </div>
    </div>
  </div>

  <!-- If no courses after filtering -->
  <div v-else class="text-center text-gray-600 py-10">
    No courses available.
  </div>

  <!-- Keep pagination -->
  <Pagination
    :current-page="page"
    :total-pages="totalPages"
    :has-previous-page="page > 1"
    :has-next-page="page < totalPages"
    :loading="loading"
    @page-change="handlePageChange"
    class="mt-6"
  />
</div>



    
       
      
  

  </section>
<section class="bg-[#E8EEE9] mt-16 py-16">
  <div class="flex flex-col items-center justify-center text-center px-4 md:px-0 h-full">
    
   
    

   
    <h6 class="font-bold text-base md:text-lg lg:text-xl max-w-xl md:max-w-2xl mx-auto mb-6">
      Want to see what others are saying about Zacrac? Explore our reviews and share your own experience with the community.
    </h6>

    
   <router-link to="/testimonials">
  <button 
    class="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 
           rounded-lg border border-black font-poppins font-medium 
           text-sm md:text-base"
  >
    <span>Check out reviews & add yours to inspire others</span>
    <img 
      src="@/assets/send2.png" 
      alt="Send Icon" 
      class="w-3 h-3 md:w-4 md:h-4" 
    />
  </button>
</router-link>

  </div>
</section>


</div>
<section>
  <div style="width: 90%; margin: 0 auto; margin-top: 20px;">

    
    <div>
      <img src="@/assets/Frame 524.png" />
    </div>

    
    <div style="margin-top: 7px;"> 
      <p style="margin: 0; font-family: 'Matter', sans-serif;">TESTIMONIALS</p>
      <p style="color: #000066; font-weight: 550; font-size: 35px; margin: 0;">
        Hear from people like you who achieved their Tech Dreams with Zacrac Learning
      </p>
    </div>

   
  <div class="w-11/12 mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] relative">

  <!-- Review Card 1 -->
  <div class="reviewcards bg-gray-300 p-4 rounded-lg shadow-md relative z-0">
    <div class="card-content text-center">
      <img src="@/assets/Rectangle 24140.png" alt="Reviewer Photo" class="mx-auto mb-4" />
      <p class="font-semibold mb-1">Adebayo Mattews</p>
      <p class="text-sm text-gray-700 mb-2 font-montserrat">Product Design</p>
      <div class="flex items-center justify-center mb-3">
        <div class="text-green-600 text-lg leading-none">★★★★★</div>
        <span class="ml-2 text-xs text-gray-600">4.23 rating</span>
      </div>
      <h6 class="text-sm leading-relaxed">
        All membership packages come with a 30-day satisfaction guarantee.
        If you didn’t mean to set your password, just ignore this email
        and we’ll forget this ever happened.
      </h6>
    </div>
  </div>

  <!-- Review Card 2 (on top) -->
  <div class="reviewcards bg-white p-4 rounded-lg shadow-xl relative z-20">
    <div class="card-content text-center">
      <img src="@/assets/Rectangle 24140.png" alt="Reviewer Photo" class="mx-auto mb-4" />
      <p class="font-semibold mb-1">Adebayo Mattews</p>
      <p class="text-sm text-gray-700 mb-2 font-montserrat">Product Design</p>
      <div class="flex items-center justify-center mb-3">
        <div class="text-green-600 text-lg leading-none">★★★★★</div>
        <span class="ml-2 text-xs text-gray-600">4.23 rating</span>
      </div>
      <h6 class="text-sm leading-relaxed">
        All membership packages come with a 30-day satisfaction guarantee.
        If you didn’t mean to set your password, just ignore this email
        and we’ll forget this ever happened.
      </h6>
    </div>
  </div>

  <!-- Review Card 3 -->
  <div class="reviewcards bg-gray-300 p-4 rounded-lg shadow-md relative z-0">
    <div class="card-content text-center">
      <img src="@/assets/Rectangle 24140.png" alt="Reviewer Photo" class="mx-auto mb-4" />
      <p class="font-semibold mb-1">Adebayo Mattews</p>
      <p class="text-sm text-gray-700 mb-2 font-montserrat">Product Design</p>
      <div class="flex items-center justify-center mb-3">
        <div class="text-green-600 text-lg leading-none">★★★★★</div>
        <span class="ml-2 text-xs text-gray-600">4.23 rating</span>
      </div>
      <h6 class="text-sm leading-relaxed">
        All membership packages come with a 30-day satisfaction guarantee.
        If you didn’t mean to set your password, just ignore this email
        and we’ll forget this ever happened.
      </h6>
    </div>
  </div>

</div>



  </div>
</section>
 <footer class="bg-[#131313] text-white pt-10 pb-10 px-6 md:px-16 mt-8">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

    <!-- Logo & Branding -->
    <div class="flex flex-col gap-4">
      <router-link to="/">
      <img src="@/assets/Logo (1).png" class="w-40 md:w-48" />
      </router-link>
      <p class="font-abel text-2xl md:text-3xl">Africa’s No. 1 Data<br> School</p>
      <div class="flex -mx-2 items-center">
        <img src="@/assets/Frame 58.png" class="-mr-6" />
        <img src="@/assets/Frame 59.png" class="-mr-6" />
        <img src="@/assets/Frame 60.png" class="-mr-6" />
        <img src="@/assets/Frame 61.png" class="-mr-6" />
      </div>
      <p class="font-matter text-xs opacity-70">© Copyright 2025 All Rights Reserved</p>
    </div>

    <!-- Links Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <!-- Quick Links -->
      <div class="flex flex-col gap-2">
        <p class="font-bold">Quick Links</p>
        <p class="text-xs">Blog</p>
        <p class="text-xs">Pricing</p>
        <p class="text-xs">Instructors</p>
        <p class="text-xs">Careers</p>
        <p class="text-xs">Affiliate Program</p>
        <p class="text-xs">Support</p>
        <p class="text-xs">Terms & Condition</p>
        <p class="text-xs">Privacy Policies</p>
      </div>

      <!-- Ways to Learn -->
      <div class="flex flex-col gap-2">
        <p class="font-bold">Ways to Learn</p>
        <p class="text-xs">Self-paced Courses</p>
        <p class="text-xs">Incubator Programs</p>
        <p class="text-xs">Cohort-based Courses</p>
        <p class="text-xs">Enterprise Learning</p>
        <p class="text-xs">Career-building Paths</p>
      </div>

      <!-- Courses -->
      <div class="flex flex-col gap-2">
        <p class="font-bold">Courses</p>
        <p class="text-xs">MS Excel</p>
        <p class="text-xs">R</p>
        <p class="text-xs">Power BI</p>
        <p class="text-xs">Python</p>
        <p class="text-xs">SQL</p>
      </div>
    </div>

    <!-- Visit & Newsletter -->
    <div class="flex flex-col gap-4">
      <p class="font-bold">Visit Us</p>
      <p class="text-xs">2nd Floor, Sovereign Trust Insurance Building, Alagbaka, Akure, Ondo State, Nigeria.</p>
      <p class="text-xs">Be the first to know about our exciting offers on Data Science, AI, and ML courses.</p>
      <div class="flex items-center gap-2">
        <input type="email" placeholder="Type email Here..."
          class="bg-black text-white text-xs border-b-2 border-[#333385] h-8 w-40 px-2 focus:outline-none" />
        <img src="@/assets/Frame 527.png" class="h-8 w-8 object-contain" />
      </div>
    </div>

  </div>
</footer>



  
</template>

<script setup>
import Dropdown from '@/components/Dropdown.vue'
import AboutDropdown from '@/components/aboutDropdown.vue'
import { ref, onMounted, watch, nextTick } from 'vue'
import axios from 'axios'
import Pagination from '@/components/Pagination.vue'
import { useRoute } from "vue-router"

const loading = ref(false)       // for global content loading (pagination, page load, etc.)
const filterLoader = ref(false)  // for filter button loading

const courses = ref([])
const page = ref(1)
const totalPages = ref(0)
const selectedDepartment = ref('All')  
const filterSection = ref(null)
const coursesSection = ref(null)

const route = useRoute()

async function fetchCourses(isFilter = false) {
  if (isFilter) {
    filterLoader.value = true
  } else {
    loading.value = true
  }

  try {
    let url = `https://zacraclearningwebsite.onrender.com/courses?page=${page.value}&limit=9`

    if (selectedDepartment.value !== 'All') {
      url += `&department=${encodeURIComponent(selectedDepartment.value)}`
    }

    const response = await axios.get(url)

    courses.value = response.data.listOfCourses
    totalPages.value = response.data.pagination.totalPages
  } catch (error) {
    console.error('Error fetching courses:', error)
  } finally {
    if (isFilter) {
      filterLoader.value = false
    } else {
      loading.value = false
    }
  }
}

function formatPrice(price) {
  return price.toLocaleString('en-NG', {
    style: 'currency',
    currency: 'NGN',
  })
}

function handlePageChange(newPage) {
  page.value = newPage
  fetchCourses(false) // normal pagination, no filter
}

function setDepartment(dept) {
  selectedDepartment.value = dept
  page.value = 1
  console.log("Selected:", dept)
  fetchCourses(true) // call with filter loader
}

onMounted(() => {
  fetchCourses(false)
})

async function scrollAndFilter(dept) {
  setDepartment(dept)
  await nextTick()

  filterSection.value?.scrollIntoView({ behavior: "smooth", block: "start" })

  setTimeout(() => {
    coursesSection.value?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, 200) 
}

watch(() => route.query.dept, (newDept) => {
  if (newDept) scrollAndFilter(newDept)
})
</script>





<style scoped>

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-scroll {
  display: flex;
  animation: scroll 20s linear infinite;
}

.seconddiv{

    width: 82%;
    height: 450px;
    background-color: #E8EEE9;
    margin-left: 9%;
    border-radius: 20px;
    margin-top: 40px;

}
.searchbar{
    width: 80%;
    height: 10px;
    margin-top: 10px;
    border-radius: 10px;
    padding: 20px;
    border: none;
    outline: none;
    font-size: 15px;
}
.buttonfilter{

  display: flex;
  align-items: center;
  justify-content: center;      
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  white-space: nowrap; 
  height: 35px;
  padding: 5px;
  
}
.coursecards{

  width: 330px;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.viewbutton{
   text-align: center;
   height: 40px;
   width: 90%;
   padding: 5px;
   border-radius: 5px;
   background-color: #4D148C;
   text-decoration: none;
   border: 1px solid black ;
    color: white;
    
}

.reviewcards {
  height: 265px;
  width: 400px;
  border: 1px solid #DBDBDB;
  border-radius: 20px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
}
.pagebuttons{
  width: 40px;
  height: 40px;
  
}
</style>
