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
              <div style="margin-top: 20px; gap: 7px; display: flex">
                <div class="bg-white rounded-full py-[2px] font-semibold  flex items-center gap-2 px-3">
                  <img
                    src="@/assets/ph--chalkboard-teacher-light.svg"
                    class="h-5 w-5"
                  />
                  <p>Instructor lead course</p>
                </div>

                <div class="bg-white rounded-full py-1 font-semibold flex items-center gap-2 px-6">
                  <img
                    src="@/assets/material-symbols--timer-outline-rounded.svg"
                    class="h-[30px] w-[33px]"
                  />
                  <p class="flex-wrap w-[70px]">{{ course.duration }}</p>
                </div>
              </div>
            <div class="mt-5 flex items-center gap-6 bg-white p-3 rounded flex-col md:flex-row flex-wrap">
    
  
    <div class="flex items-center gap-1 ">
      <img src="@/assets/icons8-signal-16.png" alt="" class="w-5 h-5 object-contain">
      <p>Beginner and Intermediate</p>
    </div>

    <p>&</p>


    <div class="flex items-center gap-1">
      <img src="@/assets/icons8-signal-25.png" alt="" class="w-5 h-5 object-contain">
      <p>Experienced</p>
    </div>


    <div class="flex items-center gap-2">
      <img src="@/assets/icons8-play-50.png" alt="" class="w-5 h-5 object-contain">
      <p>{{ course?.curriculum?.length || 0 }} Modules</p>
    </div>

  </div>
  <div class="bg-white mt-10 p-[15px] rounded-[15px]">
    <p class="text-[13px] opacity-[0.8]">Course Duration</p>

    <p class="font-[550] mt-[5px]">{{ course.duration }} of instructor-led classes</p>
  </div>



            </div>
          </div>
          <div class="md:w-5/12 w-full bg-white rounded-[15px] flex ">
            <div><!-- video  --></div>
            <div
              style="
                display: flex;
                margin: auto;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                width: 80%;
                height: 120px;
                border: 1px solid #4d148c;
                border-radius: 20px;
              
              "
            >
              <p style="font-size: 13px; padding-bottom: 5px">
                Program fee payment can be in installments
              </p>
              <button class="enrollbutton">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>

   <section class="ml-[80px] hidden md:flex md:flex-row md:flex-wrap">
    <div
      class="opacity-[0.8] flex bg-gray-200 gap-[10px] w-3/4 rounded-[50px] p-[5px]"
    >
      <button
        class="shortcut w-[170px] rounded-[30px] p-2"
        :class="nav === 'description' ? 'border-2 border-purple-600 bg-white' : ''"
        @click="scrollToSection('description')"
      >
        Course Description
      </button>

      <button
        class="shortcut w-[170px] rounded-[30px] p-2"
        :class="nav === 'curriculum' ? 'border-2 border-purple-600 bg-white' : ''"
        @click="scrollToSection('curriculum')"
      >
        Curriculum
      </button>

      <button
        class="shortcut w-[170px] rounded-[30px] p-2"
        :class="nav === 'instructors' ? 'border-2 border-purple-600 bg-white' : ''"
        @click="scrollToSection('instructors')"
      >
        Course Instructors

        
      </button>

      <button
        class="shortcut w-[170px] rounded-[30px] p-2"
        :class="nav === 'jobs' ? 'border-2 border-purple-600 bg-white' : ''"
        @click="scrollToSection('jobs')"
      >
        Job Opportunities
      </button>

      <button
        class="shortcut w-[170px] rounded-[30px] p-2"
        :class="nav === 'reviews' ? 'border-2 border-purple-600 bg-white' : ''"
        @click="scrollToSection('reviews')"
      >
        Reviews
      </button>

      <button
        class="shortcut w-[170px] rounded-[30px] p-2"
        :class="nav === 'costs' ? 'border-2 border-purple-600 bg-white' : ''"
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

        <div id="instructors" class="border border-slate-300 rounded-[20px] p-[15px] bg-gray-100 mb-[40px] shadow-md" >

          <h1 class="font-[800] text-[30px]">Meet Your Instructors</h1>

          <div class="border border-black-1 w-1/4 h-[370px] rounded-[15px] mt-[20px] p-[15px] ">

          <div class="w-20 h-20 rounded-full border border-black overflow-hidden flex items-center justify-center">
           <img src="@/assets/icons8-user-50.png" alt="" class="w-full h-full object-cover">
          </div>

        </div>
        </div>

        <div  id="jobs" class="border border-slate-300 rounded-[20px] p-[15px] bg-gray-100 mb-[40px]" >
          <h1 class="font-[800] text-[30px] m-[10px]">Job Opportunities</h1>

          <div v-if="jobOpportunities.length" class="flex flex-wrap gap-4">
          <div
          v-for="(job, index) in jobOpportunities"
         :key="index"
         class="flex items-center gap-3 border rounded-[10px] h-[60px] px-4 bg-white shadow-sm w-fit"
  >
    <img src="@/assets/icons8-target-48.png" class="w-[30px] h-[30px]" />
   <p class="font-[600] text-[18px]"> {{ job }}</p>
  </div>
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

            
             <div class="text-sm text-gray-500 mt-1 flex items-center gap-1">
    <!-- Like button -->
    <button 
      @click="toggleLike(rev)" 
      class="focus:outline-none"
    >
      👍
    </button>

    <!-- Display like count -->
    <span>{{ rev.likesCount || (rev.likes ? rev.likes.length : 0) || 0 }}</span>
  </div>
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

        <div  id="costs" class="border border-slate-300 rounded-[20px] p-[15px] bg-gray-100 mb-[40px]" >
          <h1 class="font-[800] text-[30px]">Cost and Payment Plan</h1>

        </div>

      </div>
    </section>

    <footer style="background-color: #131313; color: white; padding: 40px 60px">
      <div
        style="
          display: grid;
          grid-template-columns: 1fr 1.5fr 0.5fr;
          gap: 40px;
          height: 100%;
        "
      >
        <div style="display: flex; flex-direction: column; gap: 15px">
          <img src="@/assets/Logo (1).png" alt="Logo" style="width: 200px" />
          <p
            style="
              font-family: 'Abel', sans-serif;
              font-size: 30px;
              margin-top: 10px;
            "
          >
            Africa’s No. 1 Data<br />
            School
          </p>
          <div style="margin: 0 -10px; display: flex; align-items: center">
            <img src="@/assets/Frame 58.png" style="margin-right: -25px" />
            <img src="@/assets/Frame 59.png" style="margin-right: -25px" />
            <img src="@/assets/Frame 60.png" style="margin-right: -25px" />
            <img src="@/assets/Frame 61.png" style="margin-right: -25px" />
          </div>

          <p
            style="
              font-family: 'Matter', sans-serif;
              font-size: 10px;
              opacity: 0.7;
            "
          >
            © Copyright 2025 All Rights Reserved
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px">
          <div style="display: flex; flex-direction: column; gap: 15px">
            <p style="font-weight: bold">Quick Links</p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">Blog</p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">
              Pricing
            </p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">
              Instructors
            </p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">
              Careers
            </p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">
              Affiliate Program
            </p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">
              Support
            </p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">
              Terms & Condition
            </p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">
              Privacy Policies
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 15px">
            <p style="font-weight: bold">Ways to Learn</p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">
              Self-paced Courses
            </p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">
              Incubator Programs
            </p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">
              Cohort-based Courses
            </p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">
              Enterprise Learning
            </p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">
              Career-building Paths
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 15px">
            <p style="font-weight: bold">Courses</p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">
              MS Excel
            </p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">R</p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">
              Power BI
            </p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">
              Python
            </p>
            <p style="font-family: 'Matter', sans-serif; font-size: 12px">SQL</p>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 15px">
          <p style="font-weight: bold">Visit Us</p>
          <p style="font-family: 'Matter', sans-serif; font-size: 12px">
            2nd Floor, Sovereign Trust Insurance Building, Alagbaka, Akure, Ondo
            State, Nigeria.
          </p>
          <p style="font-family: 'Matter', sans-serif; font-size: 12px">
            Be the first to know about our exciting offers on Data Science, AI,
            and ML courses.
          </p>

          <div>
            <input
              type="email"
              placeholder="Type email Here..."
              style="
                font-family: 'Matter', sans-serif;
                font-size: 9px;
                color: white;
                background-color: black;
                border: none;
                border-bottom: 2px solid #333385;
                height: 30px;
                width: 170px;
              "
            />
            <img src="@\assets\Frame 527.png" />
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

