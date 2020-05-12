import '@/assets/styles/tailwind.css'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueCompositionApi from '@vue/composition-api'
import firebase from 'firebase/app'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey           : process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain       : process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL      : process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId        : process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket    : process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId            : process.env.VUE_APP_FIREBASE_APP_ID,
  }

  firebase.initializeApp(firebaseConfig)
}

Vue.config.productionTip = false
Vue.use(VueCompositionApi)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
