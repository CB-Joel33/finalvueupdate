import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import OTPverification from "@/pages/OTPverification.vue";
import ForgotPassword from "@/pages/ForgotPassword.vue";
import AllCourses from "@/pages/AllCourses.vue";
import CoursesDetails from "@/pages/CoursesDetails.vue";
import ResetPassword from "@/pages/ResetPassword.vue";
import TestimonialPage from "@/pages/Testimonial.vue";
import AboutUsPage from "@/pages/aboutUs.vue";
import CompanyPage from "@/pages/aboutCompany.vue";
import ContactPage from "@/pages/contactUs.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/otp-verification", name: "OTPverification", component: OTPverification },
  { path: "/forgot-password", name: "ForgotPassword", component: ForgotPassword },
  { path: "/resetpassword/:token", component: ResetPassword },
  { path: "/allCourses", name: "AllCourses", component: AllCourses },
  { path: "/allCourses/:id", name: "CoursesDetail", component: CoursesDetails },
    { path: "/testimonials", component: TestimonialPage },
  { path: "/aboutus", component: AboutUsPage },
  { path: "/aboutcompany", component: CompanyPage },
  { path: "/contact", component: ContactPage },

  
   {
    path: "/token=:token",
    beforeEnter: (to, from, next) => {
      const token = to.params.token;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("loginTime", Date.now());
      }

      next("/");
     }
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;