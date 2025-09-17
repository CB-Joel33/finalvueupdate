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
    <section style="width: 100%;margin-bottom: 40px ; margin-top: 120px" class="sm:flex-col">
      <div class="px-20">
        <div
          style=" background-color: rgba(77, 20, 140, 0.4)"
          class="p-[24px] flex md:flex-row flex-col justify-between rounded-[15px] gap-4 items-stretch"
        >
          <div class="md:w-6/12 w-full">
            <div v-if="course">
              <h1 class="md:text-3xl text-2xl font-[600]">{{ course.title }}</h1>
              <p class="mt-[20px]">{{ course.miniDescription }}</p>
              <!-- <p>instructors</p> -->
             <div class="flex flex-wrap gap-2 mt-5">
  
  <div
    class="bg-white rounded-full py-1 px-3 flex items-center gap-2 font-semibold
    transition-transform transform hover:-translate-y-1 hover:shadow-md
"
  >
    <img
      src="@/assets/ph--chalkboard-teacher-light.svg"
      class="h-5 w-5"
      alt="Instructor Lead"
    />
    <p class="text-sm sm:text-base ">Instructor lead course</p>
  </div>

  
  <div
    class="bg-white rounded-full py-1 px-4 flex items-center gap-2 font-semibold
    transition-transform transform hover:-translate-y-1 hover:shadow-md
"
  >
    <img
      src="@/assets/material-symbols--timer-outline-rounded.svg"
      class="h-6 w-6 sm:h-[30px] sm:w-[33px]"
      alt="Duration"
    />
    <p class="text-sm sm:text-base truncate w-20 sm:w-[70px]">
      {{ course.duration }}
    </p>
  </div>

   <div
    class="bg-white rounded-full py-1 px-4 flex items-center gap-2 font-semibold
    transition-transform transform hover:-translate-y-1 hover:shadow-md
"
  >
    <img
      src="@/assets/icons8-pricing-68.png"
      class="h-6 w-6 sm:h-[30px] sm:w-[33px]"
      alt="Duration"
    />
    <p class="text-sm sm:text-base truncate w-[80px] sm:w-[80px]">
      ₦{{ course.price }}
    </p>
  </div>
</div>

            <div class="mt-5 flex flex-col mt-10 md:flex-row flex-wrap items-center gap-3 bg-white p-3 rounded transition-transform transform hover:-translate-y-1 hover:shadow-md
">
  
  
  <div class="flex items-center gap-2 ">
    <img src="@/assets/icons8-signal-16.png" alt="Beginner" class="w-5 h-5 object-contain" />
    <p class="text-sm md:text-base truncate ">Beginner and Intermediate</p>
  </div>

 
  <p class="hidden md:block text-gray-500">&</p>  

  
  <div class="flex items-center gap-2 ">
    <img src="@/assets/icons8-signal-25.png" alt="Experienced" class="w-5 h-5 object-contain" />
    <p class="text-sm md:text-base truncate">Experienced</p>
  </div>

  
  <div class="flex items-center gap-2">
    <img src="@/assets/icons8-play-50.png" alt="Modules" class="w-5 h-5 object-contain" />
    <p class="text-sm md:text-base truncate">{{ course?.curriculum?.length || 0 }} Modules</p>
  </div>

</div>

  <div class="bg-white mt-10 p-[15px] rounded-[15px] transition-transform transform hover:-translate-y-1 hover:shadow-md
">
    <p class="text-[13px] opacity-[0.8]">Course Duration</p>

    <p class="font-[550] mt-[5px]">{{ course.duration }} of instructor-led classes</p>
  </div>



            </div>
          </div>
          <div class="md:w-5/12 w-full bg-white rounded-[15px] flex flex-col items-center p-4 gap-4 ">
  
  <div class="w-full">
    <iframe
      class="w-full rounded-lg aspect-video"
      :src="videoUrl"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>

  
<div
  class="w-[80%] flex flex-col items-center justify-center border border-purple-700 rounded-2xl p-4"
>
  <p class="text-sm mb-2 text-center">
    Program fee payment can be in installments
  </p>
  <button 
    class="enrollbutton w-full md:w-auto px-6 py-2 rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-md"
    :class="nav === 'costs' ? 'active-class' : ''"
    @click="scrollToSection('costs')"
  >
    Enroll Now
  </button>
</div>

