import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleOauth from 'vue3-google-oauth2';

const gAuthOptions = {
  clientId: "1028139943098-jto9t0br679t3dih6cgm2cq7mek5qdu6.apps.googleusercontent.com", 
  scope: "email profile",
  prompt: "consent"
};

import './style.css'

const app = createApp(App)

app.use(router)
app.use(vue3GoogleOauth, gAuthOptions);
app.mount('#app')