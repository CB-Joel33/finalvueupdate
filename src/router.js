import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import LoginPage from './pages/LoginPage.vue'
import OTPverification from './pages/OTPverification.vue'
import ForgotPassword from './pages/ForgotPassword.vue'

// course pages
import BackEnd from './pages/CoursePages/BackEnd.vue'
import FrontEnd from './pages/CoursePages/FrontEnd.vue'
import FullStack from './pages/CoursePages/FullStack.vue'
import CyberSecurity from './pages/CoursePages/CyberSecurity.vue'
import DataAnalysisPowerBi from './pages/CoursePages/DataAnalysisPowerBi.vue'
import DataAnalyticsExcel from './pages/CoursePages/DataAnalyticsExcel.vue'
import DataAnalyticsSQL from './pages/CoursePages/DataAnalyticsSQL.vue'
import DataSciencePython from './pages/CoursePages/DataSciencePython.vue'
import DataScienceSQL from './pages/CoursePages/DataScienceSQL.vue'
import DefenseHacking from './pages/CoursePages/DefenseHacking.vue'
import EthicalHacking from './pages/CoursePages/EthicalHacking.vue'
import MachineLearning from './pages/CoursePages/MachineLearning.vue'
import PMMethodology from './pages/CoursePages/PMMethodology.vue'
import ProductDesign from './pages/CoursePages/ProductDesign.vue'
import ProductDesignAdv from './pages/CoursePages/ProductDesignAdv.vue'
import ProductDesigninter from './pages/CoursePages/ProductDesigninter.vue'
import ProjectManagement from './pages/CoursePages/ProjectManagement.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/otp-verification', name: 'OTPverification', component: OTPverification },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },

  // course routes
  { path: '/course/backend', name: 'BackEnd', component: BackEnd },
  { path: '/course/frontend', name: 'FrontEnd', component: FrontEnd },
  { path: '/course/fullstack', name: 'FullStack', component: FullStack },
  { path: '/course/cybersecurity', name: 'CyberSecurity', component: CyberSecurity },
  { path: '/course/DataAnalysiswithPowerbi', name: 'DataAnalysisPowerBi', component: DataAnalysisPowerBi },
  { path: '/course/DataAnalyticswithExcel', name: 'DataAnalyticsExcel', component: DataAnalyticsExcel },
  { path: '/course/DataAnalyticsSQL', name: 'DataAnalyticsSQL', component: DataAnalyticsSQL },
  { path: '/course/DataSciencePython', name: 'DataSciencePython', component: DataSciencePython },
  { path: '/course/DataScienceSQL', name: 'DataScienceSQL', component: DataScienceSQL },
  { path: '/course/DefenseHacking', name: 'DefenseHacking', component: DefenseHacking },
  { path: '/course/EthicalHacking', name: 'EthicalHacking', component: EthicalHacking },
  { path: '/course/MachineLearning', name: 'MachineLearning', component: MachineLearning },
  { path: '/course/PMMethodology', name: 'PMMethodology', component: PMMethodology },
  { path: '/course/ProductDesign', name: 'ProductDesign', component: ProductDesign },
  { path: '/course/ProductDesignAdv', name: 'ProductDesignAdv', component: ProductDesignAdv },
  { path: '/course/ProductDesigninter', name: 'ProductDesigninter', component: ProductDesigninter },
  { path: '/course/ProjectManagement', name: 'ProjectManagement', component: ProjectManagement },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 } 
  }
})

export default router
