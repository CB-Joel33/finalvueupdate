import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import LoginPage from './pages/LoginPage.vue'
import OTPverification from './pages/OTPverification.vue'
import ForgotPassword from './pages/ForgotPassword.vue'
import AllCourses from './pages/AllCourses.vue'
import CoursesDetails from './pages/CoursesDetails.vue'
import ResetPassword from "@/pages/ResetPassword.vue"




const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/otp-verification', name: 'OTPverification', component: OTPverification },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },
   { path: "/reset-password/:token", component: ResetPassword },
   { path: '/allCourses', name: 'AllCourses', component: AllCourses },
   { path: '/allCourses/:id', name: 'CoursesDetail', component: CoursesDetails },

  

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 } 
  }
})

export default router
