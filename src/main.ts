/* eslint-disable @typescript-eslint/ban-ts-ignore */

import '@/assets/styles/tailwind.css'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueCompositionApi from '@vue/composition-api'

// Globally register all `_base`-prefixed components
import '@/components/globals'

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
// If running inside Cypress...
if (process.env.VUE_APP_TEST === 'e2e') {
  // Ensure tests fail when Vue emits an error.
  // @ts-ignore
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}

Vue.use(VueCompositionApi)

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// If running e2e tests...
if (process.env.VUE_APP_TEST === 'e2e') {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`.
  // @ts-ignore
  window.__app__ = app
}