</div>

        </div>
      </div>
    </section>

  <section class="ml-[80px] hidden lg:flex md:flex-row md:flex-wrap">
  <div
    class="opacity-[0.8] flex bg-gray-200 gap-[10px] w-11/12 rounded-[50px] p-[15px]"
  >
    <button
      class="shortcut flex-1 rounded-[30px] p-2"
      :class="nav === 'description' ? 'bg-[#4D148C] text-white' : ''"
      @click="scrollToSection('description')"
    >
      Course Description
    </button>

    <button
      class="shortcut flex-1 rounded-[30px] p-2"
      :class="nav === 'curriculum' ? 'bg-[#4D148C] text-white' : ''"
      @click="scrollToSection('curriculum')"
    >
      Curriculum
    </button>

    <button
      class="shortcut flex-1 rounded-[30px] p-2"
      :class="nav === 'instructors' ? 'bg-[#4D148C] text-white' : ''"
      @click="scrollToSection('instructors')"
    >
      Course Instructors
    </button>

    <button
      class="shortcut flex-1 rounded-[30px] p-2"
      :class="nav === 'jobs' ? 'bg-[#4D148C] text-white' : ''"
      @click="scrollToSection('jobs')"
    >
      Job Opportunities
    </button>

    <button
      class="shortcut flex-1 rounded-[30px] p-2"
      :class="nav === 'reviews' ? 'bg-[#4D148C] text-white' : ''"
      @click="scrollToSection('reviews')"
    >
      Reviews
    </button>

    <button
      class="shortcut flex-1 rounded-[30px] p-2"
      :class="nav === 'costs' ? 'bg-[#4D148C] text-white' : ''"
      @click="scrollToSection('costs')"
    >
      Cost & Payment Plan
    </button>
  </div>
</section>



    <section class="mt-[40px] w-[90%] ">
      <div class="ml-[80px]" >

        <div  id="description" class="border border-slate-300 rounded-[20px] p-[15px] bg-gray-100 mb-[40px]" >
          <h1 class="font-[800] text-[30px]">Course Description</h1>

          <p class="mt-[20px]" v-if="course"> {{ course.fullDescription }}</p>

        </div>

        <div  id="curriculum" class="border border-slate-300 rounded-[20px] p-[15px] bg-gray-100 mb-[40px]" >

          <h1 class="font-[800] text-[30px]">Course Curriculum</h1>

          <div v-if="course && course.curriculum">
            <ul class="list-disc pl-5">
              <li v-for="(item, index) in course.curriculum" :key="index">

                {{ item }}
              </li>
            </ul>

          </div>

        </div >

        <div
  id="instructors"
  class="border border-slate-300 rounded-[20px] p-4 bg-gray-100 mb-10 shadow-md"
>
  <h1 class="font-extrabold text-2xl md:text-3xl mb-4">Meet Your Instructors</h1>

  <div
    class="border border-black/20 rounded-[15px] p-4 flex flex-col items-center
           w-full md:w-1/4 h-auto md:h-[370px] mx-auto"
  >
    <div
      class="w-24 h-24 md:w-20 md:h-20 rounded-full border border-black
             overflow-hidden flex items-center justify-center mb-4"
    >
      <img
        src="@/assets/icons8-user-50.png"
        alt="Instructor"
        class="w-full h-full object-cover"
      />
    </div>

    <p class="text-center text-sm md:text-base">Instructor Name</p>
  </div>
</div>


     <div  
  id="jobs" 
  class="border border-slate-300 rounded-[20px] p-[15px] bg-gray-100 mb-[40px]"
>
  <h1 class="font-[800] text-[30px] m-[10px]">Job Opportunities</h1>

  <div v-if="jobOpportunities.length" class="flex flex-wrap gap-4">
    <a
      v-for="(job, index) in jobOpportunities"
      :key="index"
      :href="`https://www.google.com/search?q=${encodeURIComponent(job)}`"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-3 border rounded-[10px] h-[60px] px-4 bg-white shadow-sm w-fit 
             transition-transform transform hover:-translate-y-1 hover:shadow-md"
    >
      <img src="@/assets/icons8-target-48.png" class="w-[30px] h-[30px]" />
      <p class="font-[600] text-[18px]">{{ job }}</p>
    </a>
  </div>
