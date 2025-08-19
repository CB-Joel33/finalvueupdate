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
                    class="h-[30px] w-[30px]"
                  />
                  <p class="flex-wrap w-[65px]">{{ course.duration }}</p>
                </div>
              </div>
            <div class="mt-5 flex items-center gap-6 bg-white p-3 rounded flex-col md:flex-row flex-wrap">
    
  
    <div class="flex items-center gap-2 ">
      <img src="@/assets/icons8-signal-16.png" alt="" class="w-5 h-5 object-contain">
      <p>Beginner and Intermediate</p>
    </div>

    <p>&</p>


    <div class="flex items-center gap-2">
      <img src="@/assets/icons8-signal-25.png" alt="" class="w-5 h-5 object-contain">
      <p>Experienced</p>
    </div>


    <div class="flex items-center gap-2">
      <img src="@/assets/icons8-play-50.png" alt="" class="w-5 h-5 object-contain">
      <p>{{ course.curriculum.length }} Modules</p>
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
        Cost & Payment Plans
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

        <div id="instructors" class="border border-slate-300 rounded-[20px] p-[15px] bg-gray-100 mb-[40px]" >

          <h1 class="font-[800] text-[30px]">Meet Your Instructors</h1>
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
        <div  id="reviews" class="border border-slate-300 rounded-[20px] p-[15px] bg-gray-100 mb-[40px]" >
          <h1 class="font-[800] text-[30px]">Reviews</h1>

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
 import { ref, onMounted, nextTick  } from "vue";
  import axios from "axios";



  const course = ref(null);
  const route = useRoute();
  const courseId = route.params.id;
  const jobOpportunities = ref([]);
  const loading = ref(true);


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


  


  onMounted(async () => {
    try {
      const response = await axios.get(
        `https://zacraclearningwebsite.onrender.com/courses/${courseId}`
      );
      course.value = response.data.course;
      jobOpportunities.value = response.data.jobOpportunities;

      console.log(response);
    } catch (error) {
      console.error("Error fetching by Id:", error);
    }finally {
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
