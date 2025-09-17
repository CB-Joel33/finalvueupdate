import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(faChevronLeft, faChevronRight)

import './style.css'

import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'


const app = createApp(App)

// Register FontAwesome globally
app.component('font-awesome-icon', FontAwesomeIcon)

// Use Google login
app.use(vue3GoogleLogin, {
  clientId: '1028139943098-jto9t0br679t3dih6cgm2cq7mek5qdu6.apps.googleusercontent.com',
})

app.use(router)
app.mount('#app')