</div>


        <div
        id="reviews"
        class="border border-slate-300 rounded-[20px] p-[15px] bg-gray-100 mb-[40px]"
      >
        <h1 class="font-[800] text-[30px]">Reviews</h1>

        <div class="border border-black rounded-[15px] p-[10px] mt-[15px]">
       
        <div class="flex items-end gap-2 mt-[20px]">
          <textarea
            v-model="newReview.comment"
            placeholder="Write a review"
            class="w-full  outline-none italic p-[10px] resize-none"
            rows="4"
          ></textarea>

          <div class="flex flex-col items-center space-y-[50px]">
           
            <div class="flex items-center gap-1" aria-label="Select rating">
              <button
                v-for="i in 5"
                :key="i"
                type="button"
                class="focus:outline-none"
                :aria-pressed="i <= newReview.rating"
                @click="newReview.rating = i"
                :title="`Rate ${i} star${i>1?'s':''}`"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                  :class="i <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'"
                >
                  <path
                    d="M12 .587l3.668 7.568L24 9.748l-6 5.849L19.336 24 12 19.897 4.664 24 6 15.597 0 9.748l8.332-1.593z"
                  />
                </svg>
              </button>
            </div>

           
            <button
              class="bg-[#4d148c] text-white px-4 py-2 rounded-lg"
              :disabled="submitting"
              @click="submitReview"
            >
              <span v-if="!submitting" >Send</span>
              <span v-else>Sending...</span>
            </button>
            </div>
          </div>
        </div>

       
        <p class="text-sm text-red-600 mt-2" v-if="errorMsg">{{ errorMsg }}</p>
        <p class="text-sm text-green-600 mt-2" v-if="successMsg">{{ successMsg }}</p>

        <div class="mt-6">
          
          <div v-if="visibleReviews.length === 0" class="text-gray-500 italic">
            No reviews yet. Be the first to write one!
          </div>

         
          <div
            v-for="rev in visibleReviews"
            :key="rev._id"
            class=" py-3 bg-white rounded-md px-3 mb-5"
          >
            <p class="font-semibold">
              {{ rev?.userId?.name || 'Anonymous' }}
            </p>

            <div class="flex items-center gap-2">
            
              <div class="flex py-[5px]">
                <svg
                  v-for="i in 5"
                  :key="i"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-4 h-4"
                  :class="i <= rev.rating ? 'text-yellow-400' : 'text-gray-300'"
                  fill="currentColor"
                >
                  <path
                    d="M12 .587l3.668 7.568L24 9.748l-6 5.849L19.336 24 12 19.897 4.664 24 6 15.597 0 9.748l8.332-1.593z"
                  />
                </svg>
              </div>

              
              <span class="text-xs text-gray-500">
                {{ formatDate(rev.createdAt) }}
              </span>
            </div>

           
            <p class="mt-1 whitespace-pre-line">
              {{ rev.comment }}
            </p>

            
           
          </div>

          
          <div class="mt-4 flex items-center gap-4" v-if="reviews.length > 3">
            <button
              v-if="visibleCount < reviews.length"
              @click="showMore"
              class="text-purple-700 flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clip-rule="evenodd"
                />
              </svg>
              Show more
            </button>

            <button
              v-if="visibleCount > 3"
              @click="showLess"
              class="text-purple-700 flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M14.77 12.79a.75.75 0 01-1.06-.02L10 9.06l-3.71 3.7a.75.75 0 11-1.06-1.06l4.24-4.24a.75.75 0 011.06 0l4.24 4.24c.29.29.29.77 0 1.06z"
                  clip-rule="evenodd"
                />
              </svg>
              Show less
            </button>
          </div>
        </div>
      </div>

        <div
        id="costs"
        class="border border-slate-300 rounded-[20px] p-[15px] bg-gray-100 mb-[40px]"
      >
        <h1 class="font-[800] text-[30px]">Cost and Payment Plan</h1>

        <div
          class="mt-10 flex justify-center items-center gap-10 flex-wrap"
        >
          <!-- Installments -->
          <div
            class="w-[450px] h-[300px] bg-white rounded-2xl shadow-xl flex flex-col items-start justify-between p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">
                Pay In Installments
              </h3>
              <p class="text-gray-600">
                Split your payment into 2 easy installments
              </p>
            </div>

            <div class="mt-4">
              <ul class="space-y-3">
                <li class="flex items-center gap-3">
                  <img
                    src="@/assets/icons8-tick-50.png"
                    class="w-5 h-5"
                  />
                  <p class="text-gray-700 font-medium">
                    Pay 70% upfront to get started
                  </p>
                </li>
                <li class="flex items-center gap-3">
                  <img
                    src="@/assets/icons8-tick-50.png"
                    class="w-5 h-5"
                  />
                  <p class="text-gray-700 font-medium">
                    Access your courses right away
                  </p>
                </li>
                <li class="flex items-center gap-3">
                  <img
                    src="@/assets/icons8-tick-50.png"
                    class="w-5 h-5"
                  />
                  <p class="text-gray-700 font-medium">
                    Settle the remaining 30% later with ease
                  </p>
                </li>
              </ul>
            </div>

            <button
              class="mt-6 px-6 py-3 rounded-xl border-2 border-[#4d148c] text-white font-semibold bg-[#4d148c] shadow-md transition-all duration-300 hover:bg-white hover:text-purple-700 hover:shadow-lg"
              @click="openPaymentModal(0.7)"
            >
              Pay now ?
            </button>
          </div>

          <!-- Full Payment -->
          <div
            class="w-[450px] h-[300px] bg-white rounded-2xl shadow-xl flex flex-col items-start justify-between p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">
                Pay Full Price
              </h3>
              <p class="text-gray-600">
                One-time payment for the full course
              </p>
            </div>

            <div class="mt-4">
              <ul class="space-y-3">
                <li class="flex items-center gap-3">
                  <img
                    src="@/assets/icons8-tick-50.png"
                    class="w-5 h-5"
                  />
                  <p class="text-gray-700 font-medium">
                    Pay 100% upfront in a single transaction
                  </p>
                </li>
                <li class="flex items-center gap-3">
                  <img
                    src="@/assets/icons8-tick-50.png"
                    class="w-5 h-5"
                  />
                  <p class="text-gray-700 font-medium">
                    Get instant access to the course
                  </p>
                </li>
                <li class="flex items-center gap-3">
                  <img
                    src="@/assets/icons8-tick-50.png"
                    class="w-5 h-5"
                  />
                  <p class="text-gray-700 font-medium">You’re all set</p>
                </li>
              </ul>
            </div>

            <button
              class="mt-6 px-6 py-3 rounded-xl border-2 border-purple-100 text-white font-semibold bg-[#4d148c] shadow-md transition-all duration-300 hover:bg-white hover:border-[#4d148c] hover:text-purple-700 hover:shadow-lg"
              @click="openPaymentModal(1)"
            >
              Pay now ?
            </button>
          </div>
        </div>
      </div>

      <!-- Payment Modal -->
      <div
  v-if="showPaymentModal"
  class="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