const course = ref(null);
const route = useRoute();
const courseId = route.params.id;
const jobOpportunities = ref([]);
const loading = ref(true);

const currentUserId = ref(localStorage.getItem("userId") || null); // ✅ pull from localStorage directly

const reviews = ref([]);
const visibleCount = ref(3);
const visibleReviews = computed(() =>
  reviews.value.slice(0, visibleCount.value)
);

const newReview = ref({
  rating: 0,
  comment: "",
});

const submitting = ref(false);
const errorMsg = ref("");
const successMsg = ref("");

// Format review date
const formatDate = (iso) => {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Show more/less reviews
const showMore = () => {
  visibleCount.value = Math.min(visibleCount.value + 10, reviews.value.length);
};

const showLess = () => {
  visibleCount.value = 3;
  requestAnimationFrame(() => scrollToSection("reviews"));
};



  const submitReview = async () => {
  console.log("submitReview called");

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
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );

    const created = response?.data?.review || {
      _id: Math.random().toString(36).slice(2),
      userId: { _id: currentUserId.value, name: "You" },
      rating: newReview.value.rating,
      comment: newReview.value.comment.trim(),
      likes: [],
      likesCount: 0,
      createdAt: new Date().toISOString(),
    };

    reviews.value.unshift(created);

    newReview.value.rating = 0;
    newReview.value.comment = "";
    successMsg.value = "Review submitted!";
  } catch (e) {
    console.error("Submit review failed:", e);
    errorMsg.value = e?.response?.data?.message || "Failed to submit review.";
  } finally {
    submitting.value = false;
  }
};


const nav = ref("description");
const scrollToSection = async (id) => {
  nav.value = id;

  await nextTick();
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY;
    const offset = 120;
    window.scrollTo({
      top: y - offset,
      behavior: "smooth",
    });
  }
};
const toggleLike = async (rev) => {
  const token = localStorage.getItem("token"); // get JWT from localStorage
  const userId = localStorage.getItem("userId"); // get logged-in user ID

  if (!token || !userId) {
    alert("You need to log in to like reviews"); // inform user if not logged in
    return;
  }

  try {
    // TODO: Make sure backend supports this route
    // POST /review/:reviewId/like -> toggles like
    const response = await axios.post(
      `https://zacraclearningwebsite.onrender.com/review/${rev._id}/like`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    // Update the review likes in local state for instant UI feedback
    rev.likesCount = response.data.likesCount; 
  } catch (e) {
    console.error("Failed to like review", e);
  }
};


onMounted(async () => {
  try {
    const response = await axios.get(
      `https://zacraclearningwebsite.onrender.com/courses/${courseId}`
    );
    course.value = response.data.course;
    jobOpportunities.value = response.data.jobOpportunities;
    reviews.value = response.data.reviews || [];
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
