// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import myFirebase from '@/plugins/MyFirebase.js'

Vue.config.productionTip = false

const config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDERID,
  appId: process.env.APPID
}

myFirebase.init(config)

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(user => {
  new Vue({
    el: '#app',
    router,
    components: {
      App
    },
    template: '<App/>'
  })
})