>
  <div
    class="bg-white w-2/4 h-[400px] rounded-lg p-6 flex flex-col justify-between shadow-xl"
  >
    <h2 class="text-2xl font-bold mb-4">
      {{ selectedInstallment === 1 ? "Pay Full Price" : "Pay Installment" }}
    </h2>

    <p class="text-gray-700 mb-6">
      <span v-if="selectedInstallment === 1">
        You are about to pay <strong>₦{{ course?.price }}</strong> in full for this course.
      </span>
      <span v-else>
        You are about to pay <strong>₦{{ Math.ceil(course?.price * 0.7) }}</strong> now  
        and pay the remaining <strong>₦{{ Math.floor(course?.price * 0.3) }}</strong> later.
      </span>
    </p>

    <div class="flex justify-end gap-4">
      <button
        class="px-4 py-2 rounded-lg border border-gray-400"
        @click="showPaymentModal = false"
      >
        Cancel
      </button>
      <button
        class="px-4 py-2 rounded-lg bg-purple-700 text-white"
        @click="proceedPayment"
      >
        Proceed
      </button>
    </div>
  </div>
</div>


      </div>
    </section>

    <footer class="bg-[#131313] text-white pt-10 pb-10 px-6 md:px-16 mt-8">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

    
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

    
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      
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

     
      <div class="flex flex-col gap-2">
        <p class="font-bold">Ways to Learn</p>
        <p class="text-xs">Self-paced Courses</p>
        <p class="text-xs">Incubator Programs</p>
        <p class="text-xs">Cohort-based Courses</p>
        <p class="text-xs">Enterprise Learning</p>
        <p class="text-xs">Career-building Paths</p>
      </div>

      
      <div class="flex flex-col gap-2">
        <p class="font-bold">Courses</p>
        <p class="text-xs">MS Excel</p>
        <p class="text-xs">R</p>
        <p class="text-xs">Power BI</p>
        <p class="text-xs">Python</p>
        <p class="text-xs">SQL</p>
      </div>
    </div>

    
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

    </div>
    </div>
  </template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, nextTick, computed } from "vue";
import axios from "axios";

// Existing refs
const course = ref(null);
const route = useRoute();
const courseId = route.params.id;
const jobOpportunities = ref([]);
const loading = ref(true);
const videoUrl = ref("https://www.youtube.com/embed/yZvFH7B6gKI?controls=1&autoplay=0");

const currentUserId = ref(localStorage.getItem("userId") || null);
const reviews = ref([]);
const visibleCount = ref(3);
const visibleReviews = computed(() =>
  reviews.value.slice(0, visibleCount.value)
);

const newReview = ref({ rating: 0, comment: "" });
const submitting = ref(false);
const errorMsg = ref("");
const successMsg = ref("");

// Navigation state
const nav = ref("description");

// Payment modal state
const showPaymentModal = ref(false);
const selectedInstallment = ref(1);


const openPaymentModal = (installment) => {
  selectedInstallment.value = installment;
  showPaymentModal.value = true;
};

const proceedPayment = async () => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email"); 

  if (!token || !email) {
    alert("Missing login info. Please log in again.");
    return;
  }

  try {
    const installment =
      selectedInstallment.value === 1 ? 1 : 0.7; 

    const response = await axios.post(
      `https://zacraclearningwebsite.onrender.com/payment/initiate-payment/${courseId}`,
      {
        email,          
        installment,    
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // header field
        },
      }
    );

    console.log("Payment response:", response.data);

    console.log("Sending token:", token);
   console.log("Headers:", {
  Authorization: `Bearer ${token}`
});

    // If backend sends Paystack URL back:
    if (response.data?.authorization_url) {
      window.location.href = response.data.authorization_url;
    } else {
      alert("Payment initiated!");
    }
  } catch (error) {
    console.error("Payment error:", error);
    alert(error?.response?.data?.message || "Failed to initiate payment");
  }
};


const formatDate = (iso) => {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const showMore = () =>
  (visibleCount.value = Math.min(visibleCount.value + 10, reviews.value.length));
const showLess = () => {
  visibleCount.value = 3;
  requestAnimationFrame(() => scrollToSection("reviews"));
};

const submitReview = async () => {
  errorMsg.value = "";
  successMsg.value = "";

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  if (!token || !userId) {
    errorMsg.value = "You need to log in before posting a review.";
    return;
  }

  if (newReview.value.rating < 1 || newReview.value.rating > 5) {
    errorMsg.value = "Please select a star rating (1–5).";
    return;
  }
  if (!newReview.value.comment.trim()) {
    errorMsg.value = "Please write a review comment.";
    return;
  }

  submitting.value = true;
  try {
    const response = await axios.post(
      `https://zacraclearningwebsite.onrender.com/review/${courseId}/add-review?user=${userId}`,
      { rating: newReview.value.rating, comment: newReview.value.comment },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const created = response?.data?.review || {
      _id: Math.random().toString(36).slice(2),
      userId: { _id: currentUserId.value, name: "You" },
      rating: newReview.value.rating,
      comment: newReview.value.comment.trim(),
      createdAt: new Date().toISOString(),
    };

    reviews.value.unshift(created);
    newReview.value.rating = 0;
    newReview.value.comment = "";
    successMsg.value = "Review submitted!";
  } catch (e) {
    errorMsg.value = e?.response?.data?.message || "Failed to submit review.";
  } finally {
    submitting.value = false;
  }
};

const scrollToSection = async (id) => {
  nav.value = id;
  await nextTick();
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY;
    const offset = 120;
    window.scrollTo({ top: y - offset, behavior: "smooth" });
  }
};



// Fetch course details
onMounted(async () => {
  try {
    const response = await axios.get(
      `https://zacraclearningwebsite.onrender.com/courses/${courseId}`
    );
    course.value = response.data.course;
    jobOpportunities.value = response.data.jobOpportunities;

    reviews.value = (response.data.reviews || []).map((rev) => ({
      ...rev,
    }));
  } catch (error) {
    console.error("Error fetching by Id:", error);
  } finally {
    loading.value = false;
  }
});


</script>





<style scoped>
.miniex {
  height: 30px;
  border-radius: 30px;
  background-color: white;
  width: 28%;
  font-size: 14px;
  font-weight: 550;
  display: flex;
  justify-content: center;
  gap: 7px;
}
.shortcut:hover{

  outline: black solid 1px;
  cursor: pointer;
  border-radius: 20px;
}
</style>
